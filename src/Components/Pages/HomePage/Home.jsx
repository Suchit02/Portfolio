import React from 'react';
import { Box, Button, Paper, IconButton, Stack, Typography, Container, useTheme } from '@mui/material';
import { CloudDownload, GitHub, LinkedIn, Facebook, Instagram } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import Subject from '../../../Image/Subject.png';
import BtnHoverFramer from '../../GlobalComponents/AnimatedCompo/BtnHoverFramer';
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';
import TranslateXFramer from '../../GlobalComponents/AnimatedCompo/TranslateXFramer';

const Home = () => {
    const theme = useTheme();
    const socialMedia = [
        { icon: LinkedIn, link: 'https://www.linkedin.com/in/suchit-mishra-3a788b259' },
        { icon: GitHub, link: 'https://github.com/Suchit02' },
        { icon: Facebook, link: 'https://www.facebook.com/suchitmishra' },
        { icon: Instagram, link: 'https://www.instagram.com/satya.ravan.28/' }
    ];

    const downloadCV = () => {
        let link = document.createElement('a');
        link.href = '/SAM CV.pdf';
        link.download = 'Suchit';
        link.target = '_blank'
        link.click();
    };
    return (
        <>
            <Container
                id={'home'}
                data-section
                sx={{
                    minHeight: 'calc(100vh - 56px )',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    // overflow: 'hidden',
                    px: { xxs: '12px', lg: 0 },
                    py: 7,
                }}
                disableGutters
            >
                {/* <Box className='home-background-design'>
                    <Paper
                        sx={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            position: 'absolute',
                            left: '-15%',
                            top: '-5%',
                            zIndex: '-5',
                            transform: 'rotate(45deg)',
                            boxShadow: `0px 0px 20px 0px , 0px 0px 50px 0px, 0px 0px 75px 0px`,
                            color: 'mypresetcolor.highlightColor',
                            opacity: '0.8'
                        }}
                    />
                    <Paper
                        sx={{
                            width: '300px',
                            height: '300px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            position: 'absolute',
                            left: '-13%',
                            bottom: '-20%',
                            zIndex: '-5',
                            transform: 'rotate(55deg)',
                            boxShadow: `0px 0px 20px 0px , 0px 0px 50px 0px, 0px 0px 75px 0px`,
                            color: 'mypresetcolor.highlightColor',
                            opacity: '0.8'
                        }}
                    />
                    <Paper
                        sx={{
                            width: '500px',
                            height: '500px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            position: 'absolute',
                            right: '-20%',
                            top: '-5%',
                            zIndex: '-5',
                            transform: 'rotate(45deg)',
                            boxShadow: `0px 0px 20px 0px , 0px 0px 50px 0px, 0px 0px 100px 0px`,
                            color: 'primary.main',
                            opacity: '0.8'
                        }}
                    />
                </Box> */}
                <Box height={'100%'} display={'flex'} flexDirection={{ xxs: 'column-reverse', sm: 'row' }} justifyContent={'center'} alignItems={'center'}>
                    {/* Content */}
                    <Box mt={{ xxs: 5, md: 0 }}>
                        <TextEffectFramer secVal={0.5}><Typography sx={{ typography: { xxs: 'body2', xs: 'body1', sm: 'h6' }, }}>Hello, It's me</Typography></TextEffectFramer>
                        <TextEffectFramer secVal={1}><Typography sx={{ typography: { xxs: 'h5', xs: 'h4' }, '&.MuiTypography-root': { fontWeight: 'bold' } }}>Suchit Mishra</Typography></TextEffectFramer>
                        <TextEffectFramer secVal={1.5}>
                            <Typography sx={{ typography: { xxs: 'body1', xs: 'h5', sm: 'h4' } }}>And I'm
                                <Typography sx={{ typography: { xxs: 'body1', xs: 'h5', sm: 'h4' }, '& span': { fontWeight: 'bold' } }} component={'span'} color={'mypresetcolor.highlightColor'}>
                                    &nbsp;
                                    <TypeAnimation
                                        sequence={['React js Developer.', 3000, 'React Developer.', 3000, 'Front-end Developer.', 3000]}
                                        wrapper='span'
                                        speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                                        repeat={Infinity}
                                    />
                                </Typography>
                            </Typography>
                        </TextEffectFramer>
                        <TextEffectFramer secVal={2}><Typography sx={{ typography: { xxs: 'caption', xs: 'body2', sm: 'body1', md: 'h6' }, mt: 0.5 }}>Coding is my language, and the web is my canvas. Join me on a journey of innovation, where every pixel and line of code has a purpose.</Typography></TextEffectFramer>
                        <Stack display={'flex'} flexDirection={'row'} gap={2} my={2}>
                            {
                                socialMedia.map((item, ind) =>
                                    <TextEffectFramer key={ind} secVal={ind + 1}>
                                        <BtnHoverFramer>
                                            <a key={ind} href={item.link} target='_blank' rel='noopener noreferrer'>
                                                <IconButton size='small' sx={{ border: '2px solid', borderColor: 'mypresetcolor.highlightColor', '& .MuiSvgIcon-root': { color: 'mypresetcolor.highlightColor' }, '&:hover .MuiSvgIcon-root': { color: 'mypresetcolor.backgroundColor' }, '&:hover': { backgroundColor: 'mypresetcolor.highlightColor' } }}>
                                                    <item.icon />
                                                </IconButton>
                                            </a>
                                        </BtnHoverFramer>
                                    </TextEffectFramer>
                                )
                            }
                        </Stack>
                        {/* Buttons for CV Download and Hire me */}
                        <Stack display={'flex'} flexDirection={'row'} gap={{ xxs: 0.7, xs: 1, sm: 1.5 }}>
                            <TextEffectFramer secVal={2}><BtnHoverFramer><Button variant='outlined' sx={{ borderRadius: '30px', }} >Hire me</Button></BtnHoverFramer></TextEffectFramer>
                            <TextEffectFramer secVal={2.5}>
                                <BtnHoverFramer>
                                    <Button variant='outlined' onClick={() => downloadCV()}
                                        sx={{
                                            borderRadius: '30px',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            '&.MuiButtonBase-root .MuiSvgIcon-root': {
                                                fontSize: '2rem',
                                                position: 'absolute',
                                                transform: 'translateY(-100%)',
                                                transition: 'all 0.3s ease-in'
                                            },
                                            '&.MuiButtonBase-root .btn-text': {
                                                transform: 'translateY(0%)',
                                                transition: 'all 0.3s ease-in'
                                            },
                                            '&.MuiButtonBase-root:hover .btn-text': {
                                                transform: 'translateY(150%)',
                                                transition: 'all 0.3s ease-in'
                                            },
                                            '&.MuiButtonBase-root:hover .MuiSvgIcon-root': {
                                                transform: 'translateY(0%)',
                                                transition: 'all 0.3s ease-in'
                                            },
                                        }} ><Typography className='btn-text' component={'span'} sx={{
                                            fontSize: '0.875rem',
                                        }}>Download CV</Typography> <CloudDownload /></Button>
                                </BtnHoverFramer>
                            </TextEffectFramer>
                        </Stack>
                    </Box>
                    {/* Image */}
                    <TranslateXFramer>
                        <Stack
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative'
                            }}
                        >
                            <a href='#about'>
                                <Box
                                    className='upDownAnimation'
                                    component={'img'}
                                    src={Subject}
                                    alt='Subject'
                                    title='About SAM'
                                    width={{ xxs: '200px', md: '300px' }}
                                    sx={{
                                        borderBottom: '10px solid ',
                                        borderLeft: '5px solid ',
                                        borderColor: 'mypresetcolor.highlightColor',
                                        borderRadius: '200px 0px 200px 200px',
                                        ml: { xxs: 0, sm: 1 },
                                        mb: { xxs: 2, sm: 0 },
                                        boxShadow: `-1px 2px 1px ${theme.palette.mypresetcolor.backgroundColor}, -5px 5px 2px ${theme.palette.mypresetcolor.highlightColor}`
                                    }}
                                />
                            </a>
                            <Paper
                                sx={{
                                    width: { xxs: '200px', md: '300px' },
                                    height: '20px',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    bottom: { xxs: '0px', xs: '-5px', sm: '-15px' },
                                    left: '0px',
                                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
                                    zIndex: '-5',
                                    filter: 'blur(10px)'
                                }}
                            />
                        </Stack>
                    </TranslateXFramer>
                </Box>
            </Container>
        </>
    )
}

export default Home;