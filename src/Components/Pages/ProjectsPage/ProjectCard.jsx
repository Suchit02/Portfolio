import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules'
import CardImg from '../../../Image/projectpooe.png'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const ProjectCard = ({data}) => {
    const cardRef = useRef();
    const cardContRef = useRef();
    const [isActive, setIsActive] = useState(false);
    const [overflowTextBox, setOverFlowTextBox] = useState({
        display: '-webkit-box',
        WebkitLineClamp: '4',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    });
    const pagination = {
        clickable: true,
        dynamicBullets: true,
    }
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
    const moreDetailsBtn = () => {
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
                className='project-card'
                ref={cardRef}
                sx={{
                    width: {xxs: '300px', sm: '300px'},
                    height: { xxs: '315px', md: '335px' },
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
                        transition: 'transform 0.3s ease-in'
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
                        transform: { xxs: 'translateY(-120px)', sm: 'translateY(-140px)' },
                        transition: 'all 0.5s ease-in',
                    },
                    '& .card-content-active': {
                        transform: { xxs: 'translateY(-120px)', sm: 'translateY(-140px)' },
                        transition: 'all 0.5s ease-in',
                    }
                }}
            >
                <Box className={`card-media ${isActive ? 'card-media-active' : null}`}
                    sx={{
                        '& .swiper': {
                            cursor: 'pointer'
                        },
                        '& .swiper-pagination': {
                            bottom: '5px'
                        },
                        '& .swiper-pagination-bullet': {
                            backgroundColor: 'white',
                            opacity: '1'
                        },
                        '& .swiper-pagination-bullet-active': {
                            backgroundColor: 'mypresetcolor.highlightColor'
                        },
                        '& .swiper:hover::before': {
                            content: '""',
                            position: 'absolute',
                            left: '0px',
                            bottom: '0px',
                            width: '100%',
                            height: '50px',
                            backgroundImage: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
                            zIndex: '5'
                        }
                    }}>
                    <Swiper
                        className='project-card-swiper'
                        spaceBetween={5}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 10000,
                            disableOnInteraction: false
                        }}
                        pagination={pagination}
                        modules={[Autoplay, Pagination]}
                    >
                        {
                            [0, 1, 2].map((items, index) =>
                                <SwiperSlide key={index}>
                                    <Box
                                        className='card-img-box'
                                        sx={{
                                            height: { xxs: '120px', sm: '140px' },
                                            backgroundImage: `url('${CardImg}')`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: '50% 10%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'relative',
                                        }}>
                                        {/* <Typography variant='h4' fontWeight={'bold'} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px 20px', borderRadius: '5px' }}>MySelf</Typography> */}
                                    </Box>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </Box>
                <Box className={`card-content ${isActive ? 'card-content-active' : null}`} px={1} py={1} >
                    <Typography variant='h5' fontWeight={'bold'} textAlign={'center'} pb={0.8}>{data.title}</Typography>
                    <Box
                        ref={cardContRef}
                        sx={{
                            height: isActive ? { xxs: '235px', md: '250px' } : 'auto',
                            // border: '1px solid yellow',
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
                        <Typography variant='body2' textAlign={'center'} >{data.descriptions}</Typography>
                        <Box py={0.5} pr={0.5} display={'flex'} justifyContent={'flex-end'} gap={1}>
                            <Button variant='outlined' size='small'>Demo</Button>
                            <Button variant='contained' size='small'>GitHub</Button>
                        </Box>
                    </Box>
                    <Stack display={isActive ? 'none' : 'flex'} flexDirection={'row'} justifyContent={'flex-end'} gap={1} >
                        <Button variant='outlined' size='small'>Demo</Button>
                        <Button variant='contained' size='small'>GitHub</Button>
                    </Stack>
                </Box>
                <Button
                    variant='contained'
                    size='small'
                    fullWidth
                    endIcon={isActive ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
                    sx={{ borderRadius: '0px 0px 5px 5px', fontWeight: '600', position: 'absolute', bottom: '0px' }}
                    onClick={moreDetailsBtn}
                >{isActive ? 'Less' : 'More'} Details</Button>
            </Paper>
        </>
    )
}

export default ProjectCard;