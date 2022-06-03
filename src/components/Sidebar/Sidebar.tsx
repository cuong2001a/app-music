import {Layout, Menu} from "antd"
import React from "react"
import {Link} from "react-router-dom"
import Frame from "../../assets/icons/Frame"
import {LIST_ROUTES} from "../../constants/listRoute"
import {ListA} from "../../models"
import "../../assets/css/sidebar.css"
const {Sider} = Layout
const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <Sider
        style={{
          height: "100vh",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="logo">
          <Frame />
        </div>
        <Menu mode="inline" className="sidebar__menu">
          {LIST_ROUTES?.map((item: ListA, index: number) => {
            return (
              <Menu.Item icon={<item.icon />} key={index}>
                <Link to={item.path}>{item.title}</Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
    </div>
  )
}

export default Sidebar
