import React from "react";
import { PickPointItem } from "./PickPointItem";
import s from "./PickPointsPage.module.scss"

export const PickPointList = React.memo(({pickPoints, selectedId, onSelect}) => {

  let ppList = pickPoints.map( (pp) => { 
      return <PickPointItem key={ pp.id } isSelected={selectedId === pp.id} onSelect={onSelect} item={pp} />
  })
  
  return <div className={s.ppList} >{ppList}</div>
})


