import { createBrowserRouter } from 'react-router'
import Root from './routes/Root'
import HomePage from './routes/HomePage'
import ClassesPage from './routes/ClassesPage'
import StaffPage from './routes/StaffPage'
import RecitalPage from './routes/RecitalPage'
import RegistrationPage from './routes/RegistrationPage'
import ContactPage from './routes/ContactPage'
import PhotosPage from './routes/PhotosPage'
import NotFoundPage from './routes/NotFoundPage'
import EmailPreviewPage from './routes/EmailPreviewPage'

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
        path: 'classes',
        element: <ClassesPage />,
      },
      {
        path: 'staff',
        element: <StaffPage />,
      },
      {
        path: 'recital',
        element: <RecitalPage />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'gallery',
        element: <PhotosPage />,
      },
      {
        path: 'dev/email-preview',
        element: <EmailPreviewPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
