import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const ServicesCard1 = ({ data }) => {
    const { cardHeading, cardPara, cardImg } = data;
    const cardRef = useRef();
    const cardContRef = useRef();
    const [isActive, setIsActive] = useState(false);
    const [overflowTextBox, setOverFlowTextBox] = useState({
        display: '-webkit-box',
        WebkitLineClamp: '4',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    });

    // Click outside scroll top inside card
    useEffect(() => {
        const checkIfCilckOutside = (e) => {
            if (cardRef.current && !cardRef.current.contains(e.target)) {
                setIsActive(false);
                setOverFlowTextBox({
                    display: '-webkit-box',
                    WebkitLineClamp: '4',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                });
            }
        }
        document.addEventListener('mousedown', checkIfCilckOutside);
        return () => {
            document.addEventListener('mousedown', checkIfCilckOutside);
        }
    }, [isActive])
    useEffect(() => {
        if (isActive === false) {
            cardContRef.current.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [isActive])
    const readMoreBtn = () => {
        setIsActive(!isActive)
        setOverFlowTextBox(!isActive ? { overflowY: 'auto' } : {
            display: '-webkit-box',
            WebkitLineClamp: '4',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        });
    }
    return (
        <>
            <Paper
                className='services-card1'
                ref={cardRef}
                sx={{
                    width: { xxs: '300px', sm: '300px' },
                    height: { xxs: '330px', md: '320px' },
                    backgroundColor: 'mypresetcolor.foregroundColor',
                    border: '2px solid',
                    borderColor: 'mypresetcolor.highlightColor',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '1px 1px 5px rgba(0,0,0,0.2), 2px 2px 10px rgba(0,0,0,0.2), 3px 3px 25px rgba(0,0,0,0.2)' ,
                    '@media(max-width: 350px)': {
                        width: 'auto',
                    },
                    '&:hover': {
                        cursor: 'pointer',
                    },
                    '& button:hover': {
                        bgcolor: 'mypresetcolor.highlightColor'
                    },
                    '& .card-media': {
                        transform: 'translateY(0px)',
                        transition: 'all 0.5s ease-in'
                    },
                    '& .card-content': {
                        transform: 'translateY(0px)',
                        transition: 'all 0.5s ease-in'
                    },
                    '& .card-media-active': {
                        transform: 'translateY(-150px)',
                        transition: 'all 0.5s ease-in',
                    },
                    '& .card-content-active': {
                        transform: 'translateY(-150px)',
                        transition: 'all 0.5s ease-in',
                    }
                }}
            >
                <Box sx={{ padding: '15px 15px 5px 15px', }}>
                    <Box className={`card-media ${isActive ? 'card-media-active' : null}`} display={'flex'} justifyContent={'center'}>
                        <Box className='upDownAnimation' component={'img'} src={cardImg} width={150} />
                    </Box>
                    <Box className={`card-content ${isActive ? 'card-content-active' : null}`} >
                        <Typography className='card-heading' variant='h5' fontWeight={'bold'} textAlign={'center'} color={'mypresetcolor.highlightColor'} pb={0.8}>{cardHeading}</Typography>
                        <Box
                            ref={cardContRef}
                            sx={{
                                height: isActive ? { xxs: '235px', md: '225px' } : 'auto',
                                mb: 0.5,
                                ...overflowTextBox,
                                transition: 'all 0.3s ease-in',
                                '&::-webkit-scrollbar': {
                                    width: '3px'
                                },
                                '&::-webkit-scrollbar-track': {
                                    backgroundColor: 'grey',
                                    borderRadius: '5px',
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: 'mypresetcolor.highlightColor',
                                    borderRadius: '5px'
                                }
                            }}>
                            <Box display={!isActive && ('none')} sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1', opacity: '0.2' }} >
                                <Box className='upDownAnimation' component={'img'} src={cardImg} width={150} />
                            </Box>
                            <Typography variant='body2' textAlign={'center'}>{cardPara}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Button
                    variant='contained'
                    size='small'
                    fullWidth
                    endIcon={isActive ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                    sx={{ borderRadius: '0px 0px 5px 5px', fontWeight: '600', position: 'absolute', bottom: '0px' }}
                    onClick={readMoreBtn}
                >Read {isActive ? 'Less' : 'More'}</Button>
            </Paper>
        </>
    )
}

export default ServicesCard1;