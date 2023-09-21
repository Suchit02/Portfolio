import React from 'react'
import { Button, Paper, Typography } from '@mui/material';
import { Send } from '@mui/icons-material';

const ContactBackCard = (props) => {
    return (
        <>
            <Paper
                sx={{
                    // width: '100%',
                    height: '100%',
                    px: 2,
                    py: 1,
                    backgroundColor: 'mypresetcolor.foregroundColor',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',

                }}>
                <Typography variant='body1' fontWeight={'bold'} mb={1} sx={{ wordBreak: 'break-word', textAlign: 'center' }}>{props.cardText}</Typography>
                <Button
                    variant='outlined'
                    size='large'
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '& .btn-text': {
                            transform: 'translate3d(0px, 0px, 0px)',
                            transition: 'transform 0.3s ease-in'
                        },
                        '&:hover .btn-text': {
                            transform: 'translate3d(100px, -100px, -100px)',
                            transition: 'transform 0.3s ease-in'
                        },
                        '& .MuiSvgIcon-root': {
                            position: 'absolute',
                            transform: 'translate3d(-100px, 100px, -100px) rotate(-45deg)',
                            transition: 'transform 0.3s ease-in'
                        },
                        '&:hover .MuiSvgIcon-root': {
                            transform: 'rotate(-45deg) translate3d(0px, 0px, 0px)',
                            transition: 'transform 0.3s ease-in'
                        }
                    }}
                >
                    <Typography className='btn-text' component={'span'} fontSize={'0.8125rem'}>Send Message</Typography>
                    <Send />
                </Button>
            </Paper>
        </>
    )
}

export default ContactBackCard;