import {MoreOutlined} from "@ant-design/icons"
import React from "react"
import {LIST_RECENTLY_ADD} from "../../constants/listRecently"
import {RecentlyAdded} from "../../models/listRecently"
const RecentlyAdd = () => {
  return (
    <React.Fragment>
      <h3 className="px-3">Recently Added</h3>
      <div className="list_recently px-3" style={{display: "flex", justifyContent: "space-between"}}>
        {LIST_RECENTLY_ADD?.map((item: RecentlyAdded, index: Number) => {
          return (
            <div className="item card" style={{background: "none", border: "none"}}>
              <img
                src={item?.images}
                style={{width: "180px", height: "200px", objectFit: "cover", borderRadius: 10}}
                alt=""
              />
              <div className=" mt-3 d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column ps-2">
                  <span className="mb-0" style={{fontWeight: "bold"}}>
                    {item?.title}
                  </span>
                  <span style={{color: "gray"}}>{item?.author}</span>
                </div>
                <MoreOutlined style={{fontSize: 20}} />
              </div>
            </div>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default RecentlyAdd
