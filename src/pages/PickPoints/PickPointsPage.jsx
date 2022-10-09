import clsx from 'clsx';
import React, { useCallback, useEffect, useState } from "react";
import { api } from "../../common/api";
import { Preloader } from "../../common/components/Preloader";
import { themes } from '../../common/components/theme/ThemeContext';
import { PickPointList } from "./PickPointList";
import { PickPointMap } from "./PickPointMap";
import s from "./PickPointsPage.module.scss";
import { usePickPointSpeaker } from './usePickPointSpeaker';

const getPickPointById = (items, id) => items.find(pp =>  pp.id === id )

export const PickPointsPage = React.memo(({theme}) => {

    const [pickPoints, setPickPoints] = useState(null)
    const [selectedId, setSelectedId] = useState(null)
    const [showAllPP, setShowAllPP] = useState(true)
    const speak = usePickPointSpeaker()

    let onPickPointSelect = useCallback( (ppId) => {
        setShowAllPP(state => !state)
        setSelectedId(ppId)
        if(theme === themes.vi) {
            speak(getPickPointById(pickPoints, ppId))
        }
    },[pickPoints, theme])

    let selectedPP

    if(pickPoints) {
        selectedPP = getPickPointById(pickPoints, selectedId)
    }

    useEffect(() => {
        let getApiData = async () => { 
          let res = await api.getPickPoints()
          if(res) {
            res.pickPoints.forEach(pp => pp.id = Math.round(pp.latitude * 1000000))
            setPickPoints([...res.pickPoints])
            setSelectedId(res.pickPoints[0].id)
          }
        }
        getApiData()
    },[]);

    return pickPoints 
                ? ( <div className={s.content}>
                        
                        <div className={ clsx(s.ppWrapper, {[s.showAll]: showAllPP}) }>
                            { theme === themes.vi && <div className={s.message} >Выберите, чтобы прослушать!</div> }
                            <PickPointList pickPoints={pickPoints} selectedId={selectedId} onSelect={onPickPointSelect} />
                        </div>
                        <div className={s.mapWrapper}>
                            <PickPointMap latitude={selectedPP.latitude} longitude={selectedPP.longitude} />
                        </div> 
                    </div>)
                : <Preloader /> 
})

