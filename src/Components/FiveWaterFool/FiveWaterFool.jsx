import React from 'react';
import SliderComponent from '../SliderTwoVersion/SliderComponent';
import five from './FiveWaterFool.module.css';
import arp from './../../assets/arp.jpg';
import arp2 from './../../assets/arp2.jpg';
import arp3 from './../../assets/arp3.jpg';
import arp4 from './../../assets/arp4.jpg';
import SliderComponentNegative from '../SliderTwoVersionNegative/SliderComponentNegative';

const FiveWaterFool = () => {
    const time = 6000;
    return (
        <div className={five.wrapperWater}>
            <SliderComponentNegative
                vodopad1={arp}
                vodopad2={arp2}
                vodopad3={arp3}
                vodopad4={arp4}
                time={time}
            />
            <div className={five.discription}>
                <h1 className={five.name}>Арпатские водопады</h1>
                <p className={five.discriptionText}>
                    Водопады в урочище Панагия у посёлка Зеленогорье являются
                    частью верхнего русла речушки Арпат, течение которой
                    собирается из четырёх источников. Арпатские водопады
                    довольно разнообразны. Среди них есть как большие, так и
                    совсем маленькие, как полноводные, так и схожие с небольшими
                    ручейками. Самым крупным считается 10-метровый каскад Душ.
                    Внизу образованы природные ванны: Любви, Молодости и
                    Здоровья. Поблизости находится глубокое Изумрудное озеро,
                    воды которого отличаются необычным зеленоватым цветом.
                    Считается, что мощная энергетика этого живописного места
                    может избавить от негативных эмоций. Озеро связано узкой
                    тропинкой с источником целебной питьевой воды.Побывать здесь
                    лучше всего в сезон обильных осадков или во время таяния
                    снега, когда можно в полной мере насладиться красотой их
                    каскадов. Посещение Арпатских водопадов свободное.
                    Местоположение: городской округ Алушта, п. Зеленогорье.
                    Добраться до Зеленогорья можно на рейсовом автобусе из
                    Алушты, на маршрутках из Судака.
                </p>
            </div>
        </div>
    );
};

export default FiveWaterFool;
