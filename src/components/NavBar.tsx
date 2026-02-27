import type { ReactElement } from 'react'
import { useState } from 'react'
import { NavBarItem } from './NavBarItem'

export const NavBar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const close = (): void => setIsOpen(false)

  return (
    <nav className="bg-studio-purple sticky top-0 z-50 shadow-lg">
      <div className="flex items-center justify-between px-6">
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 py-1">
          <NavBarItem path="/" onClick={close}>Home</NavBarItem>
          <NavBarItem path="/classes" onClick={close}>Classes</NavBarItem>
          <NavBarItem path="/staff" onClick={close}>Staff</NavBarItem>
          <NavBarItem path="/gallery" onClick={close}>Gallery</NavBarItem>
          <NavBarItem path="/recital" onClick={close}>Recital</NavBarItem>
          <NavBarItem path="/registration" onClick={close}>Register</NavBarItem>
          <NavBarItem path="/contact" onClick={close}>Contact</NavBarItem>
        </ul>

        {/* Mobile: logo placeholder + hamburger */}
        <div className="md:hidden flex items-center justify-between w-full py-2">
          <span className="font-serif text-white text-lg font-semibold tracking-wide">Next Step</span>
          <button
            aria-label="Toggle navigation menu"
            onClick={(): void => setIsOpen(!isOpen)}
            className="text-white p-1"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-purple-800">
          <ul className="flex flex-col py-2 px-4">
            <NavBarItem path="/" onClick={close}>Home</NavBarItem>
            <NavBarItem path="/classes" onClick={close}>Classes</NavBarItem>
            <NavBarItem path="/staff" onClick={close}>Staff</NavBarItem>
            <NavBarItem path="/gallery" onClick={close}>Gallery</NavBarItem>
            <NavBarItem path="/recital" onClick={close}>Recital</NavBarItem>
            <NavBarItem path="/registration" onClick={close}>Register</NavBarItem>
            <NavBarItem path="/contact" onClick={close}>Contact</NavBarItem>
          </ul>
        </div>
      )}
    </nav>
  )
}
