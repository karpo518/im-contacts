import React from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

export const PickPointMap = ({latitude, longitude}) => {

    return (
      <YMaps>
        <Map state={{ center: [latitude, longitude], zoom: 15 }} width="100%" height="100%" >
          <Placemark geometry={[latitude, longitude]} />
        </Map>
      </YMaps>
    )
}


