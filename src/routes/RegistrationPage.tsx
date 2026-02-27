import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'

const RegistrationForm = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  birthday: z.date(),
  parentOrGuardian: z.string(),
  homeAddress: z.string(),
  homeCity: z.string(),
  homeState: z.string(),
  homeZip: z.string(),
  homePhone: z.string(),
  email: z.string().email(),
  acceptTerms: z.boolean(),
  parentOrGuardianSignature: z.string(),
  signatureDate: z.date(),
})

type TRegistrationForm = z.infer<typeof RegistrationForm>

const classes = [
  { id: 'tap', label: 'Tap' },
  { id: 'ballet', label: 'Ballet' },
  { id: 'jazz', label: 'Jazz' },
  { id: 'hiphop', label: 'Hip Hop' },
  { id: 'acro', label: 'Acro' },
  { id: 'lyrical', label: 'Lyrical' },
  { id: 'jr-combo', label: 'Jr. Combo' },
  { id: 'creative-movement', label: 'Creative Movement (3–4 yrs)' },
  { id: 'combo', label: 'Combo (5–6 yrs)' },
  { id: 'solo-request', label: 'Solo Request' },
  { id: 'duo-request', label: 'Duo Request' },
  { id: 'trio-request', label: 'Trio Request' },
]

function SectionHeading({ children }: { children: string }): ReactElement {
  return (
    <div className="flex items-center gap-3 mb-6 mt-10 first:mt-0">
      <div className="w-1 h-6 bg-studio-pink rounded-full" />
      <h2 className="font-serif text-xl text-studio-purple font-semibold">{children}</h2>
    </div>
  )
}

function RegistrationPage(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationForm>({
    resolver: zodResolver(RegistrationForm),
  })

  const onSubmit = (data: TRegistrationForm): void => {
    console.log(data, errors)
  }

  return (
    <>
      <Helmet>
        <title>Registration — Next Step Dance Studio</title>
        <meta
          name="description"
          content="Register your child for dance classes at Next Step Dance Studio in Birdsboro, PA."
        />
      </Helmet>

      {/* Page hero */}
      <section className="bg-studio-purple px-6 py-16 text-center">
        <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
          Join the Family
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
          Student Registration
        </h1>
        <p className="text-purple-300 max-w-xl mx-auto leading-relaxed">
          Complete the form below to enroll your child. Have questions before registering? Feel free
          to{' '}
          <a href="/contact" className="text-studio-pink hover:underline font-semibold">
            contact us
          </a>{' '}
          first.
        </p>
      </section>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">

            {/* Student info */}
            <SectionHeading>Student Information</SectionHeading>
            <div className="grid gap-6 mb-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="first_name" isRequired={true}>First Name</Label>
                <Input id="first_name" isRequired={true} placeholder="Amanda" register={register} />
              </div>
              <div>
                <Label htmlFor="last_name" isRequired={true}>Last Name</Label>
                <Input id="last_name" isRequired={true} placeholder="Doe" register={register} />
              </div>
              <div>
                <Label htmlFor="age" isRequired={true}>Age</Label>
                <Input
                  id="age"
                  isRequired={true}
                  placeholder="8"
                  type="text"
                  inputMode="numeric"
                  register={register}
                />
              </div>
              <div>
                <Label htmlFor="birthday" isRequired={true}>Birthday</Label>
                <Input
                  id="birthday"
                  isRequired={true}
                  placeholder="MM/DD/YYYY"
                  type="date"
                  register={register}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="parentOrGuardian" isRequired={true}>Parent or Guardian Name</Label>
                <Input
                  id="parentOrGuardian"
                  isRequired={true}
                  placeholder="First & Last Name"
                  type="text"
                  register={register}
                />
              </div>
            </div>

            {/* Address */}
            <SectionHeading>Home Address</SectionHeading>
            <div className="flex flex-col gap-6 mb-6">
              <div>
                <Label htmlFor="homeAddress" isRequired={true}>Street Address</Label>
                <Input
                  id="homeAddress"
                  isRequired={true}
                  placeholder="125 Main St"
                  register={register}
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                <div>
                  <Label htmlFor="homeCity" isRequired={true}>City</Label>
                  <Input id="homeCity" isRequired={true} placeholder="Birdsboro" register={register} />
                </div>
                <div>
                  <Label htmlFor="homeState" isRequired={true}>State</Label>
                  <Input id="homeState" isRequired={true} placeholder="PA" register={register} />
                </div>
                <div>
                  <Label htmlFor="homeZip" isRequired={true}>Zip</Label>
                  <Input
                    id="homeZip"
                    isRequired={true}
                    placeholder="19508"
                    inputMode="numeric"
                    register={register}
                  />
                </div>
              </div>
            </div>

            {/* Contact */}
            <SectionHeading>Contact Information</SectionHeading>
            <div className="grid gap-6 mb-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="homePhone" isRequired={true}>Phone</Label>
                <Input
                  id="homePhone"
                  isRequired={true}
                  placeholder="(610) 555-1212"
                  inputMode="tel"
                  register={register}
                />
              </div>
              <div>
                <Label htmlFor="email" isRequired={true}>Email</Label>
                <Input
                  id="email"
                  isRequired={true}
                  placeholder="amanda@example.com"
                  inputMode="email"
                  register={register}
                />
              </div>
            </div>

            {/* Classes */}
            <SectionHeading>Choose Classes</SectionHeading>
            <div className="flex flex-wrap gap-3 mb-6">
              {classes.map(({ id, label }) => (
                <Checkbox key={id} id={id} label={label} isRequired={false} register={register} />
              ))}
            </div>

            {/* Terms */}
            <SectionHeading>Terms of Service</SectionHeading>
            <div className="bg-gray-50 rounded-xl p-5 mb-4 text-sm text-gray-600 leading-relaxed border border-gray-200">
              <p>
                I, the parent listed in the Parent Information section above, do hereby agree to give
                my child(ren) or ward(s) permission to participate in the programs and classes offered
                by the Next Step Dance Studio, LLC. Each student may decline to participate in any
                activity. Please inform the director regarding any physical limitations your child
                might have.
              </p>
              <p className="mt-3">
                I hereby release and hold harmless The Next Step Dance Studio, its owner, teachers,
                assistant teachers, or any other representative from any and all claims for damages or
                personal injuries, including accidental death, which I or my child(ren) may sustain
                while participating in any activity directly or indirectly connected with The Next Step
                Dance Studio. The Next Step Dance Studio does not carry medical insurance for its
                students. All students must be covered by their own family medical insurance policy.
              </p>
              <p className="mt-3">
                I also hereby give permission for my child to be photographed or videotaped for use in
                any promotional materials or advertisements. <strong>Please fully read and understand
                the statement above before checking below.</strong>
              </p>
            </div>
            <div className="mb-6">
              <Checkbox
                id="terms"
                label="I have read and fully understand the statement above and voluntarily assume all risks related to attending classes as stated above"
                isRequired={true}
                register={register}
              />
            </div>

            {/* Signature */}
            <div className="grid gap-6 mb-8 sm:grid-cols-2">
              <div>
                <Label htmlFor="parentOrGuardianSignature" isRequired={true}>
                  Parent / Guardian Signature
                </Label>
                <Input
                  id="parentOrGuardianSignature"
                  isRequired={true}
                  placeholder="Full Name"
                  register={register}
                />
              </div>
              <div>
                <Label htmlFor="signatureDate" isRequired={true}>Date</Label>
                <Input
                  id="signatureDate"
                  isRequired={true}
                  placeholder="MM/DD/YYYY"
                  type="date"
                  register={register}
                />
              </div>
            </div>

            <Button type="submit" text="Submit Registration" />
          </form>
        </div>
      </div>
    </>
  )
}

export default RegistrationPage
