import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  width: 40rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
`

const StyledLink = styled.a`
  font-size: 1.5rem;
  color: #000000;
  cursor: pointer;
`

const Navbar: FC = () => {
  return (
    <StyledHeader>
      <Link href='/'>
        <StyledLink>Converter</StyledLink>
      </Link>

      <Link href='/all-time-high'>
        <StyledLink>All Time High</StyledLink>
      </Link>
    </StyledHeader>
  )
}

export default Navbar