import React from 'react'
import { Box } from '@mui/material';

const FliperCard = ({ cardWidth='250px', cardHeight='150px', rotatePosition='x', frontComponent, backComponent }) => {
    return (
        <>
            <Box
                
                sx={{
                    width: cardWidth,
                    height: cardHeight,
                    cursor:'pointer',
                    perspective: '5000px',
                    '&:hover .rotate-box': {
                        transform: 'rotateX(180deg)',
                        transition: 'transform 1s',
                    }
                }}>
                <Box
                    className='rotate-box'
                    sx={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        transition: 'transform 1s',
                        transformStyle: 'preserve-3d'
                    }}>
                    <Box className={'front-side-box'} sx={{ width: '100%', height:'100%', position: 'absolute', backfaceVisibility: 'hidden' }}>
                        {frontComponent}
                    </Box>
                    <Box className={'back-side-box'} sx={{ width: '100%', height:'100%', position: 'absolute', transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}>
                        {backComponent}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default FliperCard;