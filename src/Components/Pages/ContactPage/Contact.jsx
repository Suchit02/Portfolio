import React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import Heading from '../../GlobalComponents/Heading';
import { ContactsTwoTone } from '@mui/icons-material';
import FliperCard from '../../GlobalComponents/FliperCard';
import ContactFrontCard from './ContactFrontCard';
import ContactBackCard from './ContactBackCard';
import { Mail, WhatsApp, Telegram } from '@mui/icons-material';
import ContactIconImg from '../../../Image/Contact3dimg.png';
import TranslateYFramer from '../../GlobalComponents/AnimatedCompo/TranslateYFramer';
import TranslateXFramer from '../../GlobalComponents/AnimatedCompo/TranslateXFramer';
import TextEffectFramer from '../../GlobalComponents/AnimatedCompo/TextEffectFramer';

const Contact = () => {
    return (
        <>
            <Box
                id='contact'
                data-section
                sx={{
                    width: '100%',
                    minHeight: 'calc(100vh - 56px*2)',
                    pt: 7
                }}
            >
                <Container disableGutters >
                    <TranslateYFramer><Heading headingName={'Contact'} headingIcon={ContactsTwoTone} /></TranslateYFramer>
                    {/* <Typography variant='h6' color={'gray'} textAlign={'center'}>Get In Touch</Typography> */}
                    <Grid container justifyContent={'space-between'} px={{ xxs: 1.5, lg: 0 }}>
                        <Grid item xxs={12} sm={4} md={3} order={{ xxs: 1, sm: 1 }} sx={{ '& .transXframer-inner, .transXframer-outer': {height: '100%'}}}>
                            <TranslateXFramer XVal='-100vw' durVal={1}>
                                <Paper sx={{
                                    height: '100%',
                                    p: 2,
                                    backgroundColor: 'mypresetcolor.foregroundColor',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'relative'
                                }}>
                                    <Box className='contact-icon-img upDownAnimation' position={'relative'}>
                                        <Box
                                            component={'img'}
                                            src={ContactIconImg}
                                            title='Cotact Img'
                                            width={{ xxs: 100, sm: 150 }}
                                        />
                                        <Box sx={{
                                            width: { xxs: 100, sm: 150 },
                                            height: '10px',
                                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                            borderRadius: '50%',
                                            position: 'absolute',
                                            bottom: '-5px',
                                            filter: 'blur(2px)',
                                        }} />
                                    </Box>
                                    <TextEffectFramer><Typography variant='h6' color={'gray'} textAlign={'center'} fontWeight={600} mt={0.5}>Get In Touch</Typography></TextEffectFramer>
                                    <TextEffectFramer><Typography variant='body2' textAlign={'center'} >Let's connect and code together. Feel free to drop me a message; I'm just a click away.</Typography></TextEffectFramer>
                                </Paper>
                            </TranslateXFramer>
                        </Grid>
                        <Grid item xxs={12} sm={4} md={6} order={{ xxs: 3, sm: 1 }} px={{ xxs: 0, sm: 1.5 }} >
                            <form style={{ width: '100%' }}>
                                <TranslateYFramer>
                                    <TextField
                                        fullWidth
                                        label={'Full Name'}
                                        // margin='dense'
                                        required
                                    />
                                </TranslateYFramer>

                                <Stack display={'flex'} flexDirection={{ xxs: 'column', md: 'row' }} gap={{ xxs: 0, md: 1.3 }} sx={{ '& div': { width: '100%' } }}>
                                    <TranslateYFramer durVal={1.5}>
                                        <TextField
                                            fullWidth
                                            label={'Email Id'}
                                            type='email'
                                            margin='dense'
                                            required

                                        />
                                    </TranslateYFramer>
                                    <TranslateYFramer durVal={1.5}>
                                        <TextField
                                            fullWidth
                                            label={'Mobile Number'}
                                            margin='dense'
                                            required
                                        />
                                    </TranslateYFramer>
                                </Stack>
                                <TranslateYFramer durVal={2}>
                                    <TextField
                                        fullWidth
                                        label={'Message'}
                                        multiline
                                        // rows={11}
                                        margin='dense'
                                        required
                                        sx={{
                                            '& .MuiInputBase-root .MuiInputBase-input': {
                                                height: { xxs: '200px !important', sm: '190px !important', md: '258px !important' }
                                            }
                                        }}
                                    />
                                </TranslateYFramer>
                                <TranslateYFramer durVal={2}>
                                    <Button variant='contained' fullWidth sx={{ mt: 1, }}>Submit</Button>
                                </TranslateYFramer>
                            </form>
                        </Grid>
                        <Grid item xxs={12} sm={4} md={3} order={{ xxs: 2, sm: 1 }} py={{ xxs: 1.5, sm: 0 }}>
                            <Stack display={'flex'} flexDirection={'column'} alignItems={'center'} gap={1.5} sx={{ '& div': { width: '100%' } }}>
                                <TranslateXFramer durVal={1}><FliperCard cardWidth='100%' frontComponent={<ContactFrontCard cardText={'Gmail'} cardIcon={Mail} />} backComponent={<ContactBackCard cardText={'suchitmishra1728@gamil.com'} />} /></TranslateXFramer>
                                <TranslateXFramer durVal={1.5}><FliperCard cardWidth='100%' frontComponent={<ContactFrontCard cardText={'Whatsapp'} cardIcon={WhatsApp} />} backComponent={<ContactBackCard cardText={'+91-8948794697'} />} /></TranslateXFramer>
                                <TranslateXFramer durVal={2}><FliperCard cardWidth='100%' frontComponent={<ContactFrontCard cardText={'Telegram'} cardIcon={Telegram} />} backComponent={<ContactBackCard cardText={'Suchit Mishra'} />} /></TranslateXFramer>
                            </Stack>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Contact;