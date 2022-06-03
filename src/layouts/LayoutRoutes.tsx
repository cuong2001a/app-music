import React from "react"
const Home = React.lazy(() => import("../pages/Home/Home"))
const Browser = React.lazy(() => import("../pages/Browser/Browser"))
const Album = React.lazy(() => import("../pages/Album/Album"))
const Artist = React.lazy(() => import("../pages/Artist/Artist"))
const Video = React.lazy(() => import("../pages/Video/Video"))

export interface LayoutConfig {
  path: string
  element: React.ReactNode
  exact?: boolean
}

export const LayoutRoutes: LayoutConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
  {
    path: "/album",
    element: <Album />,
  },
  {
    path: "/artist",
    element: <Artist />,
  },
  {
    path: "/video",
    element: <Video />,
  },
]
