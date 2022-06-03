import React from "react"
import {Layout} from "antd"
import HeaderComponent from "../components/Header/Header"
import Sidebar from "../components/Sidebar/Sidebar"
import {Outlet} from "react-router-dom"

const LayoutComponent: React.FC = () => {
  const {Content, Footer} = Layout
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <HeaderComponent />
        <Content>
          <Outlet />
        </Content>
        <Footer style={{textAlign: "center"}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutComponent
