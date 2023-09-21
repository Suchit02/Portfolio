import React from 'react'
import { motion } from 'framer-motion';

const btnVarients = {
    hidden: {
        scale: 1
    },
    hover: {
        scale: 1.1,
        transition: {
            duration: 1,
            type: 'spring',
            stiffness: 500,
            repeat: Infinity,
            repeatType: 'reverse',
        }
    }
}
const BtnHoverFramer = ({ children }) => {
    return (
        <>
            <motion.div
                className='btnHover-box'
                variants={btnVarients}
                whileHover={'hover'}
            >
                {children}
            </motion.div>
        </>
    )
}

export default BtnHoverFramer;