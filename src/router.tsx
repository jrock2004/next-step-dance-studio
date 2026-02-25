import { createBrowserRouter } from 'react-router'
import Root from './routes/Root'
import HomePage from './routes/HomePage'
import AboutPage from './routes/AboutPage'
import ServicesPage from './routes/ServicesPage'
import ContactPage from './routes/ContactPage'
import RegistrationPage from './routes/RegistrationPage'
import SchedulePage from './routes/SchedulePage'
import PhotosPage from './routes/PhotosPage'
import LocationPage from './routes/LocationPage'
import Recital2022Page from './routes/Recital2022Page'
import NotFoundPage from './routes/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'services',
        element: <ServicesPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
      },
      {
        path: 'schedule',
        element: <SchedulePage />,
      },
      {
        path: 'photos',
        element: <PhotosPage />,
      },
      {
        path: 'location',
        element: <LocationPage />,
      },
      {
        path: 'recital-2022',
        element: <Recital2022Page />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
