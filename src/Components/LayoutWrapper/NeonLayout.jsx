import React from 'react';
import { Box, Paper } from '@mui/material';


const NeonLayout = () => {
    return (
        <>
            <Box
                sx={{
                    minHeight: 'calc(100vh - 56px )',
                    width: '100%',
                    // overflow: 'hidden',
                    px: { xxs: '12px', lg: 0 },
                    py: 7,
                }}
            >
                <Box className='background-design'>
                    <Paper
                        sx={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            position: 'absolute',
                            left: '-15%',
                            top: '-5%',
                            zIndex: '-5',
                            transform: 'rotate(45deg)',
                            boxShadow: `0px 0px 20px 0px , 0px 0px 50px 0px, 0px 0px 75px 0px`,
                            color: 'mypresetcolor.highlightColor',
                            opacity: '0.8'
                        }}
                    />
                    <Paper
                        sx={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            position: 'absolute',
                            left: '-13%',
                            bottom: '-20%',
                            zIndex: '-5',
                            transform: 'rotate(55deg)',
                            boxShadow: `0px 0px 20px 0px , 0px 0px 50px 0px, 0px 0px 75px 0px`,
                            color: 'mypresetcolor.highlightColor',
                            opacity: '0.8'
                        }}
                    />
                    <Paper
                        sx={{
                            width: '500px',
                            height: '500px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            position: 'absolute',
                            right: '-20%',
                            top: '-5%',
                            zIndex: '-5',
                            transform: 'rotate(45deg)',
                            boxShadow: `0px 0px 20px 0px , 0px 0px 50px 0px, 0px 0px 100px 0px`,
                            color: 'primary.main',
                            opacity: '0.8'
                        }}
                    />
                </Box>
                <Box className='content-box' sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0,0,0,1)'}}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id adipisci in aperiam suscipit nemo voluptatibus maxime veritatis ratione quo nihil! Provident, nemo, sint sunt commodi ipsa consequatur harum fugiat, illum animi totam accusantium! Quaerat, ducimus. Molestiae soluta voluptates fugiat dolor et? Ipsa commodi inventore aspernatur doloremque facere dicta totam reprehenderit, unde voluptatum similique animi quis nulla molestias quasi numquam beatae maxime dolores nostrum quo voluptatibus eaque eligendi debitis sunt. Quisquam rerum dolor exercitationem? Provident distinctio natus cum voluptatum explicabo, consequatur molestias eaque sequi reiciendis cupiditate voluptatibus saepe atque voluptates placeat, ullam dolor. Voluptate, expedita animi dolore similique eos natus! Commodi?</h1>
                </Box>
            </Box>
        </>
    )
}

export default NeonLayout;