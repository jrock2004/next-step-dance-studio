import type { ReactElement, ReactNode } from 'react'

type Props = {
  children: ReactNode
  size?: 'sm' | 'lg'
}

export function SectionHeading({ children, size = 'lg' }: Props): ReactElement {
  return (
    <div
      className={`flex items-center gap-3 mb-6 ${size === 'sm' ? 'mt-10 first:mt-0' : ''}`}
    >
      <div
        className={`w-1 bg-studio-pink rounded-full ${size === 'sm' ? 'h-6' : 'h-8'}`}
      />
      <h2
        className={`font-serif text-studio-purple font-semibold ${size === 'sm' ? 'text-xl' : 'text-2xl sm:text-3xl'}`}
      >
        {children}
      </h2>
    </div>
  )
}
