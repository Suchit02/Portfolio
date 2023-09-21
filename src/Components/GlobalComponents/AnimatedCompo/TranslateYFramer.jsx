import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const TranslateYFramer = ({ children, durVal=1 }) => {
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });
    const [val, setVal] = useState(75);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY < prevScrollY) {
            // when scrolling up
            setVal(75)
        } else {
            // when scrolling down
            setVal(-75)
        }
        setPrevScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false);
        return () => {
            window.removeEventListener('scroll', handleScroll, false);
        };
        // eslint-disable-next-line
    }, [prevScrollY]);

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const translateYVarients = {
        hidden: {
            y: val,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                deley: 0.5,
                duration: durVal,
                // type: 'spring',
                // bounce: 0.4

            }
        }
    };

    return (
        <>
            <div ref={ref}>
                <motion.div
                    variants={translateYVarients}
                    // initial='hidden'
                    animate={control}

                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default TranslateYFramer;