import type { ReactElement } from 'react'
import { Link, useRouteError, isRouteErrorResponse } from 'react-router'
import { Helmet } from 'react-helmet-async'

function ErrorPage(): ReactElement {
  const error = useRouteError()

  const message = isRouteErrorResponse(error)
    ? error.statusText
    : 'Something went wrong. Please try refreshing the page.'

  return (
    <>
      <Helmet>
        <title>Error — Next Step Dance Studio</title>
      </Helmet>
      <div className="min-h-screen bg-studio-purple-light flex flex-col items-center justify-center px-6 py-24 text-center">
        <img
          src="/images/error-image.jpg"
          alt="Dancer on the floor"
          className="w-64 sm:w-80 rounded-2xl shadow-lg mb-10 object-cover"
        />
        <p className="text-studio-pink text-sm font-semibold uppercase tracking-widest mb-3">
          Oops!
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-studio-purple font-semibold mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed mb-8">{message}</p>
        <Link
          to="/"
          className="bg-studio-pink text-white font-semibold px-6 py-3 rounded-full hover:bg-pink-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </>
  )
}

export default ErrorPage
