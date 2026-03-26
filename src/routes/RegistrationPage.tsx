import { useState, type ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionHeading } from "@components/SectionHeading";
import { Label } from "@components/Label";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { buildRegistrationFormSchema } from "@shared/registration.schema";
import { classes as studioClasses } from "@/data/classes";

const registrationFormSchema = buildRegistrationFormSchema(
  studioClasses.map((c) => c.id),
);

type TRegistrationForm = z.infer<typeof registrationFormSchema>;

const classCheckboxes = studioClasses.map((c) => ({
  id: c.id,
  title: c.title,
  ages: c.ages,
}));

type FormStatus = "idle" | "submitting" | "success" | "error";

function RegistrationPage(): ReactElement {
  const [searchParams] = useSearchParams();
  const preselectedClass = searchParams.get("class");
  const validClassId = studioClasses.some((c) => c.id === preselectedClass)
    ? preselectedClass
    : null;
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegistrationForm>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: validClassId
      ? ({ [validClassId]: true } as Partial<TRegistrationForm>)
      : undefined,
  });

  const birthdayValue = watch("birthday");
  const computedAge = (() => {
    if (!birthdayValue) return null;
    const bday = new Date(birthdayValue as unknown as string);
    if (isNaN(bday.getTime())) return null;
    const today = new Date();
    let age = today.getFullYear() - bday.getFullYear();
    const m = today.getMonth() - bday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < bday.getDate())) age--;
    return age >= 0 ? age : null;
  })();

  const onSubmit = async (data: TRegistrationForm): Promise<void> => {
    setFormStatus("submitting");

    const selectedClasses = classCheckboxes
      .filter(({ id }) => data[id as keyof TRegistrationForm])
      .map(({ title }) => title)
      .join(", ");

    const classIds = new Set(classCheckboxes.map(({ id }) => id));
    const baseData = Object.fromEntries(
      Object.entries(data).filter(([key]) => !classIds.has(key)),
    ) as Record<string, unknown>;

    const birthday = baseData.birthday instanceof Date ? baseData.birthday : new Date(String(baseData.birthday));
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }

    try {
      const body = new URLSearchParams({
        "form-name": "registration",
        firstName: String(baseData.firstName ?? ""),
        lastName: String(baseData.lastName ?? ""),
        age: String(age),
        birthday: String(baseData.birthday ?? ""),
        parentOrGuardian: String(baseData.parentOrGuardian ?? ""),
        homeAddress: String(baseData.homeAddress ?? ""),
        homeCity: String(baseData.homeCity ?? ""),
        homeState: String(baseData.homeState ?? ""),
        homeZip: String(baseData.homeZip ?? ""),
        homePhone: String(baseData.homePhone ?? ""),
        email: String(baseData.email ?? ""),
        classes: selectedClasses || "None selected",
        acceptTerms: baseData.acceptTerms ? "yes" : "no",
        parentOrGuardianSignature: String(baseData.parentOrGuardianSignature ?? ""),
        signatureDate: String(baseData.signatureDate ?? ""),
      });
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

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
        <p className="text-pink-300 mb-3 text-sm font-semibold tracking-widest uppercase">
          Join the Family
        </p>
        <h1 className="mb-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
          Student Registration
        </h1>
        <p className="mx-auto max-w-xl leading-relaxed text-purple-300">
          Complete the form below to enroll your child. Have questions before registering? Feel free
          to{" "}
          <a href="/contact" className="text-pink-300 font-semibold hover:underline">
            contact us
          </a>{" "}
          first.
        </p>
      </section>

      <div className="bg-studio-lavender px-6 py-16">
        <div className="mx-auto max-w-3xl">
          {formStatus === "success" ? (
            <div className="py-12 text-center">
              <div className="bg-studio-pink-light mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full">
                <svg
                  className="text-studio-pink h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h2 className="text-studio-purple mb-3 font-serif text-3xl font-semibold">
                Registration Received!
              </h2>
              <p className="mx-auto max-w-md text-gray-600">
                Thank you! We've received your registration and will be in touch soon. If you have
                any questions, feel free to{" "}
                <a href="/contact" className="text-studio-pink font-semibold hover:underline">
                  contact us
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              {/* Student info */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading size="sm">Student Information</SectionHeading>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName" isRequired={true}>
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      isRequired={true}
                      placeholder="Amanda"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" isRequired={true}>
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      isRequired={true}
                      placeholder="Doe"
                      register={register}
                      errors={errors}
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
                      errors={errors}
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <input
                      id="age"
                      type="text"
                      readOnly
                      value={computedAge !== null ? String(computedAge) : ""}
                      placeholder="Auto-calculated"
                      className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 cursor-default"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="parentOrGuardian" isRequired={true}>
                      Parent or Guardian Name
                    </Label>
                    <Input
                      id="parentOrGuardian"
                      isRequired={true}
                      placeholder="First & Last Name"
                      type="text"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading size="sm">Home Address</SectionHeading>
                <div className="flex flex-col gap-4">
                  <div>
                    <Label htmlFor="homeAddress" isRequired={true}>
                      Street Address
                    </Label>
                    <Input
                      id="homeAddress"
                      isRequired={true}
                      placeholder="125 Main St"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <Label htmlFor="homeCity" isRequired={true}>
                        City
                      </Label>
                      <Input
                        id="homeCity"
                        isRequired={true}
                        placeholder="Birdsboro"
                        register={register}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <Label htmlFor="homeState" isRequired={true}>
                        State
                      </Label>
                      <Input
                        id="homeState"
                        isRequired={true}
                        placeholder="PA"
                        register={register}
                        errors={errors}
                      />
                    </div>
                    <div>
                      <Label htmlFor="homeZip" isRequired={true}>
                        Zip
                      </Label>
                      <Input
                        id="homeZip"
                        isRequired={true}
                        placeholder="19508"
                        inputMode="numeric"
                        register={register}
                        errors={errors}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading size="sm">Contact Information</SectionHeading>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="homePhone" isRequired={true}>
                      Phone
                    </Label>
                    <Input
                      id="homePhone"
                      isRequired={true}
                      placeholder="(610) 555-1212"
                      phone
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" isRequired={true}>
                      Email
                    </Label>
                    <Input
                      id="email"
                      isRequired={true}
                      placeholder="amanda@example.com"
                      inputMode="email"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>

              {/* Classes */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading size="sm">Choose Classes</SectionHeading>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {classCheckboxes.map(({ id, title, ages }) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className="group hover:border-studio-purple/40 has-[:checked]:border-studio-pink has-[:checked]:bg-studio-pink-light flex cursor-pointer flex-col justify-between gap-3 rounded-xl border-2 border-gray-200 p-4 transition-colors"
                    >
                      <input
                        id={id}
                        type="checkbox"
                        className="sr-only"
                        {...register(id as keyof TRegistrationForm)}
                      />
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-studio-purple font-serif text-sm leading-snug font-semibold">
                          {title}
                        </span>
                        <svg
                          className="text-studio-pink h-4 w-4 flex-shrink-0 opacity-0 transition-opacity group-has-[:checked]:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <span className="bg-studio-purple-light text-studio-purple-mid self-start rounded-full px-2 py-0.5 text-xs font-semibold">
                        {ages}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Terms & Signature */}
              <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading size="sm">Terms of Service</SectionHeading>
                <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm leading-relaxed text-gray-600">
                  <p>
                    I, the parent listed in the Parent Information section above, do hereby agree to
                    give my child(ren) or ward(s) permission to participate in the programs and
                    classes offered by the Next Step Dance Studio, LLC. Each student may decline to
                    participate in any activity. Please inform the director regarding any physical
                    limitations your child might have.
                  </p>
                  <p className="mt-3">
                    I hereby release and hold harmless The Next Step Dance Studio, its owner,
                    teachers, assistant teachers, or any other representative from any and all claims
                    for damages or personal injuries, including accidental death, which I or my
                    child(ren) may sustain while participating in any activity directly or indirectly
                    connected with The Next Step Dance Studio. The Next Step Dance Studio does not
                    carry medical insurance for its students. All students must be covered by their
                    own family medical insurance policy.
                  </p>
                  <p className="mt-3">
                    I also hereby give permission for my child to be photographed or videotaped for
                    use in any promotional materials or advertisements.{" "}
                    <strong>
                      Please fully read and understand the statement above before checking below.
                    </strong>
                  </p>
                </div>
                <div className="mb-6">
                  <Checkbox
                    id="acceptTerms"
                    label="I have read and fully understand the statement above and voluntarily assume all risks related to attending classes as stated above"
                    isRequired={true}
                    register={register}
                    errors={errors}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="parentOrGuardianSignature" isRequired={true}>
                      Parent / Guardian Signature
                    </Label>
                    <Input
                      id="parentOrGuardianSignature"
                      isRequired={true}
                      placeholder="Full Name"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <div>
                    <Label htmlFor="signatureDate" isRequired={true}>
                      Date
                    </Label>
                    <Input
                      id="signatureDate"
                      isRequired={true}
                      placeholder="MM/DD/YYYY"
                      type="date"
                      register={register}
                      errors={errors}
                    />
                  </div>
                </div>
              </div>

              {formStatus === "error" && (
                <p className="text-center text-sm text-red-600">
                  Something went wrong. Please try again or{" "}
                  <a href="/contact" className="font-semibold underline">
                    contact us
                  </a>{" "}
                  directly.
                </p>
              )}

              <Button
                type="submit"
                text={formStatus === "submitting" ? "Submitting…" : "Submit Registration"}
                isDisabled={formStatus === "submitting"}
              />
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
