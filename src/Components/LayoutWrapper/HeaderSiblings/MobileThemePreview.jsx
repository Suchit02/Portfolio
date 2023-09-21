import React from 'react';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import { SettingsOutlined } from '@mui/icons-material';

const MobileThemePreview = () => {
    return (
        <>
            <Box sx={{ width: '90px', height: 'auto', backgroundColor: 'mypresetcolor.backgroundColor', color: 'white', fontSize: '0.5rem', position: 'relative', overflow: 'hidden', '& .MuiTypography-root': { fontSize: '0.5rem' } }}>
                {/* Header */}
                <Paper component={'header'} sx={{ backgroundColor: 'mypresetcolor.backgroundColor', padding: '0px 3px', fontVariant: 'small-caps', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Avatar alt='Sam' src='https://img.freepik.com/premium-photo/cartoon-character-with-glasses-big-smile_800563-12452.jpg' sx={{ width: '12px', height: '12px' }} />
                        <Typography variant='caption' ml={0.3}>Sam</Typography>
                    </Stack>

                    <SettingsOutlined sx={{ fontSize: '0.6rem' }} />
                </Paper>
                {/* Section */}
                <Box component={'section'} px={0.5} sx={{ overflowY: 'auto' }}>
                    <Box lineHeight={1}>
                        <Typography variant='caption' component={'div'} textAlign={'center'} fontWeight={'bold'}>Preview</Typography>
                        <Typography variant='caption' sx={{ lineHeight: '0px', textAlign: 'justify', wordBreak: 'break-all' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ut aliquam, perspiciatis omnis ducimus fugiat numquam.</Typography>
                    </Box>
                    <Box py={1} display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
                        {[0, 1, 2,].map((itm, ind) => <Paper key={ind} sx={{ width: '25px', height: '40px' }}></Paper>)}
                    </Box>
                    {/* <Typography variant='caption' sx={{ lineHeight: '0px', textAlign: 'justify', wordBreak: 'break-all' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ut aliquam, perspiciatis omnis ducimus fugiat numquam.</Typography> */}
                </Box>
                <Box component={'footer'} sx={{ width: '100%', backgroundColor: 'mypresetcolor.backgroundColor' }}>
                    <Typography variant='caption' component={'div'} textAlign={'center'} sx={{ '&.MuiTypography-root': { fontSize: '0.5rem' } }}>Copyright@Sam</Typography>
                </Box>
            </Box>
        </>
    )
}

export default MobileThemePreview;