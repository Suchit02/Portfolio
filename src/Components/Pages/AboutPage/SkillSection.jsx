import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ConnectWithoutContact, AccessTime, Diversity3, PsychologyAlt, Groups } from '@mui/icons-material';
import TechSkillCard from './Cards/TechSkillCard';
import { FaPython } from 'react-icons/fa';
import { SiAdobephotoshop, SiCplusplus, SiMui, SiMysql, SiTailwindcss } from 'react-icons/si';
import { FaBootstrap, FaC, FaCss3, FaHtml5, FaReact } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io';
import LinearProgessCard from './Cards/LinearProgressCard';
import ProgressBulltesBox from './ProgressBulltesBox';
import ProfessSkillCard from './Cards/ProfessSkillCard';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';
import TranslateXFramer from '../../GlobalComponents/AnimatedCompo/TranslateXFramer';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';

const SkillSection = () => {
    const [selectedProgressBar, setSelectedProgressBar] = useState('circle');

    // data
    const profesSkillsData = [
        {
            skillName: 'Communication',
            skillIcon: ConnectWithoutContact,
            skillLevel: 'Procifient',
            skillPercen: 55
        },
        {
            skillName: 'Team Work',
            skillIcon: Diversity3,
            skillLevel: 'Procifient',
            skillPercen: 55
        },
        {
            skillName: 'Time Management',
            skillIcon: AccessTime,
            skillLevel: 'Procifient',
            skillPercen: 55
        },
        {
            skillName: 'Problem Solving',
            skillIcon: PsychologyAlt,
            skillLevel: 'Procifient',
            skillPercen: 55
        },
        {
            skillName: 'Leadership',
            skillIcon: Groups,
            skillLevel: 'Procifient',
            skillPercen: 55
        }
    ];
    const techSkillsData = [
        {
            skillName: 'C Lang',
            skillIcon: FaC,
            skillLevel: 'Procifient',
            skillPercen: 55
        },
        {
            skillName: 'C++ Lang',
            skillIcon: SiCplusplus,
            skillLevel: 'Procifient',
            skillPercen: 50
        },
        {
            skillName: 'Python',
            skillIcon: FaPython,
            skillLevel: 'Procifient',
            skillPercen: 85
        },
        {
            skillName: 'HTML',
            skillIcon: FaHtml5,
            skillLevel: 'Procifient',
            skillPercen: 85
        },
        {
            skillName: 'CSS',
            skillIcon: FaCss3,
            skillLevel: 'Procifient',
            skillPercen: 75
        },
        {
            skillName: 'JavaScript',
            skillIcon: IoLogoJavascript,
            skillLevel: 'Procifient',
            skillPercen: 65
        },
        {
            skillName: 'Bootstrap',
            skillIcon: FaBootstrap,
            skillLevel: 'Procifient',
            skillPercen: 50
        },
        {
            skillName: 'Tailwind',
            skillIcon: SiTailwindcss,
            skillLevel: 'Procifient',
            skillPercen: 50
        },
        {
            skillName: 'Material-UI',
            skillIcon: SiMui,
            skillLevel: 'Procifient',
            skillPercen: 75
        },
        {
            skillName: 'React',
            skillIcon: FaReact,
            skillLevel: 'Procifient',
            skillPercen: 75
        },
        {
            skillName: 'My SQL',
            skillIcon: SiMysql,
            skillLevel: 'Procifient',
            skillPercen: 65
        },
        {
            skillName: 'Photoshop',
            skillIcon: SiAdobephotoshop,
            skillLevel: 'Procifient',
            skillPercen: 85
        },
    ];

    // Progress Bar Select Handler
    const progressCheckerFunc = (val) => {
        setSelectedProgressBar(val);
    }
    return (
        <>
            <Box id='skills-section' className='education-section' mb={2}>
                <Typography variant='caption' component={'div'} textAlign={'center'} color={'gray'} >Professional & Technical</Typography>

                {/* Circle Progess Bar */}
                <Box className='circle-progress-bar' sx={{ display: selectedProgressBar === 'linear' && ('none') }}>
                    <Stack className='professional-skills-box' mb={1}>
                        <Typography variant='body1' fontWeight={'bold'}>Professional Skills :</Typography>

                        <Stack mt={1} sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: 1 }}>
                            {
                                profesSkillsData.map((items, index) => <SkillCard1Framer key={index} dVal={index+1/2}><ProfessSkillCard data={items} /></SkillCard1Framer>)
                            }
                        </Stack>
                    </Stack>
                    <Stack className='technical-skills-box' mt={2} overflow={'hidden'}>
                        <Typography variant='body1' fontWeight={'bold'}>Technical Skills :</Typography>
                        <Stack sx={{ mt: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(175px, 1fr))', gap: 1 }}>
                            {
                                techSkillsData.map((item, index) => <TranslateXFramer key={index} dVal={index+1}><TechSkillCard data={item} icon={item.skillIcon} /></TranslateXFramer>)
                            }
                        </Stack>
                    </Stack>
                </Box>
                {/* Linear Progress Bar */}
                <Box className='linear-progress-bar' sx={{ display: selectedProgressBar === 'circle' && ('none') }}>
                    <TranslateYFramer>
                    <Stack className='professional-skills-box' mb={1} backgroundColor={'mypresetcolor.foregroundColor'} borderRadius={'10px'} p={2}>
                        <Typography variant='body1' fontWeight={'bold'}>Professional Skills :</Typography>
                        <Stack mt={1} sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
                            {profesSkillsData.map((item, index) => <LinearProgessCard key={index} data={item} />)}
                        </Stack>
                    </Stack>
                    </TranslateYFramer>
                    <TranslateYFramer>
                    <Stack className='technical-skills-box' mt={1} backgroundColor={'mypresetcolor.foregroundColor'} borderRadius={'10px'} p={2}>
                        <Typography variant='body1' fontWeight={'bold'}>Technical Skills :</Typography>
                        <Stack sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
                            {
                                techSkillsData.map((item, index) => <LinearProgessCard key={index} data={item} />)
                            }
                        </Stack>
                    </Stack>
                    </TranslateYFramer>
                </Box>
            </Box>
            <ProgressBulltesBox progressCheckerFunc={progressCheckerFunc} />
        </>
    )
}

export default SkillSection;