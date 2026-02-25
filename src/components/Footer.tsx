import type { ReactElement } from 'react'

export const Footer = (): ReactElement => {
  return (
    <footer className="border-t px-8 py-4">
      <p className="text-center text-sm text-gray-500 md:text-right">
        &copy; 2020 The Next Step Dance Studio. All rights reserved
      </p>
    </footer>
  )
}
