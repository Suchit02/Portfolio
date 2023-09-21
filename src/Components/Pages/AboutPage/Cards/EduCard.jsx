import React from 'react';
import { Box, Paper, Stack, Typography } from '@mui/material';

const EduCard = ({ data }) => {
    const { title, year, course, address, marks } = data;
    return (
        <>
            <Paper
                className='education-card'
                sx={{
                    '&.MuiPaper-root': {
                        backgroundColor: 'mypresetcolor.foregroundColor',
                        border: '2px dashed transparent',
                        // borderColor: 'mypresetcolor.highlightColor',
                        borderRadius: '10px',
                        p: 2,
                        marginLeft: '30px',
                        position: 'relative',
                        boxShadow: '1px 1px 25px rgba(0,0,0,0.2) inset, 2px 2px 5px rgba(0,0,0,0.3)',
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))',
                    }
                }}
            >
                <Box
                    className='small-circle-indicator'
                    sx={{
                        width: '25px',
                        height: '25px',
                        border: '3px solid',
                        borderColor: 'mypresetcolor.backgroundColor',
                        borderRadius: '50%',
                        backgroundColor: 'mypresetcolor.highlightColor',
                        position: 'absolute',
                        left: '-30px',
                        boxShadow: '1px 1px 5px rgba(255,255,255,0.3) inset, -1px -1px 10px rgba(0,0,0,0.3) inset'
                    }}
                />
                <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Typography variant='h6' fontWeight={'bold'}>{title}</Typography>
                    <Typography variant='h6' fontWeight={'bold'}>{year}</Typography>
                </Stack> 
                <Typography variant='body2' fontWeight={'600'} color={'mypresetcolor.highlightColor'}>{course}</Typography>
                <Typography>{address}</Typography>
                <Typography>{marks}</Typography>
                {/* <Typography variant='caption'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam numquam sapiente doloremque perspiciatis ipsam nostrum sed consequuntur optio praesentium quasi.</Typography> */}
            </Paper>
        </>
    )
}

export default EduCard;