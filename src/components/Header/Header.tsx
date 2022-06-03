/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {Dropdown, Input, Layout, Menu, Space} from "antd"
import UserIcon from "../../assets/icons/useIcon"
import {DownOutlined} from "@ant-design/icons"
const {Header} = Layout
const {Search} = Input
const onSearch = (value: string): void => {
  console.log(value)
}
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: "3",
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
)
const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <div className="h-100 d-flex justify-content-between align-items-center">
        <Search placeholder="Search" onSearch={onSearch} style={{width: "20%"}} />
        <div className="user d-flex justify-content-around align-items-center gap-1">
          <UserIcon />
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="d-flex align-items-center text-white gap-2">
                User
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
