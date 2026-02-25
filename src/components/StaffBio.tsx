import type { ReactElement, ReactNode } from 'react'
import staffMember from '/staff.png'
import { Badge } from './Badge'

export type TStaffBio = {
  name: string
  title: string
  badges?: string[]
  children: ReactNode
}

export const StaffBio = ({ name, title, children, badges }: TStaffBio): ReactElement => {
  return (
    <div className="flex flex-col gap-14 items-start md:flex-row">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <img
          src={staffMember}
          className="w-72 h-auto object-cover rounded-lg"
          alt="The Next Step Dance Studio Staff Member"
          width={288}
          height={380}
        />
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-2">{name}</h3>
        <span className="text-gray-600 block mb-4">{title}</span>
        <div className="flex flex-wrap gap-2 mb-6">
          {badges && badges.map((badge) => <Badge title={badge} key={badge} />)}
        </div>
        <div>
          {typeof children === 'string' ? <p className="text-gray-600">{children}</p> : children}
        </div>
      </div>
    </div>
  )
}
