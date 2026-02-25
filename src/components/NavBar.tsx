import type { ReactElement } from 'react'
import { useState } from 'react'
import { NavBarItem } from './NavBarItem'

export const NavBar = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex bg-pink-400 overflow-hidden">
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } bg-pink-400 basis-full transition-all ease-out duration-700 xl:block`}
      >
        <ul className="flex flex-col gap-8 text-slate-900 px-8 py-4 xl:flex-row">
          <NavBarItem path="/" onClick={(): void => setIsOpen(!isOpen)}>
            Home
          </NavBarItem>
          <NavBarItem path="/recital-2022" onClick={(): void => setIsOpen(!isOpen)}>
            Recital 2022
          </NavBarItem>
          <NavBarItem path="/services" onClick={(): void => setIsOpen(!isOpen)}>
            Services
          </NavBarItem>
          <NavBarItem path="/about" onClick={(): void => setIsOpen(!isOpen)}>
            About
          </NavBarItem>
          <NavBarItem path="/schedule" onClick={(): void => setIsOpen(!isOpen)}>
            Schedule
          </NavBarItem>
          <NavBarItem path="/registration" onClick={(): void => setIsOpen(!isOpen)}>
            Registration
          </NavBarItem>
          <NavBarItem path="/contact" onClick={(): void => setIsOpen(!isOpen)}>
            Contact
          </NavBarItem>
          <NavBarItem path="/photos" onClick={(): void => setIsOpen(!isOpen)}>
            Photos
          </NavBarItem>
          <NavBarItem path="/location" onClick={(): void => setIsOpen(!isOpen)}>
            Location
          </NavBarItem>
        </ul>
      </nav>
      <div className="ml-auto">
        <button
          aria-label="toggle navigation menu"
          className="mx-8 my-4 xl:hidden"
          onClick={(): void => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
