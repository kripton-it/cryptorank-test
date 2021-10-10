import { FC } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.15;
  font-size: 2rem;
`

const Title: FC = ({children}) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export default Title