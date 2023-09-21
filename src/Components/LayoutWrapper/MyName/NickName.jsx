import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './name.css'

const NickName = () => {
    return (
        <>
            <Box className='nick-name waviy'>
                <Stack className="waviy" display={'flex'} flexDirection={'row'} color={'mypresetcolor.fontColor'}>
                    <Typography component={'span'} variant='h4' fontWeight={'bold'} color={'mypresetcolor.highlightColor'} sx={{'--i': 1}}>S</Typography>
                    <Typography component={'span'} variant='h4' fontWeight={'bold'} sx={{'--i': 2}}>a</Typography>
                    <Typography component={'span'} variant='h4' fontWeight={'bold'} sx={{'--i': 3}}>t</Typography>
                    <Typography component={'span'} variant='h4' fontWeight={'bold'} sx={{'--i': 3}}>y</Typography>
                    <Typography component={'span'} variant='h4' fontWeight={'bold'} sx={{'--i': 3}}>a</Typography>
                </Stack>
            </Box>
        </>
    )
}

export default NickName