import type { ReactElement } from "react";
import { Helmet } from "react-helmet-async";
import allStaff from "../assets/allStaff.jpeg";
import instructors from "@data/staff";

function StaffPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Our Staff — Next Step Dance Studio</title>
        <meta
          name="description"
          content="Meet the talented instructors at Next Step Dance Studio. Our professional staff brings decades of experience in ballet, tap, jazz, hip hop, and more."
        />
      </Helmet>

      {/* Page hero */}
      <section className="bg-studio-purple px-6 py-16 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-pink-300 uppercase">
          The Heart of Next Step
        </p>
        <h1 className="mb-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
          Meet Our Staff
        </h1>
        <p className="mx-auto max-w-xl leading-relaxed text-purple-300">
          Our professional team is the reason the studio's goal of providing a positive experience
          for all ages, levels, and styles always exceeds expectations.
        </p>
      </section>

      {/* Team photo */}
      <section className="bg-studio-purple-light px-6 pt-14 pb-4">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-xl">
          <img
            src={allStaff}
            alt="Next Step Dance Studio staff"
            className="h-64 w-full object-cover object-top sm:h-80"
          />
        </div>
      </section>

      {/* Staff bios */}
      <section className="bg-studio-purple-light px-6 py-14">
        <div className="mx-auto flex max-w-4xl flex-col gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="bg-studio-lavender overflow-hidden rounded-2xl border border-purple-100 shadow-sm"
            >
              {/* Photo + header row */}
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 sm:w-48">
                  {instructor.photo ? (
                    <img
                      src={instructor.photo}
                      alt={`Photo of ${instructor.name}`}
                      className="h-56 w-full object-cover object-top sm:h-full"
                    />
                  ) : (
                    <div
                      className="bg-studio-lavender flex h-56 w-full items-center justify-center sm:h-full"
                      aria-hidden="true"
                    >
                      <svg
                        className="text-studio-purple h-20 w-20 opacity-20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex flex-grow flex-col">
                  {/* Name + title + badges */}
                  <div className="bg-studio-purple px-6 py-5">
                    <h2 className="font-serif text-2xl font-semibold text-white">
                      {instructor.name}
                    </h2>
                    <p className="mt-0.5 text-sm font-semibold tracking-wide text-pink-300 uppercase">
                      {instructor.title}
                    </p>
                    {instructor.specialties.length > 0 && (
                      <ul
                        role="list"
                        aria-label={`Classes taught by ${instructor.name}`}
                        className="mt-3 flex flex-wrap gap-1.5"
                      >
                        {instructor.specialties.map((s) => (
                          <li
                            key={s}
                            className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-purple-200"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bio */}
                  <div className="flex flex-col gap-3 px-6 py-5">
                    {instructor.bio.split("\n\n").map((para) => (
                      <p key={para} className="text-sm leading-relaxed text-gray-600">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default StaffPage;
