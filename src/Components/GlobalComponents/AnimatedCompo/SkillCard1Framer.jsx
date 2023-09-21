import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard1Framer = ({children, dVal=0.5}) => {
    const control = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.6 });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const cardVarients = {
        hidden: {
            scale: 0.5,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                deley: 1,
                duration: dVal,
                type: 'spring',
                bounce: 0.1

            }
        }
    };

    return (
        <>
            <div ref={ref}>
                <motion.div
                    variants={cardVarients}
                    animate={control}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default SkillCard1Framer