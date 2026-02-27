import type { ReactElement } from 'react'
import { Helmet } from 'react-helmet-async'
import allStaff from '/allStaff.jpeg'

type Instructor = {
  name: string
  title: string
  specialties: string[]
  photo?: string
  bio: string | string[]
}

// Photos appear in the same left-to-right order as bios on thenextstepdance.com/about.html
const instructors: Instructor[] = [
  {
    name: 'Melissa Shutt',
    title: 'Owner & Artistic Director',
    // TODO: replace with a better headshot from the client
    specialties: [
      'Hip Hop',
      'Jazz',
      'Lyrical',
      'Tap',
      'Ballet',
      'Acro',
      'Creative Movement',
      'Adult Classes',
      'Private Lessons',
    ],
    bio: [
      'Missy is the Owner and the Artistic Director of The Next Step Dance Studio. She opened the studio in 2005 and has been the driving force behind the great things the studio has accomplished over the past 19 years. Currently, Missy is instructing the studio\'s hip hop, jazz, and lyrical classes. She has over 30 years of experience dancing and teaching all ages and levels throughout Berks and many other surrounding counties.',
      'Her dance training began at a young age and grew into her becoming an award-winning dancer. Missy has studied dance on both the East and West coasts and under such notable choreographers such as Frank Hatchett, Savion Glover, NappyTabs, Mia Michaels, Tricia Miranda, Willdabeast, and Wade Robson, just to name a few. She continues her dance education by taking classes and attending conventions throughout the year. Missy has also worked extensively with cheerleading squads throughout the country, was a member of a professional dance team, and has choreographed numerous musicals in the area.',
      'Missy is proud to be able to share many dance opportunities with her students. They have been the opening act for the Charlie Daniels\'s Band, The Gin Blossoms and performed at many other community events. Some of these events include dancing throughout the year for The Philadelphia Flyers, Temple University Football, The Philadelphia 76ers, The Harlem Globetrotters and The Reading Royals. Additionally, her choreography has won at Regional and National levels. Among her many awards, the "The Truly Talented Hip Hop Award", "The Director\'s Double Take", "Best Musicality" and the ADCC Studio of Excellence are a few of her most memorable! She is very proud to be the Owner and the Artistic Director of the Next step Dance Studio and believes her passion for dance is what truly makes this studio a "step" above the rest!',
    ],
  },
  {
    name: 'Lacey Vaccaro',
    title: 'Dance Instructor',
    photo:
      'https://nebula.wsimg.com/2ad246f668e6dcb9f8af02653f55f1a1?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    specialties: ['Tap', 'Ballet'],
    bio: 'Miss Lacey teaches our Tap and Ballet classes. She has 30+ years of experience in dancing and teaching. She has studied Tap, Jazz, Ballet, Pointe, Musical Theater and Partnering. Lacey has done outstanding choreography for Genesius Theater and was the Assistant Choreographer of 42nd Street for a local performing arts company. Lacey is an award winning teacher and choreographer. Lacey was given the prestigious award of "Truly Talented Tap" two years in a row at a National level. Lacey continues to study dance by taking classes and attending conventions. Lacey is an extremely talented tap dancer, to say the least, and that is shown through her students.',
  },
  {
    name: 'Shennan Lorenzo',
    title: 'Dance Instructor',
    photo:
      'https://nebula.wsimg.com/a1fc5ff36c8057913a3ec53eb4b12c59?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    specialties: ['Creative Movement', 'Combo', 'Beginner Levels'],
    bio: [
      'Shennan Lorenzo is our Creative Movement, Combo, and beginner levels dance instructor. With an infectious energy and a passion for nurturing young talent, Shennan has become a beloved figure among budding dancers embarking on their first steps into the world of movement. As an expert in teaching younger students, Shennan understands the importance of creating a supportive and inclusive environment where everyone feels empowered to unleash their inner dancer. Her classes are about building confidence, fostering teamwork, and instilling a lifelong love of dance.',
      "Shennan's journey from a student of The Next Step to teacher has equipped her with a unique perspective and empathy for the struggles and triumphs of those following in her footsteps. Her classes are not just about imparting knowledge but also about fostering a sense of community and mentorship, where every student feels seen, heard, and valued. We are grateful for Shennan's commitment to nurturing the potential of every student who walks through her studio doors.",
    ],
  },
  {
    name: 'Erin Shertzer',
    title: 'Dance Instructor',
    photo:
      'https://nebula.wsimg.com/2cb8d9b354c9d63792705a1249aeba87?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    specialties: ['Creative Movement', 'Combo', 'Tap'],
    bio: "Miss Erin teaches Creative Movement, Combo and Tap. She started as a student at the Next Step when it's doors opened in 2005. Through out the years Miss Erin has studied Tap, Ballet, Jazz, Lyrical and Hip hop. As a dancer, Miss Erin has competed and won many times at dance competitions throughout Pennsylvania. Among her many awards, she was given the \"fantastic feet\" for her solo tap performance in which she also received the highest scoring solo award. Miss Erin has furthered her training by attending both the Monsters of Hip Hop and JUMP dance conventions. She is a graduate of Millersville University where she earned her degree in Elementary and Special Education. While at Millersville, Miss Erin was a dance team member and competed at NDA nationals in Daytona Florida. She is currently a 2nd grade teacher for the Twin Valley School District. We are excited to welcome Miss Erin back to The Next Step and proud to have her as part of our teaching staff.",
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
              className="bg-white rounded-2xl shadow-sm border border-purple-100 overflow-hidden"
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
                      className="w-full h-56 sm:h-full bg-white flex items-center justify-center"
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
                      instructor.bio.map((para, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">
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
