import React from 'react';
import { Box, CircularProgress, Paper, Stack, Typography, useTheme } from '@mui/material';

const TechSkillCard = ({ data }) => {
    const theme = useTheme();
    const { skillName, skillLevel, skillPercen } = data;
    return (
        <>
            <Paper className='tSkill-Card'
                sx={{
                    '&.MuiPaper-root': {
                        backgroundColor: 'mypresetcolor.foregroundColor',
                        // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.1s ease-in',
                    },
                    '& .upper-circle': {
                        filter: `drop-shadow(1px 1px 3px ${theme.palette.mypresetcolor.highlightColor})`,
                    }, 
                    // '&:hover': {
                    //     backgroundColor: 'mypresetcolor.highlightColor',
                    //     color: 'mypresetcolor.backgroundColor',
                    //     boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
                    //     transition: 'all 0.3s ease-in'
                    // },
                    // '&:hover .lower-circle': {
                    //     color: 'gray',
                    // },
                    // '&:hover .upper-circle': {
                    //     color: 'mypresetcolor.backgroundColor',
                    //     filter: `drop-shadow(1px 1px 2px ${theme.palette.mypresetcolor.backgroundColor})`,
                    // },
                    // '&:hover .card-icon': {
                    //     color: 'mypresetcolor.backgroundColor',
                    // }
                }}
            >
                {/* Circle Status Bar */}
                <Stack display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1} p={1}>
                    <Box component={'span'} sx={{ width: '65px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ color: 'mypresetcolor.highlightColor', fontSize: '2rem', zIndex: '3', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <data.skillIcon className='card-icon'/>
                        </Box>
                        <CircularProgress
                            className='lower-circle'
                            variant="determinate"
                            thickness={3}
                            size={65}
                            value={100}
                            sx={{
                                color: (theme) =>
                                    theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                            }}
                        />
                        <CircularProgress
                            className='upper-circle'
                            variant="determinate"
                            size={65}
                            thickness={3}
                            value={skillPercen}
                            sx={{
                                color: (theme) => (theme.palette.mode === 'light' ? 'mypresetcolor.highlightColor' : 'mypresetcolor.highlightColor'),
                                position: 'absolute',
                                left: 0,
                            }}
                        />
                    </Box>
                    <Stack>
                        <Typography variant='h6' fontWeight={600} textAlign={'center'}>{skillName}</Typography>
                        <Typography variant='caption' color={'gray'} textAlign={'center'}>{skillLevel}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </>
    )
}

export default TechSkillCard;