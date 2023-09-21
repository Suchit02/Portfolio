import React from 'react';
import { Avatar, Box, List, ListItem, Paper, Stack, Typography } from '@mui/material';
import { SettingsOutlined } from '@mui/icons-material';

const WebThemePreview = () => {
    
    return (
        <>
                        {/* minWidth: {xs: '200px', sm: '200px', md: '250px'}, minHeight: '100px', */}
            <Paper sx={{ width: '100%', minHeight: '100px', backgroundColor: 'mypresetcolor.backgroundColor', color: 'mypresetcolor.fontColor', overflow:'hidden', '& .MuiTypography-caption': { fontSize: '0.6rem' } }}>
                {/* Header */}
                <Paper component={'header'} sx={{ backgroundColor: '', padding: '0px 3px', borderRadius:'4px 4px 0 0', fontVariant: 'small-caps', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Avatar alt='Sam' src='https://img.freepik.com/premium-photo/cartoon-character-with-glasses-big-smile_800563-12452.jpg' sx={{ width: '12px', height: '12px' }} />
                        <Typography variant='caption' ml={0.3}>Sam</Typography>
                    </Stack>
                    <List
                        component={'nav'}
                        sx={{
                            padding: '3px 0px',
                            fontSize: '0.6rem',
                            display: 'flex',
                            flexDirection: 'row',
                            '& .MuiListItem-root': {
                                marginLeft: '3px',
                                padding: '0px 3px',
                                fontWeight: '600'
                            }
                        }}
                    >
                        <ListItem sx={{ backgroundColor: 'mypresetcolor.highlightColor', borderRadius: '2px' }}>Home</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Project</ListItem>
                    </List>
                    <SettingsOutlined sx={{ fontSize: '0.6rem', color: 'mypresetcolor.highlightColor' }} />
                </Paper>
                {/* Section */}
                <Box component={'section'} px={0.5} >
                    <Box lineHeight={0.7}>
                        <Typography variant='caption' component={'div'} textAlign={'center'} fontWeight={'bold'}>Preview</Typography>
                        <Typography variant='caption' sx={{ lineHeight: '0px', textAlign: 'justify', wordBreak: 'break-all' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit ut aliquam, perspiciatis omnis ducimus fugiat numquam excepturi vitae blanditiis alias.</Typography>
                    </Box>
                    <Box mt={0.3} py={0.5} display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}>
                        {[0, 1, 2, 3].map((itm, ind) => <Paper key={ind} sx={{ width: '40px', height: '50px', backgroundColor: 'mypresetcolor.foregroundColor' }}></Paper>)}
                    </Box>
                </Box>
                <Paper component={'footer'}>
                    <Typography variant='caption' component={'div'} textAlign={'center'} fontSize={'0.6rem'}>Copyright@Sam</Typography>
                </Paper>
            </Paper>
        </>
    )
}

export default WebThemePreview;