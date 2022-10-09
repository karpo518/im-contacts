import React from 'react'
import image from './../../assets/images/preloader.gif'

export const Preloader = () => {
  return (
    <div className="preloader">
        <img src={image} alt="Информация загружается.." />
    </div>
  )
}
