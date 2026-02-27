import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import allStaff from '/allStaff.jpeg'

type Instructor = {
  name: string
  title: string
  specialties: string[]
  bio: string | string[]
  comingSoon?: boolean
}

const instructors: Instructor[] = [
  {
    name: 'Melissa Shutt',
    title: 'Owner & Artistic Director',
    specialties: ['Hip Hop', 'Jazz', 'Lyrical', 'Tap', 'Ballet', 'Acro', 'Creative Movement', 'Adult Classes', 'Private Lessons'],
    bio: [
      'Missy is the Owner and Artistic Director of The Next Step Dance Studio. She opened the studio in 2005 and has been the driving force behind its many accomplishments over the past 17+ years. She currently instructs hip hop, jazz, and lyrical classes.',
      'Her dance training began at a young age, growing into an award-winning career. Missy has studied dance on both the East and West coasts under renowned choreographers including Frank Hatchett, Savion Glover, NappyTabs, Mia Michaels, Tricia Miranda, Willdabeast, and Wade Robson.',
      'Missy\'s students have performed as the opening act for the Charlie Daniels Band and The Gin Blossoms, and have danced throughout the year for the Philadelphia Flyers, Temple University Football, the Philadelphia 76ers, the Harlem Globetrotters, and The Reading Royals.',
      'Her choreography has won at Regional and National levels, earning awards including "The Truly Talented Hip Hop Award," "The Director\'s Double Take," "Best Musicality," and the ADCC Studio of Excellence.',
    ],
  },
  {
    name: 'Lacey Vaccaro',
    title: 'Dance Instructor',
    specialties: ['Tap', 'Ballet', 'Combo'],
    bio: 'Miss Lacey teaches Tap, Ballet, and Combo classes with 30+ years of experience. She has studied Tap, Jazz, Ballet, Pointe, Musical Theater, and Partnering. Lacey has done outstanding choreography for Genesius Theater and was Assistant Choreographer of 42nd Street for a local performing arts company. She has been awarded "Truly Talented Tap" two years in a row at the National level and continues to study dance through classes and conventions.',
  },
  {
    name: 'Erin Shertzer',
    title: 'Dance Instructor',
    specialties: ['Creative Movement', 'Combo', 'Tap'],
    bio: 'Miss Erin teaches Creative Movement, Combo, and Tap. She began as a student at Next Step when the studio opened in 2005. A graduate of Millersville University with a degree in Elementary and Special Education, she was a dance team member and competed at NDA Nationals in Daytona, Florida. She has won many competitions throughout Pennsylvania including the "Fantastic Feet" award and highest-scoring solo. Miss Erin currently teaches 2nd grade in the Twin Valley School District.',
  },
  {
    name: 'Shennan Lorenzo',
    title: 'Dance Instructor',
    specialties: [],
    bio: '',
    comingSoon: true,
  },
  {
    name: 'Jackie Ventresca',
    title: 'Dance Instructor',
    specialties: [],
    bio: '',
    comingSoon: true,
  },
]

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
        <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
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
              className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Left accent */}
                <div className="bg-studio-purple sm:w-2 h-2 sm:h-auto flex-shrink-0" />

                <div className="p-7 flex-grow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h2 className="font-serif text-2xl text-studio-purple font-semibold">
                        {instructor.name}
                      </h2>
                      <p className="text-studio-pink text-sm font-semibold uppercase tracking-wide mt-0.5">
                        {instructor.title}
                      </p>
                    </div>
                    {instructor.specialties.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {instructor.specialties.map((s) => (
                          <span
                            key={s}
                            className="text-xs bg-studio-pink-light text-studio-pink font-semibold px-2.5 py-1 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {instructor.comingSoon ? (
                    <p className="text-gray-400 italic text-sm">Bio coming soon.</p>
                  ) : Array.isArray(instructor.bio) ? (
                    <div className="flex flex-col gap-3">
                      {instructor.bio.map((para, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-sm leading-relaxed">{instructor.bio}</p>
                  )}
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
