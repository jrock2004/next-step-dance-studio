import type { ReactElement } from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'

function RecitalPage(): ReactElement {
  return (
    <>
      <Helmet>
        <title>Annual Recital — Next Step Dance Studio</title>
        <meta
          name="description"
          content="Next Step Dance Studio annual recital — program information, ticket details, and a spotlight on our graduating seniors."
        />
      </Helmet>

      {/* Page hero */}
      <section className="bg-studio-purple px-6 py-16 text-center">
        <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
          Year-End Showcase
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white font-semibold mb-4">
          Annual Recital
        </h1>
        <p className="text-purple-300 max-w-xl mx-auto leading-relaxed">
          Our year-end recital is the highlight of the season — a celebration of hard work, growth,
          and the love of dance.
        </p>
      </section>

      <div className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col gap-14">

          {/* Program Info */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-studio-pink rounded-full" />
              <h2 className="font-serif text-2xl sm:text-3xl text-studio-purple font-semibold">
                Recital Program
              </h2>
            </div>
            <div className="bg-studio-purple-light rounded-2xl p-8 grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-studio-purple mb-2 text-sm uppercase tracking-widest">
                  Date & Time
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Details for this year's recital will be announced soon. Check back here or follow
                  us for updates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-studio-purple mb-2 text-sm uppercase tracking-widest">
                  Venue
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Venue information coming soon. Our recitals are held at a local performing arts
                  venue in the Berks County area.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-studio-purple mb-2 text-sm uppercase tracking-widest">
                  What to Expect
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Students from all classes and levels take the stage to perform the routines they've
                  worked on all year. Costumes, lighting, and music make it a true theatrical experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-studio-purple mb-2 text-sm uppercase tracking-widest">
                  Questions?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Contact us at{' '}
                  <a
                    href="mailto:missy@thenextstepdance.com"
                    className="text-studio-pink hover:underline font-semibold"
                  >
                    missy@thenextstepdance.com
                  </a>{' '}
                  or call{' '}
                  <a href="tel:6105822111" className="text-studio-pink hover:underline font-semibold">
                    (610) 582-2111
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Ticket Info */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-studio-pink rounded-full" />
              <h2 className="font-serif text-2xl sm:text-3xl text-studio-purple font-semibold">
                Ticket Information
              </h2>
            </div>
            <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-sm">
              <div className="bg-studio-purple px-8 py-5">
                <p className="text-purple-200 text-sm">
                  Ticket details will be released closer to recital time. Check this page for
                  updates or contact the studio directly.
                </p>
              </div>
              <div className="p-8 grid sm:grid-cols-3 gap-6">
                {[
                  { label: 'General Admission', value: 'TBA' },
                  { label: 'Reserved Seating', value: 'TBA' },
                  { label: 'Ticket Sales Open', value: 'TBA' },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-4 bg-studio-purple-light rounded-xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-studio-purple-mid mb-1">
                      {label}
                    </p>
                    <p className="font-serif text-2xl text-studio-purple font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Senior Spotlight */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-studio-pink rounded-full" />
              <h2 className="font-serif text-2xl sm:text-3xl text-studio-purple font-semibold">
                Senior Spotlight
              </h2>
            </div>
            <div className="bg-gradient-to-br from-studio-purple to-studio-purple-mid rounded-2xl p-10 text-center">
              <div className="text-studio-pink text-5xl mb-5">✦</div>
              <h3 className="font-serif text-2xl text-white font-semibold mb-3">
                Celebrating Our Graduating Seniors
              </h3>
              <p className="text-purple-300 max-w-xl mx-auto leading-relaxed mb-6">
                Each year we dedicate a special moment to honor our graduating seniors — dancers
                who have grown up in this studio and are taking their next step into the world.
                Their stories, memories, and achievements will be featured here when available.
              </p>
              <p className="text-purple-400 text-sm italic">
                Senior spotlight information coming soon.
              </p>
            </div>
          </section>

        </div>
      </div>

      {/* CTA */}
      <section className="bg-studio-purple-light py-12 px-6 text-center">
        <p className="text-gray-600 mb-4">
          Have questions about the recital? We're happy to help.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-studio-pink text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-700 transition-colors"
        >
          Contact Us
        </Link>
      </section>
    </>
  )
}

export default RecitalPage
