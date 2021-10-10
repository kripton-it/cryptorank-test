import { ChangeEvent, FC } from 'react'
import styled from 'styled-components'

interface INumberInputProps {
  id: string
  label: string
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  min?: number
  max?: number
  step?: number
}

const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

const StyledLabel = styled.label`
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  margin-right: 0.2rem;
  font-size: 1rem;
  font-weight: bold;
`

const StyledInput = styled.input`
  outline: none;
  border: 1px solid #000000;
  padding: 1rem;
  background-color: #ffffff;
  font-size: 1rem;
`

const NumberInput: FC<INumberInputProps> = ({ id, label, value, onChange, min = 0, max = 1000000, step = 1 }) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type='number'
        id={id}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </StyledContainer>
  )
}

export default NumberInput