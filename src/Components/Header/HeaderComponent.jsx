import React, { useRef, useState } from 'react';
import header from './HeaderComponent.module.css';
import './HeaderActive.css';
import icon from './../../assets/waterfool.png';
const HeaderComponent = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        });
    }
    const activRef = useRef();
    const [activClass, setActivClass] = useState('');
    const onHandleSetActive = () => {
        setActivClass();
    };
    return (
        <div className={header.wrapper}>
            <img src={icon} alt='icon' className={header.icon} />
            <h1 className={header.logo}>waterfalls</h1>
            <ul className={header.waterfool}>
                <li
                    id='water'
                    className={
                        (activClass === activRef.current ? 'active' : '',
                        'waterfoolItems')
                    }
                    ref={activRef}
                >
                    <a href='#map'>Карта маршрута</a>
                </li>
                <li
                    className={
                        (activClass === activRef.current ? 'active' : '',
                        'waterfoolItems')
                    }
                    ref={activRef}
                >
                    <a href='#oneWaterFoll'>Учан-Су</a>
                </li>
                <li
                    className={
                        (activClass === activRef.current ? 'active' : '',
                        'waterfoolItems')
                    }
                    ref={activRef}
                >
                    <a href='#twoWaterFoll'>Джур-джур</a>
                </li>
                <li
                    className={
                        (activClass === activRef.current ? 'active' : '',
                        'waterfoolItems')
                    }
                    ref={activRef}
                >
                    <a href='#threeWaterFoll'>Су-Учхан</a>
                </li>
                <li
                    className={
                        (activClass === activRef.current ? 'active' : '',
                        'waterfoolItems')
                    }
                    ref={activRef}
                >
                    <a href='#fourWaterFoll'>Козырёк</a>
                </li>
                <li
                    className={
                        (activClass === activRef.current ? 'active' : '',
                        'waterfoolItems')
                    }
                    ref={activRef}
                >
                    <a href='#fiveWaterFoll'>Арпатские водопады</a>
                </li>
                <li
                    className={
                        (activClass === activRef.current ? 'active' : '',
                        'waterfoolItems')
                    }
                    ref={activRef}
                >
                    <a href='#sixWaterFoll'>Серебрянные струи</a>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;
