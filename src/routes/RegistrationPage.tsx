import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SectionHeading } from '@components/SectionHeading'
import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'
import { classes as studioClasses } from '@/data/classes'

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
  'creative-movement': z.boolean().optional(),
  combo: z.boolean().optional(),
  tap: z.boolean().optional(),
  jazz: z.boolean().optional(),
  ballet: z.boolean().optional(),
  'hip-hop': z.boolean().optional(),
  lyrical: z.boolean().optional(),
  acrobatics: z.boolean().optional(),
  acceptTerms: z.boolean(),
  parentOrGuardianSignature: z.string(),
  signatureDate: z.date(),
})

type TRegistrationForm = z.infer<typeof RegistrationForm>

const classCheckboxes = studioClasses.map((c) => ({
  id: c.id,
  title: c.title,
  ages: c.ages,
}))

function RegistrationPage(): ReactElement {
  const [searchParams] = useSearchParams()
  const preselectedClass = searchParams.get('class')
  const validClassId = studioClasses.some((c) => c.id === preselectedClass) ? preselectedClass : null

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationForm>({
    resolver: zodResolver(RegistrationForm),
    defaultValues: validClassId ? ({ [validClassId]: true } as Partial<TRegistrationForm>) : undefined,
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
            <SectionHeading size="sm">Student Information</SectionHeading>
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
            <SectionHeading size="sm">Home Address</SectionHeading>
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
            <SectionHeading size="sm">Contact Information</SectionHeading>
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
            <SectionHeading size="sm">Choose Classes</SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
              {classCheckboxes.map(({ id, title, ages }) => (
                <label
                  key={id}
                  htmlFor={id}
                  className="group flex flex-col justify-between gap-3 p-4 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-studio-purple/40 transition-colors has-[:checked]:border-studio-pink has-[:checked]:bg-studio-pink-light"
                >
                  <input
                    id={id}
                    type="checkbox"
                    className="sr-only"
                    {...register(id as keyof TRegistrationForm)}
                  />
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif text-studio-purple font-semibold text-sm leading-snug">
                      {title}
                    </span>
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-studio-pink opacity-0 group-has-[:checked]:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-xs bg-studio-purple-light text-studio-purple-mid font-semibold px-2 py-0.5 rounded-full self-start">
                    {ages}
                  </span>
                </label>
              ))}
            </div>

            {/* Terms */}
            <SectionHeading size="sm">Terms of Service</SectionHeading>
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
