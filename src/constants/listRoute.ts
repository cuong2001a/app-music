import {ListA} from "../models/listRoute"
import {FileOutlined, FileSearchOutlined, HomeOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons"

export const LIST_ROUTES: ListA[] = [
  {
    path: "/",
    title: "Home",
    icon: HomeOutlined,
    child: [],
  },
  {
    path: "/browser",
    title: "Browser",
    icon: FileSearchOutlined,
    child: [],
  },
  {
    path: "/album",
    title: "Album",
    icon: FileOutlined,
    child: [],
  },
  {
    path: "/artist",
    title: "Artist",
    icon: UserOutlined,
    child: [],
  },
  {
    path: "/video",
    title: "Video",
    icon: VideoCameraOutlined,
    child: [],
  },
]
