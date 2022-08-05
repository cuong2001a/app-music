import React from "react"
import {Layout} from "antd"
import HeaderComponent from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import {Outlet} from "react-router-dom"

const LayoutComponent: React.FC = () => {
  const {Content, Footer} = Layout
  return (
    <Layout style={{overflow: "auto"}}>
      <Sidebar />
      <Layout style={{height: "calc(100vh)", overflow: "hidden", position: "relative"}}>
        <HeaderComponent />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
