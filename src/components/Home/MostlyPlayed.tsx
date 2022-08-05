import {BarChartOutlined} from "@ant-design/icons"
import React from "react"
import {LIST_MOSTLY_PLAYED} from "../../constants/listMostlyPlayed"
import {listMostlyPlayed} from "../../models/listMostlyPlayed"
import "../../assets/css/mostlyplayed.css"
const MostlyPlayed = () => {
  return (
    <React.Fragment>
      <h3>Mostly Played</h3>
      <div className="list-played overflow-auto " style={{width: "70%", height: 500}}>
        {LIST_MOSTLY_PLAYED?.map((item: listMostlyPlayed, index: number) => {
          return (
            <div
              style={{background: "#e8d8ff", borderRadius: 8}}
              className="item-played d-flex justify-content-between align-items-center my-4  p-2 px-4 shadow-sm"
            >
              <span>{index < 10 ? `0${index}` : index}</span>
              <img src={item?.images} style={{width: 70, height: 70, borderRadius: 8}} className="rounded-4" alt="" />
              <span>{item?.title}</span>
              <span>{item?.author}</span>
              <span>{item?.time}</span>
              <BarChartOutlined />
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default MostlyPlayed
