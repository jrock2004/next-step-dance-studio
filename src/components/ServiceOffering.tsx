import type { ReactElement, ReactNode } from 'react'

export type TServiceOffering = {
  title: string
  children: ReactNode
  image?: string
  price: string
}

export const ServiceOffering = ({
  title,
  children,
  image,
  price,
}: TServiceOffering): ReactElement => {
  return (
    <div className="min-w-full bg-white rounded-lg border border-gray-200 shadow-md md:min-w-24">
      {image && (
        <div className="relative h-64 overflow-hidden">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src={image}
            alt="The Next Step Dance Studio"
          />
        </div>
      )}
      <div className="p-5">
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
        <span className="block text-gray-600 mb-4">
          <span>{price}</span>
        </span>
        {typeof children === 'string' ? <p>{children}</p> : children}
      </div>
    </div>
  )
}
