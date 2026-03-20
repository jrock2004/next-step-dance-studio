import { createBrowserRouter, type RouteObject } from "react-router";
import Root from "./routes/Root";
import HomePage from "./routes/HomePage";
import NotFoundPage from "./routes/NotFoundPage";

const devRoutes: RouteObject[] = import.meta.env.DEV
  ? [
      {
        path: "dev/email-preview",
        lazy: async () => ({
          Component: (await import("./routes/EmailPreviewPage")).default,
        }),
      },
    ]
  : [];

/** Lazy-loaded so Framer Motion, fat page deps, and the gallery glob stay off the home chunk. */
const contentRoutes: RouteObject[] = [
  {
    path: "classes",
    lazy: async () => ({ Component: (await import("./routes/ClassesPage")).default }),
  },
  {
    path: "staff",
    lazy: async () => ({ Component: (await import("./routes/StaffPage")).default }),
  },
  {
    path: "recital",
    lazy: async () => ({ Component: (await import("./routes/RecitalPage")).default }),
  },
  {
    path: "registration",
    lazy: async () => ({
      Component: (await import("./routes/RegistrationPage")).default,
    }),
  },
  {
    path: "contact",
    lazy: async () => ({ Component: (await import("./routes/ContactPage")).default }),
  },
  {
    path: "gallery",
    lazy: async () => ({ Component: (await import("./routes/PhotosPage")).default }),
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...contentRoutes,
      ...devRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
