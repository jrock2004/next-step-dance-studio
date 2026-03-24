import type { ReactElement, ReactNode } from 'react'
import { Link, useLocation } from 'react-router'

type TNavBarItem = {
  children: ReactNode
  path: string
  onClick: () => void
}

export const NavBarItem = ({ children, path, onClick }: TNavBarItem): ReactElement => {
  const location = useLocation()
  const isCurrentRoute =
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <li className="flex">
      <Link
        to={path}
        onClick={onClick}
        className={`relative block px-4 py-4 md:px-3 md:py-1.5 text-sm font-semibold tracking-wide uppercase transition-colors whitespace-nowrap
          border-l-2 md:border-l-0
          ${
            isCurrentRoute
              ? 'text-pink-300 border-pink-300'
              : 'text-purple-200 hover:text-white border-transparent'
          }
          after:hidden md:after:block after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:transition-all
          ${isCurrentRoute ? 'after:bg-pink-300' : 'after:bg-transparent hover:after:bg-purple-400'}
        `}
      >
        {children}
      </Link>
    </li>
  )
}
