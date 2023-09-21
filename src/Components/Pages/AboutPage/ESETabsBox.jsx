import React, { useRef, useState } from 'react';
import { Divider, Paper, Tab, Tabs } from '@mui/material';
import { School, Computer, Psychology } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SkillSection from './SkillSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';

const ESETabsBox = () => {
    const [activeTab, setActiveTab] = useState(1);
    const swiperRef = useRef();
    const tabChangerFunc = (event, newValue) => {
        setActiveTab(newValue)
        swiperRef.current.slideTo(newValue)
    }

    return (
        <>
            <Paper className='tabs-container'
                sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)': 'rgba(0,0,0,0.1)',
                    p: 2,
                    pt: 0,
                    '& .swiper-slide': {
                        height: '500px',
                        overflowY: 'auto',
                        overflowX: 'hidden',
                        position: 'relative',
                        '&::-webkit-scrollbar': {
                            width: { xxs: 'none', sm: '5px' },
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: 'grey',
                            borderRadius: '5px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'mypresetcolor.highlightColor',
                            borderRadius: '5px'
                        }
                    }
                }}>
                <Tabs
                    value={activeTab}
                    variant='fullWidth'
                    onChange={tabChangerFunc}
                    centered
                    sx={{

                        '& .MuiTab-root': {
                            minHeight: '50px',
                            padding: '0 16px',
                            paddingTop: '5px',
                            paddingBottom: '5px'
                        }
                    }}
                >
                    <Tab label={'Education'} icon={<School />} />
                    <Tab label={'Skills'} icon={<Psychology />} />
                    <Tab label={'Experiences'} icon={<Computer />} />
                </Tabs>
                <Divider sx={{ borderWidth: '1.6px', position: 'relative', top: '-2.3px'}} />
                {/* Swipable Tab Box*/}
                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                    initialSlide={activeTab}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}

                >
                    {/* Education Box */}
                    <SwiperSlide >
                        <EducationSection />
                    </SwiperSlide>
                    {/* Skills Box */}
                    <SwiperSlide >
                        <SkillSection/>
                    </SwiperSlide>
                    <SwiperSlide >
                        <ExperienceSection />
                    </SwiperSlide>
                </Swiper>
            </Paper>
        </>
    )
}

export default ESETabsBox;