import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScaleFramer = ({children, durVal=0.5}) => {
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.6 });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const scaleVarients = {
        hidden: {
            scale: 0.5,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                deley: 1,
                duration: durVal,
                type: 'spring',
                bounce: 0.1

            }
        }
    };

    return (
        <>
            <div ref={ref}>
                <motion.div
                    variants={scaleVarients}
                    animate={control}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default ScaleFramer;