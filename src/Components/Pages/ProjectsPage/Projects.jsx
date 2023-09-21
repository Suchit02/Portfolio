import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Divider, Pagination, Stack, Tab, Tabs, useMediaQuery } from '@mui/material';
import Heading from '../../GlobalComponents/Heading';
import { AccountTreeTwoTone } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData.json';
import { useTheme } from '@emotion/react';
import ScaleFramer from '../../GlobalComponents/AnimatedCompo/ScaleFramer';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';

const Projects = () => {
    const swiperRef = useRef();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [activeTab, setActiveTab] = useState(0);
    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [projectPerPage, setProjectPerPage] = useState(3);
    // Get Current Projects
    const indexOfLastPage = currentPage * projectPerPage;
    const indexOfFirstPage = indexOfLastPage - projectPerPage;
    const currentProjectPage = ProjectData.slice(indexOfFirstPage, indexOfLastPage);

    useEffect(() => {
        if (matches) {
            setProjectPerPage(6);
        } else {
            setProjectPerPage(3);
        }
    }, [matches])

    const tabChangerFunc = (event, newValue) => {
        setActiveTab(newValue)
        swiperRef.current.slideTo(newValue)
    }

    const paginationHandler = (event, value) => {
        setCurrentPage(value)
    }
    return (
        <>
            <Box
                id='projects'
                data-section
                sx={{
                    width: '100%',
                    minHeight: 'calc(100vh)',
                    py: 7
                }}
            >
                <Container disableGutters>
                    <TranslateYFramer><Heading headingName={'Projects'} headingIcon={AccountTreeTwoTone} /></TranslateYFramer>
                    <TranslateYFramer>
                        <Box id='project-data' className='tabBar-outerBox' sx={{ p: 2, pt: 1, border: '3px none skyblue', backgroundColor: 'rgba(0,0,0,0.0)', borderRadius: '10px', position: 'relative' }}>
                            <Tabs
                                className='tabBar'
                                value={activeTab}
                                onChange={tabChangerFunc}
                                // centered
                                // variant='fullWidth'
                                variant="scrollable"
                                scrollButtons="auto"
                                allowScrollButtonsMobile
                                sx={{
                                    minHeight: '35px',
                                    '& .MuiTab-root': {
                                        minHeight: '35px',
                                        padding: '0 16px',
                                        paddingTop: '5px',
                                        paddingBottom: '5px',
                                    },
                                    '& .MuiTabs-flexContainer': {
                                        justifyContent: { xxs: 'flex-start', sm: 'center' },
                                        alignItems: 'center'
                                    }
                                }}
                            >
                                <Tab label={'All'} />
                                <Tab label={'JavaScript'} />
                                <Tab label={'React'} />
                                <Tab label={'Python'} />
                            </Tabs>
                            <Divider sx={{ position: 'relative', bottom: '2px', borderBottomWidth: 'medium' }} />
                            <Box
                                className='swiper-tabBar-box'
                                sx={{
                                    '& .swiper': {
                                        // height: '800px',
                                        position: 'relative',
                                    }
                                }}
                            >
                                <Swiper
                                    className='swiper-tabBar'
                                    spaceBetween={5}
                                    slidesPerView={1}
                                    onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                                    initialSlide={activeTab}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}

                                >
                                    <SwiperSlide>
                                        <Box >
                                            <Stack display={'flex'} flexDirection={{ xxs: 'row', md: 'row' }} justifyContent={'center'} alignItems={'flex-start'} flexWrap={'wrap'} gap={2} py={3}>
                                                {
                                                    currentProjectPage.map((items, index) => <ScaleFramer key={index} durVal={index + 1 / 2}><ProjectCard data={items} /></ScaleFramer>)
                                                }
                                            </Stack>
                                            {/* Pagination */}
                                            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                <a href="#project-data">
                                                    <Pagination count={Math.ceil(ProjectData.length / projectPerPage)} color="primary" onChange={paginationHandler} />
                                                </a>
                                            </Box>
                                        </Box>
                                    </SwiperSlide>
                                    <SwiperSlide >JavaScipt</SwiperSlide>
                                    <SwiperSlide >React</SwiperSlide>
                                    <SwiperSlide >Python</SwiperSlide>
                                </Swiper>
                            </Box>
                        </Box>
                    </TranslateYFramer>
                </Container>
            </Box>
        </>
    )
}

export default Projects;