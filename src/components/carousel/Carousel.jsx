import React, { useLayoutEffect, useState } from 'react';
import { animated, useSpring, useSpringRef, useTransition } from '@react-spring/web';

import img from './img/camera_img.svg';
import carouselImg1 from './img/carousel_bg1.svg';
import carouselImg2 from './img/carousel_bg2.svg';
import carouselImg3 from './img/carousel_bg3.svg';
import styles from './style.module.css';

const images = [carouselImg1, carouselImg2, carouselImg3];

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const springApi = useSpringRef();

    const transitions = useTransition(activeIndex, {
        from: {
            clipPath: 'polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)',
        },
        enter: {
            clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
        },
        leave: {
            clipPath: 'polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%)',
        },
        onRest: (_springs, _ctrl, item) => {
            if (activeIndex === item) {
                setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
            }
        },
        exitBeforeEnter: true,
        config: { duration: 3000 },
        delay: 500,
        ref: springApi,
    });

    const springs = useSpring({
        from: {
            strokeDashoffset: 140,
        },
        to: {
            strokeDashoffset: 0,
        },
        config: {
            duration: 11000,
        },
        loop: true,
        ref: springApi,
    });

    useLayoutEffect(() => {
        springApi.start();
    }, [activeIndex]);

    return (
        <div className={styles.section} id='carousel'>
            <div>
                <div className={styles.camera_img}></div>
            </div>
            <div className={styles.container}>
                <div className={styles.content_wrapper}>
                    {transitions((springs, item) => (
                        <animated.div style={springs}>
                            <img src={images[item]} alt='Фото' />
                        </animated.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
