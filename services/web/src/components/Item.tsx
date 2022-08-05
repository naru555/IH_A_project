import React from "react";
import styles from '../styles/Home.module.css'


const Item = [
  {
    id: 1, name:"にんじん", line:"3/4"
  },
  {
  id: 2,  name:"ぶどう", line:"4/5"
  },
  {
    id: 3, name:"鶏肉", line:"12/12"
  }
]
const All = () => {
  return (
    <React.Fragment>
      {Item.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name} {item.line}</p>
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default All
