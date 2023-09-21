import React, { useContext, useState } from 'react';
import { Box, Button, Divider, FormControlLabel, IconButton, Stack, SwipeableDrawer, Switch, Tooltip, Typography, styled, useTheme } from '@mui/material';
import { CloseTwoTone } from '@mui/icons-material';
import ThemeColors from './ThemeColors.json';
import DarkThemBox from './Card/DarkThemBox';
import LightThemeBox from './Card/LightThemeBox';
import { ThemeModeContext } from '../ThemeModeProvider';
import PreviewBox from '../../Components/LayoutWrapper/HeaderSiblings/PreviewBox';
import BoncyTransXFramer from '../../Components/GlobalComponents/AnimatedCompo/BoncyTansXFramer';
import BtnHoverFramer from '../../Components/GlobalComponents/AnimatedCompo/BtnHoverFramer';

// Swich Styling
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

const mode = localStorage.getItem('mode') || 'dark';
const defaultDarkTheme = JSON.parse(localStorage.getItem('darkTheme')) || {
    themeName: 'Default Dark',
    themeColors: {
        backgroundColor: '#151922',
        foregroundColor: '#1C1F24',
        highlightColor: '#79E0EE',
        fontColor: '#FFFFFF',
    }
};
const defaultLightTheme = JSON.parse(localStorage.getItem('lightTheme')) || {
    themeName: 'Default Light',
    themeColors: {
        backgroundColor: '#F3FDE8',
        foregroundColor: '#96B6C5',
        highlightColor: '#79E0EE',
        fontColor: '#27374D',
    }
};

const SettingsDrawer = ({ isdrawerOpen, setIsDrawerOpen }) => {
    const theme = useTheme();
    const consumer = useContext(ThemeModeContext);
    const { toggleThemeMode } = consumer.colorMode;
    const { themeChangerFunc } = consumer.presetFun;
    const checkmode = mode === 'dark' ? true : false
    const [isDarkModeActive, setIsDarkModeActive] = useState(checkmode);     // For Toggle Button
    const [selectUserDarkTheme, setSelectUserDarkTheme] = useState({ ...defaultDarkTheme });
    const [selectUserLightTheme, setSelectUserLightTheme] = useState({ ...defaultLightTheme });

    const getUserDarkTheme = (val) => {
        setSelectUserDarkTheme(val)
    }
    const getUserLightTheme = (val) => {
        setSelectUserLightTheme(val)
    }

    // for Setting Drawer toggle Open or Close
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    // Mode Changer Function
    const switchHandlerFunc = (e) => {
        setIsDarkModeActive(e.target.checked)
        toggleThemeMode();
        if (isDarkModeActive === false) {
            themeChangerFunc({ ...selectUserDarkTheme.themeColors })
        } else {
            console.log('lightThemeColors')
            themeChangerFunc({ ...selectUserLightTheme.themeColors })
        }
    }

    // Set or Reset Theme
    const themeSetBtn = () => {
        if (theme.palette.mode === 'dark') {
            localStorage.setItem('darkTheme', JSON.stringify(selectUserDarkTheme));
            setIsDrawerOpen(false);
        } else {
            localStorage.setItem('lightTheme', JSON.stringify(selectUserLightTheme));
            setIsDrawerOpen(false);
        }

    }
    const themeResetBtn = () => {
        if (isDarkModeActive === false) toggleThemeMode();
        themeChangerFunc({
            backgroundColor: '#151922',
            foregroundColor: '#1C1F24',
            highlightColor: '#79E0EE',
            fontColor: '#FFFFFF',
        });
        localStorage.setItem('darkTheme', JSON.stringify({
            themeName: 'Default Dark',
            themeColors: {
                backgroundColor: '#151922',
                foregroundColor: '#1C1F24',
                highlightColor: '#79E0EE',
                fontColor: '#FFFFFF',
            }
        }));
        localStorage.setItem('lightTheme', JSON.stringify({
            themeName: 'Default Light',
            themeColors: {
                backgroundColor: '#F3FDE8',
                foregroundColor: '#96B6C5',
                highlightColor: '#79E0EE',
                fontColor: '#27374D',
            }
        }));
        setIsDrawerOpen(false);
        window.location.reload(false);
        // console.log('reset')
    };
    return (
        <>
            <SwipeableDrawer
                anchor='right'
                open={isdrawerOpen}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
                sx={{
                    '& > .MuiPaper-root': {
                        backgroundColor: 'mypresetcolor.backgroundColor'
                    },
                    '& .MuiDrawer-paper': {
                        width: { xxs: '225px', xs: '250px', sm: '275px', md: '300px' },
                        overflow: 'hidden'
                    },
                    '& .MuiBackdrop-root': {
                        backdropFilter: 'blur(5px)'
                    }
                }}
            >
                <Box className='drawer-container'>
                    <Box component={'header'} className='drawer-header-box'>
                        <Stack px={1} py={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <BoncyTransXFramer XVal='100vw' durVal={1}><Typography variant='h5' fontWeight={'bold'} color={'mypresetcolor.highlightColor'}>Settings</Typography></BoncyTransXFramer>
                            <BoncyTransXFramer XVal='100vw' durVal={1}>
                                <BtnHoverFramer>
                                    <Tooltip title={'Close'} >
                                        <IconButton onClick={() => setIsDrawerOpen(false)}>
                                            <CloseTwoTone fontSize='small' />
                                        </IconButton>
                                    </Tooltip>
                                </BtnHoverFramer>
                            </BoncyTransXFramer>
                        </Stack>
                        <Divider />
                    </Box>
                    <Stack className='toggleBtn-box' py={1} pl={1} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='h6' color={'mypresetcolor.fontColor'}>{isDarkModeActive ? 'Dark' : 'Light'} Mode</Typography>
                        <FormControlLabel
                            sx={{
                                '&.MuiFormControlLabel-root': {
                                    margin: '0'
                                }
                            }}
                            control={<MaterialUISwitch checked={isDarkModeActive} onChange={switchHandlerFunc} />}
                        // label="Switch"
                        />
                    </Stack>

                    <Box className='fliper-outer-box'
                        sx={{
                            width: '100%',
                            height: '200px',
                            perspective: '1000px',
                            '& .fliper-inner-box': {
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                transition: 'transform 1s',
                                transformStyle: 'preserve-3d'
                            },
                            '& .theme-box': {
                                transform: 'rotateY(180deg)',
                                transition: 'transform 1s',
                            },
                            '& .front-box': {
                                width: '100%', position: 'absolute', backfaceVisibility: 'hidden'
                            },
                            '& .back-box': {
                                width: '100%', position: 'absolute',
                                transform: 'rotateY(180deg)', backfaceVisibility: 'hidden'
                            }
                        }}
                    >
                        <Box className={`fliper-inner-box ${isDarkModeActive ? '' : 'theme-box'}`}>
                            <Box className={'front-box'} >
                                <DarkThemBox darkThemeColors={ThemeColors.darkThemeColors} getUserDarkTheme={getUserDarkTheme} />
                            </Box>
                            <Box className={'back-box'}>
                                <LightThemeBox lightThemeColors={ThemeColors.lightThemeColors} getUserLightTheme={getUserLightTheme} />
                            </Box>

                        </Box>
                    </Box>

                    <Box p={1}>
                        <PreviewBox />
                    </Box>

                    <Stack sx={{
                        px: 1.5,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        "& .MuiButtonBase-root": {
                            borderRadius: '25px',
                            backgroundColor: 'primary',
                            color: 'mypresetcolor.fontColor',
                            fontWeight: '600'
                        }
                    }}>
                        <BtnHoverFramer><Button variant='contained' size='small' onClick={themeSetBtn} >Save</Button></BtnHoverFramer>
                        <BtnHoverFramer><Button variant='contained' size='small' onClick={themeResetBtn}>RESet</Button></BtnHoverFramer>
                    </Stack>
                </Box>
            </SwipeableDrawer>
        </>
    )
}

export default SettingsDrawer;