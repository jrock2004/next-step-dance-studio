import type { ReactElement } from 'react'
import { Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import { Header } from '@components/Header'
import { NavBar } from '@components/NavBar'
import { Footer } from '@components/Footer'

const Root = (): ReactElement => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <NavBar />
      <main className="flex-grow">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default Root
