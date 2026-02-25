import type { ReactElement, ReactNode } from 'react'
import { Link, useLocation } from 'react-router'

export type TNavBarItem = {
  children: ReactNode
  path: string
  onClick: () => void
}

export const NavBarItem = ({ children, path, onClick }: TNavBarItem): ReactElement => {
  const location = useLocation()

  const isCurrentRoute = location.pathname === path

  return (
    <li className="flex">
      <Link
        to={path}
        className={`inline-block px-3 py-1 w-full overflow-hidden whitespace-nowrap hover:bg-pink-300 hover:font-semibold ${
          isCurrentRoute && 'underline'
        }`}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}
