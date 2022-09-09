import React from 'react'
import Header from '../components/header'
import {Outlet} from 'react-router-dom'
type Props = {}

const Layout = (props: Props) => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout