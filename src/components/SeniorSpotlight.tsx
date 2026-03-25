import type { ReactElement } from 'react'
import type { Senior } from '@data/recital'
import { classes } from '@data/classes'
import { SectionHeading } from './SectionHeading'

type Props = {
  seniors: Senior[] | null
}

export function SeniorSpotlight({ seniors }: Props): ReactElement {
  if (!seniors || seniors.length === 0) {
    return (
      <section>
        <SectionHeading>Senior Spotlight</SectionHeading>
        <div className="bg-gradient-to-br from-studio-purple to-studio-purple-mid rounded-2xl p-10 text-center">
          <div className="text-studio-pink text-4xl mb-4">✦</div>
          <h3 className="font-serif text-2xl text-white font-semibold mb-3">
            Celebrating Our Graduating Seniors
          </h3>
          <p className="text-purple-300 max-w-xl mx-auto leading-relaxed mb-3">
            Each year we dedicate a special moment to honor our graduating seniors — dancers
            who have grown up in this studio and are taking their next step into the world.
          </p>
          <p className="text-purple-400 text-sm italic">Senior spotlight coming soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section>
      <SectionHeading>Senior Spotlight</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {seniors.map((senior) => (
          <SeniorCard key={senior.name} senior={senior} />
        ))}
      </div>
    </section>
  )
}

function SeniorCard({ senior }: { senior: Senior }): ReactElement {
  const styleLabels = senior.styles
    ?.map((id) => classes.find((c) => c.id === id)?.title)
    .filter((t): t is string => Boolean(t))

  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-purple-100 bg-white flex flex-col">
      {/* Banner */}
      <div className="h-24 bg-gradient-to-br from-studio-purple to-studio-purple-mid relative flex-shrink-0">
        <div className="absolute -bottom-8 left-6">
          {senior.photo ? (
            <img
              src={senior.photo}
              alt={senior.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
          ) : (
            <div className="w-16 h-16 rounded-full border-4 border-white shadow-md bg-studio-purple-light flex items-center justify-center">
              <span className="font-serif text-xl font-semibold text-studio-purple">
                {senior.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="pt-10 pb-6 px-6 flex flex-col flex-1">
        <h3 className="font-serif text-lg font-semibold text-studio-purple leading-tight">
          {senior.name}
        </h3>

        {(senior.classOf != null || senior.yearsAtStudio != null) && (
          <p className="text-sm text-gray-400 mt-1">
            {senior.classOf != null && `Class of ${senior.classOf}`}
            {senior.classOf != null && senior.yearsAtStudio != null && ' · '}
            {senior.yearsAtStudio != null && `${senior.yearsAtStudio} years at Next Step`}
          </p>
        )}

        {senior.quote ? (
          <p className="text-sm text-gray-500 mt-3 leading-relaxed italic">
            &ldquo;{senior.quote}&rdquo;
          </p>
        ) : senior.bio ? (
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">{senior.bio}</p>
        ) : null}

        {styleLabels && styleLabels.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {styleLabels.map((label) => (
              <span
                key={label}
                className="text-xs bg-studio-purple-light text-studio-purple-mid font-semibold px-2.5 py-1 rounded-full"
              >
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
