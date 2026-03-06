import type { ReactElement } from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { classes } from '@/data/classes'
import { DancerPlaceholder } from '@components/DancerPlaceholder'

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
              <div className="sm:w-48 flex-shrink-0 h-48 sm:h-auto overflow-hidden">
                {cls.image ? (
                  <img
                    src={cls.image}
                    alt={cls.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <DancerPlaceholder />
                )}
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="font-serif text-xl text-studio-purple font-semibold">
                      {cls.title}
                    </h2>
                    <span className="flex-shrink-0 text-xs bg-studio-purple-light text-studio-purple-mid font-semibold px-2.5 py-1 rounded-full">
                      {cls.ages}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{cls.summary}</p>
                  {cls.note && (
                    <p className="text-xs text-studio-pink font-semibold italic">{cls.note}</p>
                  )}
                </div>
                <div className="mt-4 pt-3 border-t border-purple-50 flex items-center justify-between">
                  <span className="text-sm font-semibold text-studio-purple">{cls.price}</span>
                  <Link
                    to={`/registration?class=${cls.id}`}
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
