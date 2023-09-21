import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material';
import Heading from '../../GlobalComponents/Heading';
import { DesignServices } from '@mui/icons-material';
// import ServicesCard from './ServicesCard';
import WebLogoImg from '../../../Image/web-development.png';
import AppLogoImg from '../../../Image/app-development.png';
import GraphicLogoImg from '../../../Image/graphic-design1.png';
import ServicesCard2 from './ServicesCard2';
import ServicesCard1 from './ServicesCard1';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';
import TranslateXFramer from '../../GlobalComponents/AnimatedCompo/TranslateXFramer';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules'
// import 'swiper/css';



const Services = () => {
    const serviceCardDetails = [
        {
            cardHeading: 'Web Development',
            cardImg: WebLogoImg,
            cardPara: 'Sam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorem delectus, libero maiores exercitationem provident amet dicta at vitae illo quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorem delectus, libero maiores exercitationem provident amet dicta at vitae illo quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorem delectus. Voluptates dolorem delectus, libero maiores exercitationem provident amet dicta at vitae illo quod. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorem delectus.'
        },
        {
            cardHeading: 'App Development',
            cardImg: AppLogoImg,
            cardPara: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorem delectus, libero maiores exercitationem provident amet dicta at vitae illo quod?'
        },
        {
            cardHeading: 'Graphic Design',
            cardImg: GraphicLogoImg,
            cardPara: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates dolorem delectus, libero maiores exercitationem provident amet dicta at vitae illo quod?'
        },

    ];

    // const swiperRef = useRef();
    // useEffect(() => {
    //     const checkIfCilckOutside = (e) => {
    //         if (swiperRef.current && !swiperRef.current.contains(e.target)) {
    //             swiperRef?.current.swiper.autoplay.start();
    //         }
    //     }
    //     document.addEventListener('mousedown', checkIfCilckOutside);
    //     return () => {
    //         document.addEventListener('mousedown', checkIfCilckOutside);
    //     }
    // })
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className,) {
    //         return '<span class="' + className + '">' + (serviceCardDetails[index].heading.slice(0, 3)) + '</span>';
    //     },
    // };

    return (
        <>
            <Container
                id='services'
                data-section
                disableGutters
                sx={{
                    width: '100%',
                    minHeight: 'calc(100vh)',
                    py: 7,
                    px: { xxs: 1.5, lg: 0 }
                }}
            >
                <TranslateYFramer><Heading headingName={'Services'} headingIcon={DesignServices} /></TranslateYFramer>
                <Box pt={2}>
                    <TextEffectFramer><Typography textAlign={''}>I specialize in providing end-to-end web development services that encompass design, functionality, and performance. From crafting eye-catching user interfaces to building robust back-end systems, I create seamless and responsive web experiences. My focus on optimization ensures your web assets are not only visually appealing but also fast and secure. Whether you need a new website, web application, or improvements to an existing one, I'm here to deliver tailored solutions that elevate your online presence. Let's collaborate to bring your digital vision to life.</Typography></TextEffectFramer>
                </Box>
                <Stack display={{ xxs: 'flex', sm: 'none' }} flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={2} mt={5}>
                    {serviceCardDetails.map((items, index) => <TranslateYFramer key={index}><ServicesCard1 data={items} /></TranslateYFramer>)}
                </Stack>
                {/* <Box
                    sx={{
                        '& .swiper': {
                            py: 5,
                        },
                        '& .swiper-slide': {
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        '& .swiper-pagination': {
                            bottom: '5px',
                            display: { xxs: 'flex', md: 'none' },
                            justifyContent: 'center'
                        },
                        '& .swiper-pagination-bullet': {
                            width: '25px',
                            height: '25px',
                            padding: '5px',
                            borderRadius: '50%',
                            fontSize: '0.55rem',
                            backgroundColor: 'gray',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            opacity: '1'
                        },
                        '& .swiper-pagination-bullet-active': {
                            fontWeight: '600',
                            color: 'mypresetcolor.backgroundColor',
                            backgroundColor: 'mypresetcolor.highlightColor',
                        }
                    }}>
                    <Swiper
                        ref={swiperRef}
                        onClick={(Swiper) => Swiper.autoplay.stop()}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 5
                            },
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            900: {
                                slidesPerView: 3,
                                spaceBetween: 5
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={pagination}
                        modules={[Autoplay, Pagination]}
                    >
                        {
                            serviceCardDetails.map((items, index) =>
                                <SwiperSlide key={index}>
                                    <ServicesCard key={index} cardHeading={items.heading} cardtText1={items.paragraph1} cardText2={items.paragraph2} cardImg={items.image} />
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </Box> */}
                {/* <ServicesCard1 /> */}
                <br />
                <TranslateYFramer>
                    <Stack display={{ xxs: 'none', sm: 'flex' }} gap={3}>
                        {
                            serviceCardDetails.map((item, index) => <TranslateXFramer key={index} XVal={index % 2 === 0 ? '100vw' : '-100vw'} durVal={1.5}><ServicesCard2 data={item} direction={index % 2 === 0 ? 'right' : 'left'} /></TranslateXFramer>)
                        }
                    </Stack>
                </TranslateYFramer>
            </Container>
        </>
    )
}

export default Services;