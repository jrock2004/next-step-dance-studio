import type { ReactElement } from 'react'

export type TAddressInfo = {
  align: 'left' | 'center' | 'right'
}

export const AddressInfo = ({ align }: TAddressInfo): ReactElement => {
  return (
    <div className={`flex flex-col gap-0.5 sm:ml-auto text-${align}`}>
      <span className="text-sm">Birdsboro, PA</span>
      <a className="text-sm" href="tel:6105822111">
        (610) 582-2111
      </a>
      <a className="text-sm underline" href="mailto:missy@thenextstepdance.com" target="new">
        missy@thenextstepdance.com
      </a>
    </div>
  )
}
