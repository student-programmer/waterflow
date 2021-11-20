import React from 'react'
import start from "./StartComponent.module.css"
import map from "./../../assets/карта2.png"
const StartCopmonent = () => {
    return (
        <div className={start.wrapper}>
            <img src={map} alt="map"  className={start.mapNew}/>
            {/* <p className={start.jan}>Учан-Су</p>
            <p className={start.djur}>Джур-джур</p>
            <p className={start.su}>Су-Учхан</p>
            <p className={start.kaz}>Козырёк</p>
            <p className={start.arp}>Арпатские водопады</p>
            <p className={start.silv}>Серебрянные струи</p> */}
            <p id="map" className={start.map}>Карта маршрута</p>
        </div>
    )
}

export default StartCopmonent
