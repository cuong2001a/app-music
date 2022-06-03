import React from "react"
import {Button, Checkbox, Form, Input} from "antd"
import {AppleOutlined, FacebookOutlined, GoogleOutlined} from "@ant-design/icons"
import SpotifyLogo from "../../assets/icons/spotifyLogo"
import "../../assets/css/login.css"
const Login = () => {
  return (
    <div className="login d-flex flex-column justify-content-center">
      <div
        className="logo text-center"
        style={{
          height: "56px",
          margin: "25px 0px 10px",
          paddingBottom: "10px",
          borderBottom: "1px solid rgb(217, 218, 220)",
        }}
      >
        <SpotifyLogo />
      </div>
      <div className="formSignIn text-center mx-auto">
        <Form layout="vertical">
          <div
            style={{minWidth: "450px", width: "100%"}}
            className="d-flex justify-content-center flex-column align-items-center w-full gap-3"
          >
            <p className="fw-bold mb-0">Để tiếp tục, hãy đăng nhập vào Spotify.</p>
            <Button
              style={{backgroundColor: "#185abc"}}
              className="w-100 d-flex align-items-center justify-content-center text-white mx-auto text-uppercase fw-bold px-5 py-4 rounded-pill"
              icon={<FacebookOutlined style={{fontSize: "150%"}} />}
            >
              Tiếp tục với facebook
            </Button>
            <Button
              style={{backgroundColor: "#191919", width: "100%"}}
              className=" d-flex align-items-center justify-content-center text-white m-0 text-uppercase fw-bold px-5 py-4 rounded-pill"
              icon={<AppleOutlined style={{fontSize: "150%"}} />}
            >
              Tiếp tục với Apple
            </Button>
            <Button
              style={{backgroundColor: "white", width: "100%"}}
              className=" d-flex align-items-center justify-content-center text-dark m-0 text-uppercase fw-bold px-5 py-4 rounded-pill"
              icon={<GoogleOutlined style={{fontSize: "150%"}} />}
            >
              Tiếp tục bằng google
            </Button>
            <Button
              style={{width: "100%"}}
              className=" d-flex align-items-center justify-content-center text-dark m-0 text-uppercase fw-bold px-5 py-4 rounded-pill"
            >
              Tiếp tục với số điện thoại
            </Button>
            <div className="other d-flex align-items-center justify-content-center">
              <hr className="border border-dark" />
              <span className="fw-bold">Hoặc</span>
              <hr className="border border-dark" />
            </div>
            <Form.Item className="w-100" label={<span className="fw-bold">Địa chỉ email hoặc tên người dùng</span>}>
              <Input style={{padding: "14px"}} className="input-form" placeholder="Địa chỉ email hoặc tên người dùng" />
            </Form.Item>
            <Form.Item className="w-100 mb-0" label={<span className="fw-bold">Mật khẩu</span>}>
              <Input type="password" style={{padding: "14px"}} className="input-form" placeholder="Mật khẩu" />
            </Form.Item>
            <div className="w-100 text-start">
              <a href="#" className="text-dark">
                Quên mật khẩu của bạn?
              </a>
            </div>
            <Form.Item className="text-start w-100" name="remember" valuePropName="checked">
              <div className="d-flex align-items-center justify-content-between pb-4  border-bottom border-secondary">
                <Checkbox>Hãy nhớ tôi</Checkbox>
                <Button className="text-dark fw-bold bg-success px-3 py-4 d-flex align-items-center fs-5 rounded-pill">
                  Đăng nhập
                </Button>
              </div>
            </Form.Item>
            <Form.Item className="w-100">
              <p className="fw-bold text-center">Bạn chưa có tài khoản</p>
              <Button
                style={{backgroundColor: "white", width: "100%"}}
                className="d-flex align-items-center justify-content-center text-dark m-0 text-uppercase fw-bold px-5 py-4 rounded-pill"
              >
                Đăng kí Spotify
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login
