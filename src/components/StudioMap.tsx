import type { ReactElement } from 'react'

export const StudioMap = (): ReactElement => {
  return (
    <div className="flex sm:justify-center">
      <div className="w-full sm:w-3/4">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.512559337357!2d-75.80102568373077!3d40.26436297938317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c67b660e428bc7%3A0xae933abf0b8461e0!2sThe%20Next%20Step%20Dance%20Studio!5e0!3m2!1sen!2sus!4v1655668759074!5m2!1sen!2sus"
          height="450"
          style={{ border: '0' }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
