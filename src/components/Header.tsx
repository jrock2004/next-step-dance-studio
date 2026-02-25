import type { ReactElement } from 'react'
import { Link } from 'react-router'
import { AddressInfo } from './AddressInfo'

export const Header = (): ReactElement => {
  return (
    <header className="flex flex-col flex-wrap items-center justify-between px-8 pt-2 pb-8 sm:py-2 sm:flex-row sm:items-end">
      <Link to="/">
        <h1 className="text-center font-semibold text-2xl p-5 sm:text-4xl sm:text-left hover:cursor-pointer">
          The Next Step Dance Studio
        </h1>
      </Link>
      <AddressInfo align="right" />
    </header>
  )
}
