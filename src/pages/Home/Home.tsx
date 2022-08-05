import {Carousel, Col, Row} from "antd"
import React from "react"
import MostlyPlayed from "../../components/Home/MostlyPlayed"
import RecentlyAdd from "../../components/Home/RecentlyAdd"
import {LIST_CHART_MUSCIC} from "../../constants/listChartMusic"
import {ListChartMusic} from "../../models/listChartMusic"

const Home: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide)
  }
  return (
    <div className="container-fluid mx-auto mt-4">
      <h3 className="px-3">Bảng xếp hạng</h3>
      <Carousel arrows={true} slidesToShow={5} afterChange={onChange}>
        {LIST_CHART_MUSCIC?.map((item: ListChartMusic, index: number) => {
          return (
            <div key={index} className="d-flex flex-column px-3 mb-5">
              <a href={item.url}>
                <img className="w-100 rounded" src={item.images} alt={item.titleMusic} />
              </a>
              <p className="fw-bold text-dark fs-5 mb-0 ">{item.titleMusic}</p>
              <p className="text-black-50 ">{item.author}</p>
            </div>
          )
        })}
      </Carousel>
      <Row gutter={[24, 0]}>
        <Col span={10}>
          <RecentlyAdd />
        </Col>
        <Col span={14}>
          <MostlyPlayed />
        </Col>
      </Row>
    </div>
  )
}

export default Home
