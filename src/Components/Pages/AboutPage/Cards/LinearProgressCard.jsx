import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Stack, Typography } from '@mui/material';

const LinearProgessCard = ({data}) => {
    const { skillName, skillPercen } = data;
    const theme = useTheme();
    return (
        <>
            <Box>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} pl={0.5}>
                        <data.skillIcon />  {/*Icon*/}
                        <Typography ml={1} fontWeight={'bold'}>{skillName}</Typography>
                    </Stack>
                    <Typography fontWeight={'bold'}>{`${skillPercen}%`}</Typography>
                </Stack>
                <Box className='liner-progress-bar' sx={{ position: 'relative' }}>
                    <Box
                        className='lower-bar'
                        sx={{
                            width: '100%',
                            height: '10px',
                            backgroundColor: (theme) => theme.palette.grey[theme.palette.mode === 'dark' ? 800 : 200],
                            borderRadius: '10px'
                        }}
                    />
                    <Box
                        className='upper-bar'
                        sx={{
                            width: `${skillPercen}%`,
                            height: '10px',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            borderRadius: '10px',
                            position: 'absolute',
                            top: '0',
                            boxShadow: `1px 1px 5px ${theme.palette.mypresetcolor.highlightColor}`,
                            transition: 'width 0.5s ease-in',
                            '&:hover': {
                                backgroundColor: 'mypresetcolor.highlightColor',
                            }
                        }}
                    />
                </Box>
            </Box>
        </>
    )
}

export default LinearProgessCard;