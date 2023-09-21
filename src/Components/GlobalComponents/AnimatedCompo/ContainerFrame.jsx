import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ContainerFrame = ({ children }) => {
    const containerVarient = {
        hidden: {
            y: 75,
            opacity: 0,
            transition: {
                deley: 0.5,
                duration: 3,

            }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                deley: 0.5,
                duration: 1,
                bounce: 0.5

            }
        }
    };
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.6 });
    useEffect(() => {
        console.log(inView)
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <>
            <div ref={ref}>
                <motion.div
                    variants={containerVarient}
                    animate={control}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default ContainerFrame;