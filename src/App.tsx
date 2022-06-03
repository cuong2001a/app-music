import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.min.css"
import "react-slick/dist/react-slick"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {LayoutRoutes} from "./layouts/LayoutRoutes"
import LayoutComponent from "./layouts/Layout"
import Login from "./pages/Login/Login"
import Loading from "./components/Loading/Loading"
function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={<Loading />}>
          <React.Fragment>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="/" element={<LayoutComponent />}>
                {LayoutRoutes.map(({path, element}, index) => {
                  return <Route key={index} path={path} element={element} />
                })}
              </Route>
            </Routes>
          </React.Fragment>
        </React.Suspense>
      </Router>
    </div>
  )
}

export default App
