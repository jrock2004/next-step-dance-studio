import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import allStaff from '../assets/allStaff.jpeg'
import instructors from '@data/staff'

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
        <p className="text-pink-300 text-sm font-semibold uppercase tracking-widest mb-3">
          The Heart of Next Step
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
          Meet Our Staff
        </h1>
        <p className="text-purple-300 max-w-xl mx-auto leading-relaxed">
          Our professional team is the reason the studio's goal of providing a positive experience
          for all ages, levels, and styles always exceeds expectations.
        </p>
      </section>

      {/* Team photo */}
      <section className="bg-studio-purple-light pt-14 pb-4 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <img
            src={allStaff}
            alt="Next Step Dance Studio staff"
            className="w-full h-64 sm:h-80 object-cover object-top"
          />
        </div>
      </section>

      {/* Staff bios */}
      <section className="bg-studio-purple-light py-14 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="bg-studio-lavender rounded-2xl shadow-sm border border-purple-100 overflow-hidden"
            >
              {/* Photo + header row */}
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 flex-shrink-0">
                  {instructor.photo ? (
                    <img
                      src={instructor.photo}
                      alt={`Photo of ${instructor.name}`}
                      className="w-full h-56 sm:h-full object-cover object-top"
                    />
                  ) : (
                    <div
                      className="w-full h-56 sm:h-full bg-studio-lavender flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg className="w-20 h-20 text-studio-purple opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-grow">
                  {/* Name + title + badges */}
                  <div className="bg-studio-purple px-6 py-5">
                    <h2 className="font-serif text-2xl text-white font-semibold">
                      {instructor.name}
                    </h2>
                    <p className="text-pink-300 text-sm font-semibold uppercase tracking-wide mt-0.5">
                      {instructor.title}
                    </p>
                    {instructor.specialties.length > 0 && (
                      <ul
                        role="list"
                        aria-label={`Classes taught by ${instructor.name}`}
                        className="flex flex-wrap gap-1.5 mt-3"
                      >
                        {instructor.specialties.map((s) => (
                          <li
                            key={s}
                            className="text-xs bg-white/10 text-purple-200 font-semibold px-2.5 py-1 rounded-full"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bio */}
                  <div className="px-6 py-5 flex flex-col gap-3">
                    {Array.isArray(instructor.bio) ? (
                      instructor.bio.map((para) => (
                        <p key={para} className="text-gray-600 text-sm leading-relaxed">
                          {para}
                        </p>
                      ))
                    ) : (
                      <p className="text-gray-600 text-sm leading-relaxed">{instructor.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default StaffPage
