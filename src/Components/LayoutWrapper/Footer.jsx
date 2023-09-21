import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Box sx={{backgroundColor: 'mypresetcolor.foregroundColor'}} pb={{xxs: '65px', md: 0}} mt={5}>
                <Typography variant='caption' component={'div'} textAlign={'center'} fontWeight={'bold'} p={1}>Copyright@SuchitMishra</Typography>
            </Box>
        </>
    )
}

export default Footer