import React from 'react';

import six from './SixWaterFool.module.css';
import sil from './../../assets/sil.jpg';
import sil2 from './../../assets/sil2.jpg';
import sil3 from './../../assets/sil3.jpg';
import sil4 from './../../assets/sil4.jpg';
import SliderComponentNegative from '../SliderTwoVersionNegative/SliderComponentNegative';
import SliderComponent from '../SliderTwoVersion/SliderComponent';

const SixWaterFool = () => {
    const time = 5000;
    return (
        <div className={six.wrapperWater}>
            <div className={six.slider}>
                <SliderComponent
                    vodopad1={sil}
                    vodopad2={sil2}
                    vodopad3={sil3}
                    vodopad4={sil4}
                    time={time}
                />
            </div>

            <div className={six.discription}>
                <p className={six.name}>Серебряные струи</p>
                <p className={six.discriptionText}>
                    Водопад на реке Сары-Узень на территории Большого каньона
                    долгое время считался одним из самых живописных на
                    полуострове. Каменную глыбу, с которой стекали струи воды,
                    покрывала крупная шапка мха, а внизу, под многочисленными
                    струйками, скрывался грот. В январе 2016 г. туфовый
                    «козырёк» водопада был обрушен из-за больших перепадов
                    температур. Сейчас обрушенная глыба закрывает вид на водопад
                    при подходе. Водопад окружён лесом из дубов, буков, лещины.
                    Недалеко от него расположены такие известные
                    достопримечательности, как Жёлтая пещера; Юсуповский пруд,
                    созданный князем Ф. Юсуповым для разведения форели;
                    смотровая площадка Каменный поворот.Туристы отмечают, что
                    после обрушения зелёной «шапки» водопад по-прежнему остаётся
                    интересным для посещения. Местоположение: Бахчисарайский
                    р-н, с. Соколиное. Добраться до водопада можно по трассе
                    «Бахчисарай-Ялта», двигаться в направлении с. Соколиное.
                </p>
            </div>
        </div>
    );
};

export default SixWaterFool;
