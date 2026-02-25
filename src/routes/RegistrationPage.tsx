import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@components/Label'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Checkbox } from '@components/Checkbox'
import { PageContainer } from '@components/PageContainer'
import { PageTitle } from '@components/PageTitle'

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

function RegistrationPage(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationForm>({
    resolver: zodResolver(RegistrationForm),
  })

  const onSubmit = (data: any): void => {
    console.log(data, errors)
  }

  return (
    <>
      <Helmet>
        <title>The Next Step Dance Studio - Registration</title>
        <meta
          name="description"
          content="The Next Step Dance Studio, we offer classes in a variety of dance styles. Creative Movement, Combo Classes, Hip Hop, Tap, Ballet, Jazz, Lyrical. Serving the Berks County area of Birdsboro, Douglassville, Morgantown, and Reading."
        />
      </Helmet>
      <PageContainer>
        <PageTitle>Register</PageTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <Label htmlFor="first_name" isRequired={true}>
                First Name
              </Label>
              <Input id="first_name" isRequired={true} placeholder="Amanda" register={register} />
            </div>
            <div>
              <Label htmlFor="last_name" isRequired={true}>
                Last name
              </Label>
              <Input id="last_name" isRequired={true} placeholder="Doe" register={register} />
            </div>
            <div>
              <Label htmlFor="age" isRequired={true}>
                Age
              </Label>
              <Input
                id="age"
                isRequired={true}
                placeholder="18"
                type="text"
                inputMode="numeric"
                register={register}
              />
            </div>
            <div>
              <Label htmlFor="birthday" isRequired={true}>
                Birthday
              </Label>
              <Input
                id="birthday"
                isRequired={true}
                placeholder="MM/DD/YYYY"
                type="date"
                register={register}
              />
            </div>
            <div>
              <Label htmlFor="parentOrGuardian" isRequired={true}>
                Parent or Guardian
              </Label>
              <Input
                id="parentOrGuardian"
                isRequired={true}
                placeholder="First & Last Name"
                type="text"
                register={register}
              />
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="homeAddress" isRequired={true}>
              Street Address
            </Label>
            <Input
              id="homeAddress"
              isRequired={true}
              placeholder="Ex. 125 Main St"
              register={register}
            />
          </div>
          <div className="grid gap-6 mb-6 lg:grid-cols-3">
            <div>
              <Label htmlFor="homeCity" isRequired={true}>
                City
              </Label>
              <Input
                id="homeCity"
                isRequired={true}
                placeholder="Ex. Birdsboro"
                register={register}
              />
            </div>
            <div>
              <Label htmlFor="homeState" isRequired={true}>
                State
              </Label>
              <Input id="homeState" isRequired={true} placeholder="Ex. PA" register={register} />
            </div>
            <div>
              <Label htmlFor="homeZip" isRequired={true}>
                Zip
              </Label>
              <Input
                id="homeZip"
                isRequired={true}
                placeholder="Ex. 19508"
                inputMode="numeric"
                register={register}
              />
            </div>
          </div>
          <div className="mb-6">
            <Label htmlFor="homePhone" isRequired={true}>
              Phone
            </Label>
            <Input
              id="homePhone"
              isRequired={true}
              placeholder="Ex. 6105551212"
              inputMode="tel"
              register={register}
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="email" isRequired={true}>
              Email
            </Label>
            <Input
              id="email"
              isRequired={true}
              placeholder="Ex. amanda@test.com"
              inputMode="email"
              register={register}
            />
          </div>
          <div className="my-12">
            <h3 className="text-lg tracking-wider mb-2">Choose Classes</h3>

            <div className="flex flex-wrap gap-3">
              <Checkbox id="tap" label="Tap" isRequired={false} register={register} />
              <Checkbox id="ballet" label="Ballet" isRequired={false} register={register} />
              <Checkbox id="jazz" label="Jazz" isRequired={false} register={register} />
              <Checkbox id="hiphop" label="Hip Hop" isRequired={false} register={register} />
              <Checkbox id="acro" label="Acro" isRequired={false} register={register} />
              <Checkbox id="lyrical" label="Lyrical" isRequired={false} register={register} />
              <Checkbox id="jr-combo" label="Jr. Combo" isRequired={false} register={register} />
              <Checkbox
                id="create-movement"
                label="Creative Movement (3-4 yrs. old)"
                isRequired={false}
                register={register}
              />
              <Checkbox
                id="combo"
                label="Combo (5-6 yr. old)"
                isRequired={false}
                register={register}
              />
              <Checkbox
                id="solo-request"
                label="Solo Request"
                isRequired={false}
                register={register}
              />
              <Checkbox
                id="duo-request"
                label="Duo Request"
                isRequired={false}
                register={register}
              />
              <Checkbox
                id="trio-request"
                label="Trio Request"
                isRequired={false}
                register={register}
              />
            </div>
          </div>
          <div className="my-12">
            <h3 className="text-lg tracking-wider mb-2">Terms of Service</h3>
            <p className="text-sm text-gray-600 mb-5">
              I, the parent listed in &quot;Full Name&quot; of the Parent Information section above,
              do hereby agree to give my child(ren) or ward(s) permission to participate in the
              programs and classes offered by the Next Step Dance Studio, LLC. Each student may
              decline to participate in any activity. Please inform the director of The Next Step
              Dance Studio regarding any physical limitations your child might have. I hereby
              release and hold harmless The Next Step Dance Studio, its owner, teachers, assistant
              teachers, or any other representative of The Next Step Dance Studio from any and all
              claims for damages or personal injuries, including accidental death, COVID-19, which I
              or my child(ren) may sustain while participating in any activity directory or
              indirectly connected with The Next Step Dance Studio. If a parent or guardian cannot
              be reached in an emergency, I hereby consent to the treatment of my minor child/ward
              for any medical procedures deemed necessary as a result of an accident or injury. I
              agree to pay any and all costs incurred as a result of said treatment. The Next Step
              Dance Studio does not carry medical insurance for its students. It is required that
              all dance students be covered by their own family medical insurance policy. If any
              injury occurs, it is understood that the students&apos; own policy is the only source
              of reimbursement. I also hereby give permission for my child to be photographed or
              videotaped to be used for any promotional materials or advertisements. PLEASE FULLY
              READ AND UNDERSTAND THE STATEMENT ABOVE BEFORE CHECKING BELOW
            </p>
            <Checkbox
              id="terms"
              label="I have read and fully understand the statement above and voluntarily assume all risks related to and associated with attending classes as stated above"
              isRequired={true}
              register={register}
            />
            <div className="my-6">
              <Label htmlFor="parentOrGuardianSignature" isRequired={true}>
                Parent / Guardian Signature
              </Label>
              <Input
                id="parentOrGuardianSignature"
                isRequired={true}
                placeholder="Ex. Amanda Doe"
                register={register}
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="signatureDate" isRequired={true}>
                Date
              </Label>
              <Input
                id="signatureDate"
                isRequired={true}
                placeholder="Ex. MM/DD/YYYY"
                type="date"
                register={register}
              />
            </div>
          </div>
          <Button type="submit" text="Submit" />
        </form>
      </PageContainer>
    </>
  )
}

export default RegistrationPage
