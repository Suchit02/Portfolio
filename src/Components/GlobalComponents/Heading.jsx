import React from 'react';
import { Box, Typography } from '@mui/material';

const Heading = (props) => {
    return (
        <>
            <Box className={`${props.headingName}-heading`} textAlign={'center'} mt={0} mb={5}>
                <Typography variant='h4' component={'span'}
                    sx={{
                        position: 'relative',
                        fontWeight: 'bold',
                        zIndex: '15',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-5px',
                            left: '0px',
                            height: '3px',
                            width: '100%',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            borderRadius: '5px',
                            zIndex: '1'
                        },
                        '&::before': {
                            content: `""`,
                            position: 'absolute',
                            bottom: '-30px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '35px',
                            width: '35px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            border: '5px solid white',
                            borderColor: 'mypresetcolor.backgroundColor',
                            borderRadius: '50px',
                            zIndex: '2'
                        }
                    }}
                >{props.headingName} <props.headingIcon sx={{ color: 'mypresetcolor.backgroundColor', fontSize: '1rem', position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', zIndex: '2' }} /> </Typography>
            </Box>
        </>
    )
}

export default Heading;