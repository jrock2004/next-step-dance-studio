import type { ReactElement } from 'react'
import { Link } from 'react-router'

export const Header = (): ReactElement => {
  return (
    <header className="hidden sm:flex bg-white border-b border-purple-100 px-6 py-4 items-center justify-end md:justify-between">
      <Link to="/" className="hidden md:block">
        <img src="/logo.png" alt="The Next Step Dance Studio" className="h-14 w-auto border-0" />
      </Link>
      <div className="flex flex-col items-end gap-0.5 text-right">
        <a
          href="tel:6105822111"
          className="text-sm font-semibold text-studio-purple hover:text-studio-pink transition-colors"
        >
          (610) 582-2111
        </a>
        <span className="text-xs text-gray-500">Birdsboro, PA</span>
        <a
          href="mailto:missy@thenextstepdance.com"
          className="text-xs text-studio-pink hover:underline"
        >
          missy@thenextstepdance.com
        </a>
      </div>
    </header>
  )
}
