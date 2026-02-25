import type { ReactElement } from 'react'
import { Outlet } from 'react-router'
import { Header } from '@components/Header'
import { NavBar } from '@components/NavBar'
import { Footer } from '@components/Footer'

const Root = (): ReactElement => {
  return (
    <div className="min-h-screen flex flex-col font-body">
      <Header />
      <NavBar />
      <main className="flex-grow pb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root
