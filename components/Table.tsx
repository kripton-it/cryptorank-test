import { FC } from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  margin: 0 auto;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    border: 1px solid black;
    text-align: center;
  }
`

const Table: FC = ({ children }) => {
  return (
    <StyledTable>
      {children}
    </StyledTable>
  )
}

export default Table