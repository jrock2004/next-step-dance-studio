import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'
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
})

type TContactForm = z.infer<typeof ContactForm>

function ContactPage(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TContactForm>({
    resolver: zodResolver(ContactForm),
  })

  const onSubmit = (data: any): void => {
    console.log(data, errors)
  }

  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Contact</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Contact</PageTitle>
        <div className="flex justify-center">
          <form className="w-full md:w-1/2 md:max-w-md" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <Label htmlFor="name" isRequired={true}>
                Name
              </Label>
              <Input id="name" type="text" register={register} isRequired={true} errors={errors} />
            </div>
            <div className="mb-6">
              <Label htmlFor="email" isRequired={true}>
                Email
              </Label>
              <Input id="email" type="text" inputMode="email" register={register} errors={errors} />
            </div>
            <div className="mb-6">
              <Label htmlFor="phone" isRequired={true}>
                Phone
              </Label>
              <Input id="phone" type="text" inputMode="tel" register={register} errors={errors} />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" isRequired={true}>
                Message
              </Label>
              <textarea
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                id="message"
                rows={10}
                {...register('message')}
              />
            </div>

            <div className="mb-6">
              <hr className="border-b border-gray-300" />
            </div>

            <div className="mb-12">
              <Checkbox
                id="newsletter"
                label="Check here to receive email updates"
                register={register}
              />
            </div>

            <Button type="submit" text="Send" />
          </form>
        </div>
      </PageContainer>
    </>
  )
}

export default ContactPage
