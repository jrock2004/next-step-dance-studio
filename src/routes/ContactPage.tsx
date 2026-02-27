import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'

const ContactForm = z.object({
  name: z.string().min(1, "Name can't be empty"),
  email: z.string().email(),
  phone: z
    .string()
    .regex(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Invalid phone number'
    ),
  message: z.string().min(1, "Message can't be empty"),
  newsletter: z.boolean().optional(),
})

type TContactForm = z.infer<typeof ContactForm>

function ContactPage(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactForm),
  })

  const onSubmit = (data: TContactForm): void => {
    console.log(data)
    reset()
  }

  return (
    <>
      <Helmet>
        <title>Contact & Location — Next Step Dance Studio</title>
        <meta
          name="description"
          content="Contact Next Step Dance Studio in Birdsboro, PA. Get directions, find our phone number and email, or send us a message."
        />
      </Helmet>

      {/* Page hero */}
      <section className="bg-studio-purple px-6 py-16 text-center">
        <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
          We'd Love to Hear from You
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
          Contact & Location
        </h1>
        <p className="text-purple-300 max-w-xl mx-auto leading-relaxed">
          Questions about classes, registration, or the studio? Reach out — we're happy to help.
        </p>
      </section>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Contact form */}
          <div>
            <h2 className="font-serif text-2xl text-studio-purple font-semibold mb-6">
              Send Us a Message
            </h2>

            {isSubmitSuccessful && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-sm font-semibold">
                Message sent! We'll get back to you soon.
              </div>
            )}

            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="name" isRequired={true}>Name</Label>
                <Input id="name" type="text" register={register} isRequired={true} errors={errors} />
              </div>
              <div>
                <Label htmlFor="email" isRequired={true}>Email</Label>
                <Input id="email" type="text" inputMode="email" register={register} errors={errors} />
              </div>
              <div>
                <Label htmlFor="phone" isRequired={true}>Phone</Label>
                <Input id="phone" type="text" inputMode="tel" register={register} errors={errors} />
              </div>
              <div>
                <Label htmlFor="message" isRequired={true}>Message</Label>
                <textarea
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-studio-purple focus:border-studio-purple outline-none transition-colors"
                  id="message"
                  rows={5}
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>
              <div>
                <Checkbox
                  id="newsletter"
                  label="Sign me up for email updates"
                  register={register}
                />
              </div>
              <div>
                <Button type="submit" text="Send Message" />
              </div>
            </form>
          </div>

          {/* Location & info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-2xl text-studio-purple font-semibold mb-5">
                Find Us
              </h2>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100 mb-6">
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.512559337357!2d-75.80102568373077!3d40.26436297938317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c67b660e428bc7%3A0xae933abf0b8461e0!2sThe%20Next%20Step%20Dance%20Studio!5e0!3m2!1sen!2sus!4v1655668759074!5m2!1sen!2sus"
                  height="280"
                  style={{ border: '0', display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Next Step Dance Studio location map"
                />
              </div>

              {/* Contact details */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    label: 'Address',
                    content: 'Birdsboro, PA',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    label: 'Phone',
                    content: (
                      <a href="tel:6105822111" className="hover:text-studio-pink transition-colors">
                        (610) 582-2111
                      </a>
                    ),
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: 'Email',
                    content: (
                      <a
                        href="mailto:missy@thenextstepdance.com"
                        className="hover:text-studio-pink transition-colors break-all"
                      >
                        missy@thenextstepdance.com
                      </a>
                    ),
                  },
                ].map(({ icon, label, content }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 bg-studio-purple-light rounded-xl p-4"
                  >
                    <div className="text-studio-pink mt-0.5 flex-shrink-0">{icon}</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-studio-purple-mid mb-1">
                        {label}
                      </p>
                      <p className="text-sm text-gray-700">{content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Directions */}
            <div>
              <h3 className="font-serif text-xl text-studio-purple font-semibold mb-4">
                Directions
              </h3>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-purple-100 p-5">
                  <h4 className="font-semibold text-studio-purple text-sm mb-2">
                    From Reading & Points West
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Head eastbound on Route 422. Turn right onto South Center Road (Route 345 South)
                    and go approximately 1 mile. Turn left onto West Main Street (Route 724 E &amp;
                    345 S). Approximately 1/2 mile down, turn right onto Chestnut Street — the studio
                    is on the right.
                  </p>
                </div>
                <div className="rounded-xl border border-purple-100 p-5">
                  <h4 className="font-semibold text-studio-purple text-sm mb-2">
                    From Pottstown &amp; Points East
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Head westbound on Route 422 (becomes Ben Franklin Highway). Turn right onto South
                    Center Road (Route 345 South) and go approximately 1 mile. Turn left onto West
                    Main Street (Route 724 E &amp; 345 S). Approximately 1/2 mile down, turn right
                    onto Chestnut Street — the studio is on the right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
