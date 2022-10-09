import React, { useEffect } from 'react'
import clsx from 'clsx'
import s from "./PickPointsPage.module.scss"

export const PickPointItem = React.memo(({item, isSelected, onSelect}) => {

    let budgetList = item.budgets.map( budget => <div key={budget} className={s.optItem}>{budget}</div> )

    const onClick = () => {
      onSelect(item.id)
    }
  
    return (
      <div className={clsx(s.ppItem, {[s.selected]: isSelected}) } onClick={ () => onClick(item.id) } >
        <div className={s.ppContent} >
            <div className={s.ppAddress}>{item.address}</div>
            <div className={s.optList}>{budgetList}</div>
        </div>
        <div className={s.openPointer}><i className={s.icon}></i></div>
      </div>
  )
})
