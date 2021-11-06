import React from 'react';
import SliderComponent from '../SliderTwoVersion/SliderComponent';
import four from './FourWaterFool.module.css';
import cos from './../../assets/cos.jpg';
import cos2 from './../../assets/cos2.jpg';
import cos3 from './../../assets/cos3.jpg';
import cos4 from './../../assets/cos4.jpg';

const FourWaterFool = () => {
    const time = 5000;
    return (
        <div className={four.wrapperWater}>
            <div className={four.slider}>
                <SliderComponent
                    vodopad1={cos}
                    vodopad2={cos2}
                    vodopad3={cos3}
                    vodopad4={cos4}
                    time={time}
                />
            </div>

            <div className={four.discription}>
                <h1 className={four.name}>Козырёк</h1>
                <p className={four.discriptionText}>
                    Водопад Нижний Кубалар, известный как Козырёк, получил своё
                    необычное название из-за туфового выступа подковообразной
                    формы, с которого поток водный поток падает вниз. Водопад,
                    высота которого достигает 14 м, образован ручьём Кобалар-Су
                    («пещерная вода»). Летом Нижний Кубалар практически
                    пересыхает, как видно на нашей заглавной фото выше (это
                    сентябрь, а сентябрь в Крыму — это лето). Приезжать
                    полюбоваться им лучше всего в конце марта или начале апреля,
                    во время таяния снегов, или в сезон дождей, примерно с
                    середины октября.Обратите внимание! У истока Кобалар-Су
                    расположено ещё 3 водопада: Фатьма, Рыжик (Рыжий Кубалар) и
                    Скользящий (Вехний Кубалар). Недалеко от Козырька, на левом
                    притоке Кобалар-Су, находятся пещеры Шан-Коба и Карань-Коба.
                    Посещение бесплатное. Местоположение: Балаклавский р-н, с.
                    Передовое. Добраться до достопримечательности можно на
                    маршрутных такси №41 или №182 от автостанции «5-й километр»
                    в Севастополе до Передового. От Передового до водопада можно
                    дойти пешком по туристической тропе, ориентируясь на
                    указатели.
                </p>
            </div>
        </div>
    );
};

export default FourWaterFool;
