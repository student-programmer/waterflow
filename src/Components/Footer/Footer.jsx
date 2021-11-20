import React from 'react'

import footer from "./Footer.module.css"
const Footer = () => {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors){
      anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
          behavior:"smooth",
          block:"start"
        })
      })
    }
    return (
        <div className={footer.wrapper}>
                      {/* <ul className={footer.waterfool}>
               <li className={footer.waterfoolItems}><a href="#map">Карта маршрута</a></li>
               <li className={footer.waterfoolItems}><a href="#oneWaterFoll">Учан-Су</a></li>
               <li className={footer.waterfoolItems}><a href="#twoWaterFoll">Джур-джур</a></li>
               <li className={footer.waterfoolItems}><a href="#threeWaterFoll">Су-Учхан</a></li>
               <li className={footer.waterfoolItems}><a href="#fourWaterFoll">Козырёк</a></li>
               <li className={footer.waterfoolItems}><a href="#fiveWaterFoll">Арпатские водопады</a></li>
               <li className={footer.waterfoolItems}><a href="#sixWaterFoll">Серебрянные струи</a></li>
              
            </ul> */}
        </div>
    )
}

export default Footer
