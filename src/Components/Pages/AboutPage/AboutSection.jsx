import React from 'react';
import { Box, Divider, Paper, Stack, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import MyDp from '../../../Image/MyDp.jpg';
import Banner01 from '../../../Image/BannerImg/Banner01.jpeg';
import Banner02 from '../../../Image/BannerImg/Banner02.jpg';
import Banner03 from '../../../Image/BannerImg/FullStackBanner.jpeg';
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';
import suchit from '../../../MyDoc/Suchit.pdf'

const AboutSection = () => {
    const theme = useTheme();
    const bannerImg = [Banner01, Banner02, Banner03]
    return (
        <>
            <Paper className='about-content-section'
                sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)': 'rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    mb: 1,
                    position: 'relative',
                    overflow: 'hidden'
                }} >
                <Box className='media-seciton'
                    sx={{
                        width: '100%',
                        position: 'relative',
                        '& .swiper': {
                            borderRadius: '10px'
                        }
                    }}>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={1}
                        loop
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        modules={[Autoplay]}
                        simulateTouch={false}
                    >
                        {
                            bannerImg.map((bannImg, index) =>
                                <SwiperSlide key={index}>
                                    <Box sx={{
                                        // width: '850px',
                                        height: { xxs: '200px', sm: '300px', md: '400px' },
                                        backgroundImage: `url('${bannImg}')`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: { xxs: 'top', md: 'center' },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }} />
                                </SwiperSlide>
                            )
                        }
                        <Box sx={{ height: '100%', width: '100%', bgcolor: 'rgba(0, 0, 0, 0.0)', position: 'absolute', top: '0', left: '0px', zIndex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} sx={{ display: 'inline-block', backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(3px)', padding: '10px 20px', borderRadius: '5px' }}>About <span style={{ color: theme.palette.mypresetcolor.highlightColor }}>Me</span><Divider /></Typography>
                        </Box>
                    </Swiper>

                    {/* DP Circle */}
                    <Box className='circle-box' position={'absolute'} bottom={{ xxs: '-65px', md: '-75px' }} right={'-10px'} zIndex={20} >
                        <Box className='outerImg-box' position={'relative'}
                            sx={{
                                width: { xxs: '120px', xs: '145px', sm: '145px', md: '170px' },
                                height: { xxs: '120px', xs: '145px', sm: '145px', md: '170px' },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Box
                                className='rotateAnimation'
                                sx={{
                                    width: { xxs: '120px', xs: '145px', sm: '145px', md: '170px' },
                                    height: { xxs: '120px', xs: '145px', sm: '145px', md: '170px' },
                                    backgroundColor: 'transparent',
                                    border: '5px solid',
                                    borderColor: `${theme.palette.mypresetcolor.highlightColor} transparent `,
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    left: '0',
                                    top: '0',
                                    transform: 'rotate(-50deg)'
                                }}
                            />

                            <Box className='circle-img-box'
                                sx={{
                                    width: { xxs: '100px', xs: '125px', sm: '125px', md: '150px' },
                                    height: { xxs: '100px', xs: '125px', sm: '125px', md: '150px' },
                                    borderRadius: '50%',
                                    border: '5px solid',
                                    borderColor: 'mypresetcolor.highlightColor',
                                    backgroundColor: 'mypresetcolor.backgroundColor',
                                    backgroundImage: `url('${MyDp}')`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: '50% 10%',
                                    position: 'absolute',
                                }} />
                        </Box>
                    </Box>

                    <Box className='custom-divider' width={'100%'} zIndex={1} position={'absolute'} bottom={0}>
                        <Box
                            sx={{
                                width: '95%',
                                height: '5px',
                                borderRadius: '5px',
                                backgroundColor: 'mypresetcolor.highlightColor',
                                position: 'relative',
                                ml: 0.5
                            }}
                        >
                            <Box className='rotateAnimation'
                                sx={{
                                    width: '25px',
                                    height: '25px',
                                    backgroundColor: 'mypresetcolor.highlightColor',
                                    borderRadius: '50%',
                                    borderTop: `3px solid white`,
                                    borderBottom: `3px solid white`,
                                    borderLeft: `3px solid ${theme.palette.mypresetcolor.backgroundColor}`,
                                    borderRight: `3px solid ${theme.palette.mypresetcolor.backgroundColor}`,
                                    position: 'absolute',
                                    top: '-10px',
                                    left: '0px'
                                }} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    border: '3px none',
                    borderColor: 'mypresetcolor.highlightColor',
                    borderRadius: '0px 0px 10px 10px',
                    padding: '16px',
                    paddingTop: '35px',
                }}>
                    <Stack mb={2}sx={{'& .MuiTypography-root': {lineHeight: 1.1}}}>
                        <Typography variant='h5' fontWeight={'bold'} ><TextEffectFramer>Suchit Mishra</TextEffectFramer></Typography>
                        <Typography variant='caption' color={'mypresetcolor.highlightColor'} fontWeight={'bold'} ><TextEffectFramer>(Front-end Developer)</TextEffectFramer></Typography>
                        <TextEffectFramer><Typography variant='caption' component={'q'}  mt={1}>I'm not a great programmer; I'm just a good programmer with great habits.</Typography></TextEffectFramer>
                    </Stack>
                    <TextEffectFramer><Typography sx={{ typography: { xxs: 'caption', xs: 'body2', sm: 'body1' } }} textAlign={'justify'}>Hey there! I'm Suchit, a passionate Front-end Developer with a love for crafting digital solutions. With a knack for problem-solving and a creative mindset, I thrive on turning ideas into seamless, user-friendly applications. I relish challenges and embrace the ever-evolving tech landscape. Whether it's front-end finesse or back-end wizardry, I'm your go-to developer for bringing innovation to life. Let's collaborate and build something extraordinary together!
                    Feel free to personalize and expand upon this introduction to reflect your unique skills and personality.</Typography></TextEffectFramer>
                </Box>
            </Paper>
        </>
    )
}

export default AboutSection;