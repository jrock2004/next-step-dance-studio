import type { ReactElement } from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

const classes = [
  {
    title: 'Creative Movement',
    ages: 'Ages 3–4',
    image:
      'https://nebula.wsimg.com/a1393eca7721170dd144b399128551e1?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Discovering the world through movement using music and props to develop motor skills in ballet, tap, jazz, and tumbling.',
  },
  {
    title: 'Combo Class',
    ages: 'Ages 5–6',
    image:
      'https://nebula.wsimg.com/46b5df54a3964821600367f607fe0be5?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Ballet, tap, jazz, and tumbling combined to build a strong foundation for future dance classes.',
  },
  {
    title: 'Tap',
    ages: 'All Ages',
    image:
      'https://nebula.wsimg.com/d3cddc424f310dc233740115a3b5a60f?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'From beginner through advanced, emphasizing rhythm, sound, and technical precision.',
  },
  {
    title: 'Jazz',
    ages: 'All Ages',
    image:
      'https://nebula.wsimg.com/59bb6bc9e6c761e32bf3dce386ed394d?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Jazz isolations, rhythm, and style to contemporary music — promoting flexibility and musical awareness.',
  },
  {
    title: 'Ballet',
    ages: 'All Ages',
    image:
      'https://nebula.wsimg.com/46b5df54a3964821600367f607fe0be5?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'Classical technique with barre and center work, building strength, grace, and the foundation of all dance styles.',
  },
  {
    title: 'Hip Hop',
    ages: 'All Ages',
    image:
      'https://nebula.wsimg.com/025e9f6e19f84ce9e7e7ea2fecddc84a?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1',
    description:
      'High-energy movement to the latest sounds in rap, R&B, and pop — presented in an age-appropriate way.',
  },
]

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
    title: 'Expert Instructors',
    body: 'Our professional staff brings decades of performance and teaching experience across all dance styles.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: 'Confidence & Community',
    body: 'Dance builds self-confidence, friendships, and a sense of belonging that extends beyond the studio.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    title: '17+ Seasons of Excellence',
    body: 'Award-winning choreography and a proven track record of developing talented, well-rounded dancers.',
  },
]

function HomePage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Next Step Dance Studio — Birdsboro, PA</title>
        <meta
          name="description"
          content="Next Step Dance Studio offers quality dance instruction for children of all ages in Birdsboro, PA. Classes in ballet, tap, jazz, hip hop, lyrical, acro, and more."
        />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[520px] md:h-[620px] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="https://nebula.wsimg.com/94dd88ad6b74d735b23b8e19faeb666b?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
          alt="Next Step Dance Studio dancers"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-purple/90 via-studio-purple/70 to-studio-purple/30" />
        <div className="relative h-full flex flex-col justify-center px-8 sm:px-16 max-w-3xl">
          <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
            Birdsboro, PA · Celebrating 17+ Seasons
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-5">
            Dare to Dance.<br />
            <em className="not-italic text-studio-pink">Dare to Take</em> the Next Step.
          </h1>
          <p className="text-purple-200 text-lg mb-8 max-w-xl leading-relaxed">
            Quality dance instruction for children of all ages in a supportive, nurturing studio
            environment.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/classes"
              className="bg-studio-pink text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg"
            >
              Explore Classes
            </Link>
            <Link
              to="/registration"
              className="bg-white/10 border border-white/40 backdrop-blur text-white px-7 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-studio-purple-light py-14 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-3">
              <div className="text-studio-pink">{f.icon}</div>
              <h3 className="font-serif text-xl text-studio-purple font-semibold">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Class preview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-purple font-semibold">
              Our Dance Styles
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((cls) => (
              <div
                key={cls.title}
                className="group rounded-2xl overflow-hidden border border-purple-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg text-studio-purple font-semibold">
                      {cls.title}
                    </h3>
                    <span className="text-xs bg-studio-pink-light text-studio-pink font-semibold px-2.5 py-1 rounded-full">
                      {cls.ages}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{cls.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 text-studio-pink font-semibold hover:gap-3 transition-all"
            >
              View all classes
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About / Mission */}
      <section className="py-16 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-2">
              Our Mission
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-studio-purple font-semibold mb-5 leading-snug">
              Building Dancers for Life
            </h2>
            <div className="flex flex-col gap-4 text-gray-600 leading-relaxed">
              <p>
                Help your child develop confidence, creativity, and a love for the arts — while
                making friends and having fun in the process.
              </p>
              <p>
                We are committed to building each dancer with a foundation that will last a lifetime
                on and off the dance floor. Since 2005, Next Step has been the home for dancers
                throughout Birdsboro, Douglassville, Morgantown, and the greater Reading area.
              </p>
            </div>
            <Link
              to="/staff"
              className="inline-block mt-6 text-studio-pink font-semibold hover:underline"
            >
              Meet our instructors →
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://nebula.wsimg.com/c956d2eb3c6f4223730168289b83265a?AccessKeyId=B77414135F6586AF8FC2&disposition=0&alloworigin=1"
              alt="Next Step Dance Studio 17th season celebration"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-studio-pink text-white rounded-xl px-5 py-3 shadow-lg">
              <p className="font-serif text-2xl font-semibold">17+</p>
              <p className="text-xs font-semibold uppercase tracking-wide">Seasons of Dance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-studio-purple py-16 px-6 text-center">
        <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
          Enrollment Open
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-white font-semibold mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-purple-300 mb-8 max-w-xl mx-auto leading-relaxed">
          Join our dance family today. Registration is simple and we'd love to find the perfect
          class for your child.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/registration"
            className="bg-studio-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors shadow-lg"
          >
            Enroll Now
          </Link>
          <Link
            to="/contact"
            className="border border-purple-400 text-purple-200 px-8 py-3 rounded-full font-semibold hover:border-white hover:text-white transition-colors"
          >
            Ask a Question
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
