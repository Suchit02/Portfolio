import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Avatar, Box, Divider, IconButton, List, ListItemButton, Toolbar, Tooltip, } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MyName from './MyName/MyName';
import { DesignServices, Home, Person, AccountTreeTwoTone, ContactMailTwoTone } from '@mui/icons-material';
import SettingsDrawer from '../../AppTheme/ThemeSettings/SettingsDrawer';


const Header = () => {
    const sections = useRef([]);
    const [isdrawerOpen, setIsDrawerOpen] = useState(false);
    const [activeListItem, setActiveListItem] = useState('home');
    const menutList = [
        { id: 0, listName: 'Home', listHref: '#home', listIcon: Home },
        { id: 1, listName: 'About', listHref: '#about', listIcon: Person },
        { id: 2, listName: 'Services', listHref: '#services', listIcon: DesignServices },
        { id: 3, listName: 'Projects', listHref: '#projects', listIcon: AccountTreeTwoTone },
        { id: 4, listName: 'Contact', listHref: '#contact', listIcon: ContactMailTwoTone },
    ];

    const navListBtn = (listItem) => {
        setActiveListItem(listItem)
    }

    // nav active when scroll
    const listenToScroll = () => {
        const pageYOffset = window.pageYOffset + 200;
        let newActiveSection = null;
        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });
        setActiveListItem(newActiveSection);
    }
    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');

        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

    return (
        <>
            <AppBar position='sticky'
                sx={{
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(7px)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'mypresetcolor.foregroundColor',
                        zIndex: -5,
                        opacity: '0.7'
                    },
                    '& .MuiToolbar-root': {
                        minHeight: '56px',
                        padding: '0 10px',
                        boxShadow: 'none'
                    }
                }}

            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', }}>

                    <Box className={'header-name'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <IconButton size='small' onClick={() => setIsDrawerOpen(true)}>
                            <Avatar alt='Suchit Mishra' src='https://img.freepik.com/premium-photo/cartoon-character-with-glasses-big-smile_800563-12452.jpg' />
                        </IconButton>
                        <Box ml={0.5}>
                            <MyName />
                        </Box>
                    </Box>

                    <Box className={'menu-items'} sx={{ display: { xxs: 'none', md: 'flex' } }}>
                        {/* <List
                            sx={{
                                display: 'flex',
                                fontWeight: '600',
                                fontVariant: 'small-caps',
                                '&.MuiList-root': {
                                    padding: '0'
                                },
                                '& a': {
                                    color: 'white',
                                    textDecoration: 'none'
                                },
                                '& .MuiButtonBase-root': {
                                    borderRadius: '10px',
                                    position: 'relative',
                                    marginLeft: 2
                                },
                                '& .MuiButtonBase-root.active': {
                                    backgroundColor: 'mypresetcolor.highlightColor',
                                    transition: 'all 0.3s ease-in',

                                }
                            }}>
                            {
                                menutList.map((items, ind) => <a href={items.listHref} key={ind}><ListItemButton className={activeListItem === items.listName ? 'active' : null} onClick={() => navListBtn(items.listName)}>{items.listName}
                                    <Box
                                        className={activeListItem === items.listName ? 'indicator' : null}
                                        display={activeListItem === items.listName ? 'flex' : 'none'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        sx={{
                                            width: '35px',
                                            height: '35px',
                                            backgroundColor: 'mypresetcolor.highlightColor',
                                            borderRadius: '50%',
                                            border: '5px solid',
                                            borderColor:'mypresetcolor.backgroundColor',
                                            position: 'absolute',
                                            left: '50%',
                                            bottom: '-22px',
                                            transform: 'translate(-50%, 0%)',
                                            transition: 'all 0.3s ease-in',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '8px',
                                                left: '-14px',
                                                width: '10px',
                                                height: '10px',
                                                backgroundColor: 'transparent',
                                                borderRadius: '0 0px 50px 0px',
                                                boxShadow: '3px 5px 0 0 mypresetcolor.backgroundColor'
                                            },
                                            '&::before': {
                                                content: '""',
                                                position: 'absolute',
                                                top: '8px',
                                                right: '-14px',
                                                width: '10px',
                                                height: '10px',
                                                backgroundColor: 'transparent',
                                                borderRadius: '0 0px 0px 50px',
                                                boxShadow: '-4px 3px 0 0 mypresetcolor.backgroundColor'
                                            },
                                            '&.indicator': {
                                                // transform: 'translate(-50%, 0%)
                                                // transition: 'all 5s ease-in',
                                            }
                                        }}
                                    >{<items.listIcon sx={{ fontSize: '1rem' }} />}</Box>
                                </ListItemButton></a>)
                            }
                        </List> */}

                        <List
                            sx={{
                                display: 'flex',
                                fontWeight: '600',
                                fontVariant: 'small-caps',
                                '&.MuiList-root': {
                                    padding: '0'
                                },
                                '& a': {
                                    color: 'mypresetcolor.fontColor',
                                    textDecoration: 'none'
                                },
                                '& .MuiButtonBase-root': {
                                    borderRadius: '5px',
                                    position: 'relative',
                                    marginLeft: 2
                                },
                                '& .MuiButtonBase-root:hover': {
                                    boxShadow: '1.5px 1.5px 2px',
                                    color: 'mypresetcolor.highlightColor',
                                    fontWeight: 'bold'
                                },
                                '& .MuiButtonBase-root.active': {
                                    backgroundColor: 'mypresetcolor.highlightColor',
                                    zIndex: '-3',
                                    transition: 'all 0.3s ease-in',

                                },
                                '& .MuiButtonBase-root:hover .MuiSvgIcon-root': {
                                    transform: 'translateX(0%)',
                                    transition: 'all 0.3s ease-in'
                                },
                                '& .MuiButtonBase-root.active .MuiSvgIcon-root': {
                                    transform: 'translateX(-50%)',
                                    transition: 'all 0.3s ease-in'
                                }
                            }}>
                            {
                                menutList.map((items, ind) => <a href={`#${items.listName.toLowerCase()}`} key={ind}>
                                    <ListItemButton sx={{ overflow: 'hidden' }} className={activeListItem === items.listName.toLowerCase() ? 'active' : null} onClick={() => navListBtn(items.listName.toLowerCase())}>{items.listName}
                                        <items.listIcon sx={{
                                            fontSize: '3rem',
                                            position: 'absolute',
                                            left: '50%',
                                            zIndex: '-1',
                                            color: 'gray',
                                            opacity: '0.3',
                                            transform: 'translateX(150%)',
                                            transition: 'all 0.3s ease-in'
                                        }} />
                                    </ListItemButton></a>)
                            }

                        </List>
                    </Box>
                    <Box className={'setting-box'}>
                        <Tooltip title={'Settings'}>
                            <IconButton
                                size='small'
                                sx={{
                                    '&.MuiButtonBase-root': {
                                        color: 'primary.light',
                                        // border:'0.1px solid black',
                                        borderRadius: '12px',
                                    }
                                }}
                                onClick={() => setIsDrawerOpen(true)
                                }>
                                <SettingsOutlinedIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
                <Divider sx={{borderColor: 'mypresetcolor.highlightColor', opacity: '0.2'}}/>
                {/* Drawer */}
                <SettingsDrawer isdrawerOpen={isdrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            </AppBar >
        </>
    )
}

export default Header;