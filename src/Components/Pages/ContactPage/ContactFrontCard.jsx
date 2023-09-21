import React from 'react'
import { Paper, Typography } from '@mui/material';
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';

const ContactFrontCard = (props) => {
  return (
    <>
      <Paper
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'mypresetcolor.foregroundColor',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          '& .MuiSvgIcon-root': {
            color:'mypresetcolor.highlightColor'
          }
        }}>
        <props.cardIcon sx={{ fontSize: '3rem',}} className='upDownAnimation' />
        <Typography variant='h5' fontWeight={'bold'} ><TextEffectFramer>{props.cardText}</TextEffectFramer></Typography>
      </Paper>
    </>
  )
}

export default ContactFrontCard;