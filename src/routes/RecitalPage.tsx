import type { ReactElement } from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { SectionHeading } from '@components/SectionHeading'
import { SeniorSpotlight } from '@components/SeniorSpotlight'
import recital from '@data/recital'
import recitalProgram from '@data/recitalProgram'

function RecitalPage(): ReactElement {
  const { dateTime, venue, tickets } = recital
  const { title: programTitle, shows } = recitalProgram

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

      <div className="py-16 px-6 bg-studio-lavender">
        <div className="max-w-5xl mx-auto flex flex-col gap-14">

          {/* Program Info */}
          <section>
            <SectionHeading>Recital Program</SectionHeading>
            <div className="bg-studio-purple-light rounded-2xl p-8 grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-studio-purple mb-2 text-sm uppercase tracking-widest">
                  Date & Time
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {dateTime ?? "Details for this year's recital will be announced soon. Check back here or follow us for updates."}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-studio-purple mb-2 text-sm uppercase tracking-widest">
                  Venue
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {venue ?? 'Venue information coming soon. Our recitals are held at a local performing arts venue in the Berks County area.'}
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

            {/* Program link */}
            <div className="mt-5 rounded-2xl border border-purple-200 bg-white px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
              <div>
                <p className="font-semibold text-studio-purple">{programTitle}</p>
                {shows ? (
                  <p className="text-sm text-gray-500 mt-0.5">
                    {shows.length} {shows.length === 1 ? 'show' : 'shows'} · Full lineup now available
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 mt-0.5 italic">Program coming soon</p>
                )}
              </div>
              <Link
                to="/recital/program"
                className="inline-block bg-studio-purple text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-studio-purple-mid transition-colors whitespace-nowrap"
              >
                View Full Program →
              </Link>
            </div>
          </section>

          {/* Ticket Info */}
          <section>
            <SectionHeading>Ticket Information</SectionHeading>
            <div className="rounded-2xl border border-purple-100 overflow-hidden shadow-sm">
              <div className="bg-studio-purple px-8 py-5">
                <p className="text-purple-200 text-sm">
                  Ticket details will be released closer to recital time. Check this page for
                  updates or contact the studio directly.
                </p>
              </div>
              <div className="p-8 grid sm:grid-cols-3 gap-6">
                {[
                  { label: 'General Admission', value: tickets.generalAdmission ?? 'TBA' },
                  { label: 'Reserved Seating', value: tickets.reservedSeating ?? 'TBA' },
                  { label: 'Ticket Sales Open', value: tickets.salesOpen ?? 'TBA' },
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
          <SeniorSpotlight seniors={recital.seniors} />

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
