import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const BoncyTransXFramer = ({ children, XVal='100vw', durVal=1 }) => {
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const boncyTransXVarients = {
        hidden: {
            x: XVal,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                deley: 0.5,
                duration: durVal,
                type: 'spring',
                stiffness: 100
            }
        }
    };

    return (
        <>
            <div className='transXframer-outer' ref={ref}>
                <motion.div
                    className='transXframer-inner'
                    variants={boncyTransXVarients}
                    animate={control}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default BoncyTransXFramer;