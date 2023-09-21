import React, { useEffect, useState } from 'react';
import { Box, Container, IconButton, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import 'swiper/css';
import AboutSection from './AboutSection';
import ESETabsBox from './ESETabsBox';
import { Language, SportsVolleyball, Computer, Smartphone, School, Psychology, Person } from '@mui/icons-material';
import SkillSection from './SkillSection';
import EducationSection from './EducationSection';
import ExperienceSection from './ExperienceSection';
import CardBox from './CardBox';
import HobbiesSection from './HobbiesSection';
import LanguageSection from './LanguageSection';
import Heading from '../../GlobalComponents/Heading';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import TranslateXFramer from '../../GlobalComponents/AnimatedCompo/TranslateXFramer';

const About = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [activeView, setActiveView] = useState('desktop');
    const viewHandler = (val) => {
        setActiveView(val);
    }
    useEffect(() => {
        if (matches) {
            setActiveView('desktop');
        } else {
            setActiveView('mobile');
        }
    }, [matches])
    return (
        <>
            <Container
                id={'about'}
                data-section
                disableGutters
                sx={{
                    minHeight: 'calc(100vh)',
                    py: 7
                }}
            >
                <Box border={'2px none yellow'} borderRadius={'15px'}>
                    <TranslateYFramer>
                        <Heading headingName={'About Me'} headingIcon={Person} />
                        <AboutSection />
                    </TranslateYFramer>
                    <Box className='tabView-desktop' display={activeView === 'desktop' ? 'block' : 'none'}>
                        <Grid container rowGap={1}>
                            <Grid xxs={12} md={12}><TranslateYFramer><ESETabsBox /></TranslateYFramer></Grid>
                            <Grid xxs={12} md={6} pr={{ xxs: 0, md: 0.5 }}><TranslateXFramer XVal='-100vw'><CardBox boxCompo={<HobbiesSection />} boxData={{ boxTitle: 'Hobbies', boxIcon: SportsVolleyball, boxHight: 'auto' }} /></TranslateXFramer></Grid>
                            <Grid xxs={12} md={6} pl={{ xxs: 0, md: 0.5 }}><TranslateXFramer XVal='100vw'><CardBox boxCompo={<LanguageSection />} boxData={{ boxTitle: 'Languages', boxIcon: Language, boxHight: 'auto' }} /></TranslateXFramer></Grid>
                        </Grid>
                    </Box>
                    <Box className='boxView-mobiles' display={activeView === 'mobile' ? 'block' : 'none'} >
                        <Grid container rowGap={1}>
                            <Grid xxs={12} md={7} position={'relative'} pr={{ xxs: 0, md: 0.5 }}>
                            <TranslateXFramer XVal='-100vw'> <CardBox boxCompo={<SkillSection />} boxData={{ boxTitle: 'Skills', boxIcon: Psychology, boxHight: '625px' }} /></TranslateXFramer>
                            </Grid>
                            <Grid xxs={12} md={5} pl={{ xxs: 0, md: 0.5 }}>
                            <TranslateXFramer XVal='100vw'><CardBox boxCompo={<EducationSection />} boxData={{ boxTitle: 'Education', boxIcon: School, boxHight: '625px' }} /></TranslateXFramer>
                            </Grid>
                            <Grid xxs={12} md={12}>
                                <TranslateYFramer><CardBox boxCompo={<ExperienceSection />} boxData={{ boxTitle: 'Experiences', boxIcon: Computer, boxHight: 'auto' }} /></TranslateYFramer>
                            </Grid>
                            <Grid xxs={12} md={6} pr={{ xxs: 0, md: 0.5 }}>
                            <TranslateXFramer XVal='-100vw'><CardBox boxCompo={<HobbiesSection />} boxData={{ boxTitle: 'Hobbies', boxIcon: SportsVolleyball, boxHight: 'auto' }} /></TranslateXFramer>
                            </Grid>
                            <Grid xxs={12} md={6} pl={{ xxs: 0, md: 0.5 }}>
                            <TranslateXFramer XVal='100vw'><CardBox boxCompo={<LanguageSection />} boxData={{ boxTitle: 'Languages', boxIcon: Language, boxHight: 'auto' }} /></TranslateXFramer>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box mt={2}
                    sx={{
                        '& .activeBtn': {
                            backgroundColor: 'green',
                            color: ''
                        }
                    }}>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={1}>
                        <Typography>View: </Typography>
                        <Tooltip title='Desktop'>
                            <IconButton className={`viewBtn ${activeView === 'desktop' ? 'activeBtn' : null}`} size='small' onClick={() => viewHandler('desktop')}>
                                <Computer fontSize='small' />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Mobile'>
                            <IconButton className={`viewBtn ${activeView === 'mobile' ? 'activeBtn' : null}`} size='small' onClick={() => viewHandler('mobile')}>
                                <Smartphone fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            </Container>
        </>
    )
}

export default About;