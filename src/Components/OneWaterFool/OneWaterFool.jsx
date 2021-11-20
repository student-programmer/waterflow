import React from 'react';
import SliderComponent from '../SliderTwoVersion/SliderComponent';
import one from './OneWaterFool.module.css';
import vodopad1 from './../../assets/vodopad1.jpg';
import vodopad2 from './../../assets/vodopad2.jpg';
import vodopad3 from './../../assets/vodopad3.jpg';
import vodopad4 from './../../assets/vodopad4.jpg';
import SliderComponentNegative from '../SliderTwoVersionNegative/SliderComponentNegative';
const OneWaterFool = () => {
    const time = 4000;
    return (
        <div id="oneWaterFoll" className={one.wrapperWater}>
              <div className={one.slider}> 
              <SliderComponentNegative
                vodopad1={vodopad1}
                vodopad2={vodopad2}
                vodopad3={vodopad3}
                vodopad4={vodopad4}
                time={time}
            />
              </div>
 
            <div className={one.discription}>
                <h1 className={one.name}>Учан-Су</h1>
                <p className={one.discriptionText}>
                    Каждый крымский водопад красив и уникален по-своему. К
                    примеру, на южном склоне Ай-Петри находится водопад Учан-Су.
                    Как добраться к нему знает каждый крымчанин. Это самый
                    высокий каскад не только полуострова, но и всей европейской
                    части стран СНГ. «Летящая вода» – так переводится его
                    название с тюркского языка. Действительно, водные струи
                    падают почти со 100-метровой высоты, отчего кажется, что они
                    не стекают, а летят по воздуху. Вдали виднеется Ялта.
                    Водопад Учан-Су расположен на одноимённой реке, на 390 м
                    выше уровня моря. Он входит в состав Ялтинского природного
                    заповедника и является источником водоснабжения Ялты: за
                    секунду Учан-Су выдаёт около 50 л. воды (среднегодовой
                    показатель), весной эта цифра может увеличиваться в десятки
                    раз. У этого живописного природного памятника даже есть свой
                    талисман – статуя орла, красующаяся на крыше водозаборного
                    сооружения. Многие туристы стараются посетить Учан-Су ранней
                    весной. В период активного таяния снега он особенно
                    полноводен, потоки воды бурлят и с грохотом бьются о выступы
                    скалы. Жарким летом водопад пересыхает, но это не
                    останавливает многочисленных любителей дикой природы и
                    неповторимых пейзажей. 
                </p>
                <p className={one.place}>Расположен: Крым, городской округ
                    Ялта, п. Виноградное Координаты: 44.492471, 34.092988</p>
            </div>
        </div>
    );
};

export default OneWaterFool;
