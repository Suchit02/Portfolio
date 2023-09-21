import React, { useContext, useEffect, useState } from 'react';
import { Box, IconButton, MenuItem, Paper, Select, Stack, Tooltip, Typography, styled, useTheme } from '@mui/material';
import { Add, Delete, DoneOutline } from '@mui/icons-material';
import { ThemeModeContext } from '../../ThemeModeProvider';

const BulletPaper = styled(Paper)(({ theme }) => ({
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    cursor: 'pointer'
}));

const defaultDarkTheme = JSON.parse(localStorage.getItem('darkTheme')) || {
    themeName: 'Default Dark',
    themeColors: {
        backgroundColor: '#151922',
        foregroundColor: '#1C1F24',
        highlightColor: '#79E0EE',
        fontColor: '#FFFFFF',
    }
};
// const defaultHighlight = localStorage.getItem('highlight') || '#79E0EE';


const DarkThemBox = ({ darkThemeColors, getUserDarkTheme }) => {
    const consumer = useContext(ThemeModeContext);
    const theme = useTheme();

    const { changeHighlight, themeChangerFunc } = consumer.presetFun;
    const [selectTheme, setSelectTheme] = useState(defaultDarkTheme.themeName);
    const [selectHighlight, setSelectHighlight] = useState(defaultDarkTheme.themeColors.highlightColor);
    const [selectedTheme, setSelectedTheme] = useState({
        themeName: defaultDarkTheme.themeName,
        themeColors: {
            backgroundColor: defaultDarkTheme.themeColors.backgroundColor,
            foregroundColor: defaultDarkTheme.themeColors.foregroundColor,
            highlightColor: selectHighlight,
            fontColor: defaultDarkTheme.themeColors.fontColor
        }
    });

    // Theme Preset Function
    const selectThemePresetFunc = (e) => {
        const selVal = e.target.value;
        setSelectTheme(selVal);
        const findTheme = darkThemeColors.themePresets.filter(preset => preset.themeName === selVal);
        const themeCol = findTheme[0].themeColors;
        themeChangerFunc({ ...themeCol, highlightColor: selectHighlight });
        setSelectedTheme({ themeName: selVal, themeColors: { ...themeCol, highlightColor: selectHighlight } });
    }

    // Highlight Function
    const highlightHandlerFunc = (e) => {
        setSelectHighlight(e.target.value);
        changeHighlight(e.target.value);
        setSelectedTheme({ ...selectedTheme, themeColors: { ...selectedTheme.themeColors, highlightColor: e.target.value } })
    }

    useEffect(() => {
        if (theme.palette.mode === 'dark') {
            getUserDarkTheme(selectedTheme);
        }
        // eslint-disable-next-line
    }, [selectedTheme])
    return (
        <>
            <Box className='darkTheme-boxCard' sx={{ padding: 1, m: 1, border: '1px solid gray', borderRadius: '10px', backdropFilter: 'blur(5px)' }}>
                {/* Theme Selection */}
                <Box className='theme-select-box' >
                    <Stack mb={0.5} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' color={'mypresetcolor.fontColor'}>Theme Presets :</Typography>
                        {/* Add Theme Button */}
                        <Tooltip title={'Add Theme'} >
                            <IconButton size='small' >
                                <Add fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    {/* Select Theme Preset */}
                    <Select
                        size='small'
                        fullWidth
                        value={selectTheme}
                        onChange={selectThemePresetFunc}
                        sx={{
                            '& .MuiSelect-select .color-boxes': {
                                display: 'none'
                            },
                        }}
                    >
                        {
                            darkThemeColors.themePresets.map((item, index) =>
                                <MenuItem key={index} value={item.themeName} sx={{ justifyContent: 'space-between' }}>
                                    {item.themeName}
                                    <Box className='color-boxes' display={'flex'} flexDirection={'row'} gap={0.25}>
                                        {Object.entries(item.themeColors).map((color, ind) => <Tooltip key={ind} title={`${color[0].slice(0, -5).toUpperCase()} : ${color[1]}`}><BulletPaper className='bullet-circle' sx={{ backgroundColor: color[1] }} /></Tooltip>)}
                                        <Tooltip title={selectHighlight}><BulletPaper className='bullet-circle' sx={{ backgroundColor: selectHighlight }} /></Tooltip>
                                    </Box>
                                </MenuItem>)
                        }
                    </Select>
                </Box>
                {/* Highlight Selection */}
                <Box className='highligh-colors-boxes' mt={1}>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='body1' color={'mypresetcolor.fontColor'}>Highlight Colors :</Typography>
                        <Tooltip title={'Add Highlight'}>
                            <IconButton size='small'>
                                <Add fontSize='small' />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Select
                        fullWidth
                        size='small'
                        value={selectHighlight}
                        onChange={highlightHandlerFunc}
                        sx={{
                            '& .MuiSelect-select .del-btn': {
                                display: 'none'
                            },
                            '& .MuiSelect-select .check-icon': {
                                display: 'none'
                            },
                            '& .MuiSelect-select .MuiPaper-root': {
                                width: '100%'
                            }

                        }}
                    >
                        {
                            darkThemeColors.themeHighlight.map((item, ind) =>
                                <MenuItem
                                    key={ind}
                                    value={`${item}`}
                                    // onClick={() => changeHighlight(item)}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        '&.MuiMenuItem-root .del-btn': {
                                            display: 'none'
                                        },
                                        '&.MuiMenuItem-root:hover .del-btn': {
                                            display: 'block'
                                        },
                                        '&.MuiMenuItem-root .check-icon': {
                                            display: 'none'
                                        },
                                        '&.Mui-selected .check-icon': {
                                            display: 'block'
                                        },
                                        '&.Mui-selected:hover .del-btn': {
                                            display: 'none'
                                        }
                                    }}
                                >
                                    <Stack width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                        <Paper sx={{ width: '75px', height: '25px', backgroundColor: `${item}`, borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <Typography variant='caption' component={'div'} textAlign={'right'}>{item}</Typography>
                                        </Paper>

                                        <Tooltip title='Remove' >
                                            <IconButton className='del-btn' size='small' sx={{ p: 0.5 }} onClick={() => console.log('Deleted')} >
                                                <Delete sx={{ fontSize: '1rem' }} />
                                            </IconButton>
                                        </Tooltip>
                                        <DoneOutline className='check-icon' fontSize='small' sx={{ mr: 0.6, fontWeight: 'bold' }} />
                                    </Stack>
                                </MenuItem>
                            )
                        }
                    </Select>
                </Box>
            </Box>
        </>
    )
}

export default DarkThemBox;