import type { ReactElement } from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

type ClassCard = {
  title: string
  ages: string
  price: string
  image?: string
  description: string
  note?: string
}

const classes: ClassCard[] = [
  {
    title: 'Creative Movement',
    ages: 'Ages 3–4',
    price: 'Call for pricing',
    image:
      'https://nebula.wsimg.com/a1393eca7721170dd144b399128551e1?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'A special class for a special age. Dance activities emphasize the fun and excitement of discovering the world through movement. Children will enjoy learning the basic skills of ballet, tap, jazz, and tumbling with the use of music and props to develop basic motor and locomotor skills.',
  },
  {
    title: 'Combo Class',
    ages: 'Ages 5–6',
    price: 'Call for pricing',
    description:
      'Basic dance skills and vocabulary are introduced at an age-appropriate level with an emphasis on self-expression and creativity. This class combining ballet, tap, jazz, and tumbling will help prepare students for future participation in any type of structured dance class.',
  },
  {
    title: 'Tap',
    ages: 'All Ages & Levels',
    price: 'Call for pricing',
    image:
      'https://nebula.wsimg.com/d3cddc424f310dc233740115a3b5a60f?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Our tap program offers skill development from beginner through advanced levels. Classes emphasize the development and strengthening of technique and terminology, while highlighting the importance of rhythm and sound.',
  },
  {
    title: 'Jazz',
    ages: 'All Ages & Levels',
    price: 'Call for pricing',
    image:
      'https://nebula.wsimg.com/59bb6bc9e6c761e32bf3dce386ed394d?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Classes teach basic jazz dance technique, terminology, and movement quality with an emphasis on proper execution of jazz isolations, rhythms, and style performed to contemporary music. Jazz dance promotes flexibility, timing, and musical awareness. We recommend jazz be taken in conjunction with ballet.',
  },
  {
    title: 'Ballet',
    ages: 'All Ages & Levels',
    price: 'Call for pricing',
    image:
      'https://nebula.wsimg.com/46b5df54a3964821600367f607fe0be5?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Emphasizes the development of classical ballet skills with a focus on proper placement and alignment. Students will learn ballet vocabulary through barre and center work while building strength and flexibility. Ballet is the foundation of all structured forms of dance.',
  },
  {
    title: 'Hip Hop',
    ages: 'All Ages & Levels',
    price: '$55',
    image:
      'https://nebula.wsimg.com/025e9f6e19f84ce9e7e7ea2fecddc84a?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'A high-energy class that uses the latest sounds in rap, R&B, and pop music together with today\'s hottest movements presented in an age-appropriate manner. This fun class gives students the opportunity to develop their own sense of style.',
  },
  {
    title: 'Lyrical',
    ages: 'All Ages & Levels',
    price: 'Call for pricing',
    description:
      'This class focuses on teaching dancers about creative expression. Lyrical dance is the fusion of ballet and jazz technique bound by the dancer\'s inner emotion, interpreting music and words to show the audience the emotion of a piece.',
    note: 'Instructor approval required. Ballet must be taken in conjunction with this class.',
  },
  {
    title: 'Acrobatics',
    ages: 'Ages 5–11 (grouped)',
    price: 'Call for pricing',
    image:
      'https://nebula.wsimg.com/66af31581edc26aad9501e2c33bfe6f0?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Centered on fundamental acrobatic technique to increase flexibility, strength, balance, coordination, endurance, timing, body awareness, self-discipline, and confidence. Moves range from forward rolls and cartwheels at level 1 through aerials and back handsprings at advanced levels.',
  },
]

function ClassesPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Dance Classes — Next Step Dance Studio</title>
        <meta
          name="description"
          content="Explore our full range of dance classes at Next Step Dance Studio — creative movement, tap, jazz, ballet, hip hop, lyrical, acro, and more. Serving Birdsboro, PA."
        />
      </Helmet>

      {/* Page hero */}
      <section className="bg-studio-purple px-6 py-16 text-center">
        <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
          What We Offer
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
          Our Dance Classes
        </h1>
        <p className="text-purple-300 max-w-xl mx-auto leading-relaxed">
          From first steps to seasoned performers — we have a class for every age and skill level.
          All classes are taught by our experienced, passionate instructors.
        </p>
      </section>

      {/* Classes grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {classes.map((cls) => (
            <div
              key={cls.title}
              className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {cls.image && (
                <div className="sm:w-48 flex-shrink-0 h-48 sm:h-auto overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className={`p-6 flex flex-col justify-between flex-grow ${!cls.image ? 'border-l-4 border-studio-pink' : ''}`}>
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-serif text-xl text-studio-purple font-semibold">
                      {cls.title}
                    </h2>
                    <span className="flex-shrink-0 text-xs bg-studio-purple-light text-studio-purple-mid font-semibold px-2.5 py-1 rounded-full">
                      {cls.ages}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{cls.description}</p>
                  {cls.note && (
                    <p className="text-xs text-studio-pink font-semibold italic">{cls.note}</p>
                  )}
                </div>
                <div className="mt-4 pt-3 border-t border-purple-50 flex items-center justify-between">
                  <span className="text-sm font-semibold text-studio-purple">{cls.price}</span>
                  <Link
                    to="/registration"
                    className="text-xs text-studio-pink font-semibold hover:underline"
                  >
                    Register →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-studio-purple-light py-14 px-6 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl text-studio-purple font-semibold mb-3">
          Not sure which class is right?
        </h2>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          We'd love to help you find the perfect fit. Reach out and we'll guide you to the right
          class for your child's age and experience level.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="bg-studio-pink text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
          >
            Contact Us
          </Link>
          <Link
            to="/registration"
            className="border border-studio-purple text-studio-purple px-7 py-3 rounded-full font-semibold hover:bg-studio-purple hover:text-white transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  )
}

export default ClassesPage
