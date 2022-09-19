import React from 'react'

export function Goalitem(goal_name,img_address) {
  return (
    <div>
        <img className="goalitem_image" src={img_address} alt=""/>
        <h3>{goal_name}</h3>
    </div>
  )
}

