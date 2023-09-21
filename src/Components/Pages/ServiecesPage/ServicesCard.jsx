import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Typography, useTheme } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
// import WebImg from '../../../Image/web-development-company-1-2022.jpg';

const ServicesCard = ({data}) => {
    const{ cardHeading, cardPara, cardImg } = data;
    const theme = useTheme()
    const [isActive, setIsActive] = useState(false);
    const ref = useRef();
    const cardContRef = useRef();
    useEffect(() => {
        const checkIfCilckOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsActive(false);
            }
        }
        document.addEventListener('mousedown', checkIfCilckOutside);
        return () => {
            document.addEventListener('mousedown', checkIfCilckOutside);
        }
    }, [isActive])
    // for scroll to top
    useEffect(() => {
        if (isActive === false) {
            cardContRef.current.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [isActive])
    const readMoreBtn = () => {
        setIsActive(!isActive)
    }
    return (
        <>
            <Box
                className='service-card'
                ref={ref}
                sx={{
                    width: '300px',
                    // height: '350px',
                    border: '3px solid red',
                    borderColor: 'mypresetcolor.highlightColor',
                    borderRadius: '15px',
                    backgroundColor: 'mypresetcolor.foregroundColor',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                        boxShadow: `1px 1px 10px ${theme.palette.mypresetcolor.highlightColor}, 1px 1px 30px ${theme.palette.mypresetcolor.highlightColor}`,
                        transition: 'boxshadow 0.3s ease-in'
                    },
                    '& .cardImg': {
                        transform: 'translateY(0px)',
                        transition: 'transform 0.5s ease-in'
                    },
                    '& .activeImgBox': {
                        transform: 'translateY(-300px)',
                        transition: 'transform 0.5s ease-in'
                    },
                    '& .cardContent': {
                        transform: 'translateY(0px)',
                        transition: 'transform 0.5s ease-in'
                    },
                    '& .activeContentBox': {
                        transform: 'translateY(-150px)',
                        transition: 'transform 0.5s ease-in'
                    }
                }}
            >
                <Box sx={{
                    height: '269px',
                    padding: '15px 15px 5px 15px',
                    borderColor: 'mypresetcolor.highlightColor',
                    borderBottom: 'none',
                    borderRadius: '15px 15px 0 0',
                }}>
                    <Box className={`cardImg ${isActive ? 'activeImgBox' : null}`} display={'flex'} justifyContent={'center'}>
                        <Box className='upDownAnimation' component={'img'} src={cardImg} width={150} />
                    </Box>
                    <Box className={`cardContent ${isActive ? 'activeContentBox' : null}`}>
                        <Typography variant='h5' mb={1} fontWeight={'600'} textAlign={'center'} color={'mypresetcolor.highlightColor'} sx={{ filter: 'drop-shadow(-5px 5px 2px rgba(0, 0, 0, 0.5))', textDecoration: isActive ? 'underline' : 'none', textUnderlineOffset: '5px' }}>{cardHeading}</Typography>
                        <Box
                            ref={cardContRef}
                            sx={{
                                width: '100%',
                                height: '225px',
                                // border: '1px solid skyblue',
                                pr: 1,
                                overflowY: isActive ? 'auto' : 'hidden',
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
                            }}
                        >
                            <Box display={!isActive &&('none')} sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: '-1', opacity: '0.2' }} >
                                <Box className='upDownAnimation' component={'img'} src={cardImg} width={150} />
                            </Box>
                            <Typography variant='body2' textAlign={'center'}>{cardPara}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Button variant='contained' size='small' fullWidth sx={{ borderRadius: '0px 0px 10px 10px', fontWeight: '600', boxShadow: 'none', }} endIcon={isActive ? <KeyboardArrowDown /> : <KeyboardArrowUp />} onClick={readMoreBtn}>Read {isActive ? 'less' : 'more'}</Button>
            </Box>
        </>
    )
}

export default ServicesCard;