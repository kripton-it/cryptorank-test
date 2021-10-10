import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'

interface ICurrencySelectProps {
  id: string
  value: number
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const StyledSelect = styled.select`
  outline: none;
  border: 1px solid #000000;
  padding: 1rem;
  background-color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
`

const CurrencySelect: FC<ICurrencySelectProps> = ({ children, id, value, onChange }) => {
  return (
    <StyledSelect id={id} onChange={onChange} value={value}>
      {children}
    </StyledSelect>
  )
}

export default CurrencySelect