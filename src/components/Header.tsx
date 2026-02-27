import type { ReactElement } from 'react'
import { Link } from 'react-router'

export const Header = (): ReactElement => {
  return (
    <header className="bg-white border-b border-purple-100 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="group flex flex-col leading-tight">
        <span className="font-serif text-2xl sm:text-3xl font-semibold text-studio-purple tracking-wide group-hover:text-studio-purple-mid transition-colors">
          Next Step
        </span>
        <span className="text-xs sm:text-sm font-sans font-semibold tracking-[0.2em] uppercase text-studio-pink">
          Dance Studio
        </span>
      </Link>
      <div className="hidden sm:flex flex-col items-end gap-0.5 text-right">
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
