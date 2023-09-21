import React, { useEffect, useRef, useState } from 'react';
import { Box, Paper } from '@mui/material';
import { DesignServices, Home, Person, AccountTreeTwoTone, ContactMailTwoTone } from '@mui/icons-material';
import BtnCompo from './BtnCompo';

const MobileViewNavBar = () => {
    const sections = useRef([]);
    const [activeBtn, setActiveBtn] = useState('home');
    const [Isvisible, setIsVisible] = useState(false);
    const btnArr = [
        { btnName: 'Home', btnIcon: Home, },
        { btnName: 'About', btnIcon: Person, },
        { btnName: 'Services', btnIcon: DesignServices, },
        { btnName: 'Projects', btnIcon: AccountTreeTwoTone, },
        { btnName: 'Contact', btnIcon: ContactMailTwoTone, },
    ];

    const navBtnFun = (val) => {
        setActiveBtn(val);
    };

    // 
    const listenToScroll = () => {
        // nav active when scroll
        const pageYOffset = window.pageYOffset + 200;
        let newActiveSection = null;
        sections.current.forEach((section) => {
            const sectionOffsetTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
                newActiveSection = section.id;
            }
        });
        setActiveBtn(newActiveSection);

        // nav hide and when Scroll
        let hieghtToHidden = 150;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > hieghtToHidden) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section]');

        window.addEventListener('scroll', listenToScroll);
        return () => window.removeEventListener('scroll', listenToScroll);
    }, []);

    return (
        <>
            <Box
                className='bottom-navbar'
                sx={{
                    display: { xxs: 'flex', md: 'none' },
                    justifyContent: 'center',
                    position: 'fixed',
                    left: '50%',
                    bottom: '2px',
                    transform: `translateX(-50%) translateY(${Isvisible ? '0px' : '100px'})`,
                    transition: 'all 0.3s ease-in',
                    zIndex: '25'
                }}>
                <Paper
                    sx={{
                        width: '350px',
                        border: '3px solid',
                        borderColor: 'mypresetcolor.highlightColor',
                        borderRadius: '25px',
                        backgroundColor: 'transparent',
                        padding: '0px 30px',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        position: 'relative',
                        backdropFilter: 'blur(5px)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '0px',
                            top: '0px',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'mypresetcolor.foregroundColor',
                            borderRadius: '25px',
                            opacity: 0.5,
                            zIndex: -5
                        },
                        '& .btn-box': {
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            cursor: 'pointer'
                        },
                        '& .MuiTypography-root': {
                            fontSize: '0.6rem',
                            fontWeight: '600',
                            backgroundColor: 'mypresetcolor.highlightColor',
                            color: 'mypresetcolor.backgroundColor',
                            borderRadius: '10px',
                            padding: '0px 8px',
                            position: 'absolute',
                            bottom: '7px',
                            zIndex: '-1',
                            opacity: '0',
                            transform: 'translateY(10px)',
                            transition: 'all 0.3s ease-in',
                        },
                        '& .MuiButtonBase-root': {
                            border: '3px solid transparent',
                            // borderColor: 'mypresetcolor.backgroundColor',
                            transform: 'translateY(0px)',
                            transition: 'all 0.3s ease-in'
                        },
                        // '& .MuiButtonBase-root:hover': {
                        //     borderColor: 'mypresetcolor.highlightColor',
                        //     transition: 'all 0.3s ease-in'
                        // },
                        '& .btn-box.active .MuiButtonBase-root': {
                            color: 'mypresetcolor.backgroundColor',
                            transform: 'translateY(-25px)',
                            transition: 'all 0.3s ease-in'
                        },
                        '& .btn-box.active .MuiTypography-root': {
                            opacity: '1',
                            transform: 'translateY(0px)',
                            transition: 'all 0.3s ease-in'
                        },
                        '& .btn-box:nth-of-type(1).active ~ .indicator': {
                            transform: 'translateX(calc(-55px*2))',
                            transition: 'all 0.3s ease-in'
                        },
                        '& .btn-box:nth-of-type(2).active ~ .indicator': {
                            transform: 'translateX(calc(-55px*1))',
                            transition: 'all 0.3s ease-in'
                        },
                        '& .btn-box:nth-of-type(3).active ~ .indicator': {
                            transform: 'translateX(calc(0px))',
                            transition: 'all 0.3s ease-in'
                        },
                        '& .btn-box:nth-of-type(4).active ~ .indicator': {
                            transform: 'translateX(calc(55px*1))',
                            transition: 'all 0.3s ease-in'
                        },
                        '& .btn-box:nth-of-type(5).active ~ .indicator': {
                            transform: 'translateX(calc(55px*2))',
                            transition: 'all 0.3s ease-in'
                        }
                    }}
                >
                    {
                        btnArr.map((items, index) => <BtnCompo key={index} activeBtn={activeBtn} btnCirPosi={items.btnCirPosi} btnName={items.btnName} btnIcon={items.btnIcon} btnFunc={navBtnFun} />)
                    }
                    <Box className='indicator' sx={{
                        width: '45px',
                        height: '45px',
                        border: '3px solid',
                        borderColor: 'mypresetcolor.backgroundColor',
                        backgroundColor: 'mypresetcolor.highlightColor',
                        position: 'absolute',
                        top: '-55%',
                        borderRadius: '50%',
                        zIndex: '-5',
                    }} />
                </Paper>
            </Box>
        </>
    )
}

export default MobileViewNavBar;