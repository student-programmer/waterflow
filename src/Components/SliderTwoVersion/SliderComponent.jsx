import React from 'react';
import  './SliderComponent.css';
import {useState, useEffect} from "react"


const SliderComponent = ({vodopad1, vodopad2, vodopad3, vodopad4, time}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const img = [
        <img className="imgShip" key={vodopad1} src={vodopad1} />,
        <img  className="imgcode" key={vodopad2} src={vodopad2} />,
        <img className="imgShip" key={vodopad3} src={vodopad3} />,
        <img  className="imgcode" key={vodopad4} src={vodopad4} />,
    ]
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === img.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, time)
        return () => clearInterval()
    }, [])
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
    return <div>
         <div className="slider2">
        <div className="slider-img2 slider-img-prev2"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img2"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img2 slider-img-next2"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
    </div>;
};

export default SliderComponent;
