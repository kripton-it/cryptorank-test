import Navbar from './Navbar'
import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout