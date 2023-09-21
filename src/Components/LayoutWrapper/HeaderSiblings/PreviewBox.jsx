import React, { useEffect, useState } from 'react';
import WebThemePreview from './WebThemePreview';
import MobileThemePreview from './MobileThemePreview';
import { Box, IconButton, Stack, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Computer, Smartphone } from '@mui/icons-material';

const PreviewBox = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const [isDesktopView, setIsDesktopView] = useState(true);
    const preViewFunc = (clickVal) => {
        clickVal === 'desktop' ? setIsDesktopView(true) : setIsDesktopView(false)
    }
    useEffect(() => {
        if (matches) {
            preViewFunc('desktop');
        } else {
            preViewFunc('mobile');
        }
    }, [matches])
    return (
        <>
            {/* Preview Box */}
            <Box p={1} width={'100%'} minHeight={200} border={'1px solid gray'} borderRadius={'10px'} >
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant='body1' pb={0.5}>Theme Preview :</Typography>
                    <Stack
                        display={'flex'}
                        flexDirection={'row'}
                        gap={0.5}
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: '1rem'
                            },
                            '& .MuiIconButton-root.active': {
                                color: 'skyblue', border: '1px solid skyblue'
                            }
                        }}
                    >
                        <Tooltip title={'Desktop'}>
                            <IconButton className={isDesktopView ? 'active' : null} size='small' onClick={() => preViewFunc('desktop')}>
                                <Computer />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={'Mobile'}>
                            <IconButton className={isDesktopView ? 'null' : 'active'} size='small' onClick={() => preViewFunc('mobile')}>
                                <Smartphone />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>
                <Box
                    sx={{
                        width: '100%',
                        height: { xxs: '160px', sm: '150px' },
                        pt: 0.5,
                        position: 'relative',
                        perspective: '3000px',
                        '& .preview-box': {
                            transform: 'rotateY(180deg)',
                            transition: 'transform 1s',
                        }
                    }}
                >
                    <Box
                        className={isDesktopView ? null : 'preview-box'}
                        sx={{
                            width: '100%',
                            height: '100%',
                            border: '1px solid green',
                            borderRadius: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                            transition: 'transform 1s',
                            transformStyle: 'preserve-3d',
                        }}>
                        <Box
                            className='webview-box'
                            component={'div'}
                            sx={{
                                position: 'absolute',
                                backfaceVisibility: 'hidden'
                            }}
                        >
                            <WebThemePreview />
                        </Box>
                        <Box
                            className='mobile-box'
                            component={'div'}
                            sx={{
                                position: 'absolute',
                                transform: 'rotateY(180deg)',
                                backfaceVisibility: 'hidden',
                            }}
                        >
                            <MobileThemePreview />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PreviewBox;