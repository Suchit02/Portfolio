import { Box, Typography } from '@mui/material';
import React from 'react'
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';

const ExperienceSection = () => {
  return (
    <>
        <Box className='experience-section'
            sx={{
                // height: '100%',
                display:'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                py: 2
            }}>
            <TextEffectFramer secVal={1}><Typography variant='h5' color={'gray'} fontWeight={'600'}>Fresher</Typography></TextEffectFramer>
            <TextEffectFramer secVal={2}><Typography variant='h4' color={'gray'} fontWeight={'600'}>No Experience Yet</Typography></TextEffectFramer>
        </Box>
    </>
  )
}

export default ExperienceSection;