import type { ReactElement } from 'react'

export function DancerPlaceholder(): ReactElement {
  return (
    <div className="w-full h-full bg-studio-purple flex items-center justify-center">
      <svg className="w-20 h-20 text-white/25" fill="currentColor" viewBox="0 0 50 70">
        {/* head */}
        <circle cx="25" cy="6" r="5.5" />
        {/* torso */}
        <path d="M22 12 C20 18 19 26 20 32 L24 32 L25 22 L26 32 L30 32 C31 26 30 18 28 12 Z" />
        {/* left arm raised */}
        <path d="M22 16 C18 13 13 10 8 7 C7 6.5 7.5 5.5 8.5 6 C13 9 18 12 22 17 Z" />
        {/* right arm extended */}
        <path d="M28 18 C32 20 37 22 42 21 C43 21 43 20 42 19.5 C37 20 32 18 28 17 Z" />
        {/* right leg down */}
        <path d="M24 32 C22 42 21 52 22 60 C22.5 62 24.5 62 25 60 C25 52 25 42 25 32 Z" />
        {/* left leg arabesque */}
        <path d="M26 32 C30 40 36 46 44 50 C45 50.5 45.5 49.5 44.5 49 C37 45 31 39 26 31 Z" />
      </svg>
    </div>
  )
}
