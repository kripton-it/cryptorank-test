import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import styled from 'styled-components'

import Title from '../components/Title'
import NumberInput from '../components/NumberInput'
import CurrencySelect from '../components/CurrencySelect'
import { IClientCurrency, IOption, IServerCurrency, SelectIndex } from '../types'

interface IConverterProps {
  currencies: IClientCurrency[]
}

interface ICurrencyState {
  1: IClientCurrency,
  2: IClientCurrency
}

const StyledCurrencyContainer = styled.div`
  display: flex;
  width: 40rem;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const StyledCurrencyButton = styled.button`
  cursor: pointer;
  align-self: center;
  padding: 0.5rem;
`

const StyledResult = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const Converter: NextPage<IConverterProps> = ({ currencies }) => {
  const defaultCurrencyState: ICurrencyState = {
    1: currencies[0],
    2: currencies[0]
  }

  const [amount, setAmount] = useState(1)  
  const [currency, setCurrency] = useState<ICurrencyState>(defaultCurrencyState)

  const getOptionFromCurrency = (currency: IClientCurrency): IOption => ({
    value: currency.id,
    name: `${currency.name} (${currency.symbol})`
  })

  const options = currencies.map(getOptionFromCurrency)

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value))
  }

  const onCurrencyChange = (selectIndex: SelectIndex ) => (e: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value)

    if (currency[selectIndex].id === value) return

    const selectedCurrency = currencies.find(elem => elem.id === value)

    if (!selectedCurrency) return

    setCurrency((prevState) => ({
      ...prevState,
      [selectIndex]: selectedCurrency
    }))
  }

  const onCurrencyFlip = () => {
    setCurrency((prevState) => ({
      1: prevState[2],
      2: prevState[1]
    }))
  }

  const jsxOptions = options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)

  const rate = (amount * currency[1].price / currency[2].price).toFixed(3)

  return (
    <div className='container'>
      <Head>
        <title>Cryptorank Test App - Converter</title>
        <meta name='description' content='Cryptocurrency Converter Calculator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <>
        <Title>
          Cryptocurrency Converter Calculator
        </Title>

        <NumberInput
          id='amount'
          label='Amount:'
          value={amount}
          onChange={onAmountChange}
          step={0.1}
        />
        <StyledCurrencyContainer>
          <CurrencySelect id='firstCurrency' onChange={onCurrencyChange(1)} value={currency[1].id}>
            {jsxOptions}
          </CurrencySelect>

          <StyledCurrencyButton title='Flip values' onClick={onCurrencyFlip}>&#8596;</StyledCurrencyButton>

          <CurrencySelect id='secondCurrency' onChange={onCurrencyChange(2)} value={currency[2].id}>
            {jsxOptions}
          </CurrencySelect>
        </StyledCurrencyContainer>

        <StyledResult>
          {amount} {currency[1].symbol} = {rate} {currency[2].symbol}
        </StyledResult>
      </>
    </div>
  )
}

export default Converter

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://api.cryptorank.io/v1/currencies?api_key=${process.env.CRYPTORANK_API_KEY}&limit=10`)
  const { data } = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const currencies = data.map((currency: IServerCurrency) => ({
    name: currency.name,
    id: currency.id,
    symbol: currency.symbol,
    price: currency.values.USD.price
  }))

  return {
    props: {
      currencies: [
        {
          name: 'United States Dollar',
          id: 0,
          symbol: 'USD',
          price: 1
        },
        ...currencies
      ]
    }
  }
}