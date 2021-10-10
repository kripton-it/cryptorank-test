import Navbar from './Navbar'
import { FC } from 'react'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='main'>{children}</main>
    </>
  )
}

export default Layout