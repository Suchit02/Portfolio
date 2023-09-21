import React, { createContext, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

export const ThemeModeContext = createContext();

const mode = localStorage.getItem('mode') || 'dark';
const userHighlightColor = localStorage.getItem('highlight') || '#79E0EE';
const darkTheme = localStorage.getItem('darkTheme') || { themeName: 'Default Dark', themeColors: { backgroundColor: '#151922', foregroundColor: '#1C1F24', fontColor: '#FFFFFF', highlightColor: userHighlightColor}}
const lightTheme = localStorage.getItem('lightTheme') || { themeName: 'Default Light', themeColors: { backgroundColor: '#F3FDE8', foregroundColor: '#96B6C5', fontColor: '#27374D', highlightColor: userHighlightColor}}
const userThemeColors = mode === 'dark' ? darkTheme : lightTheme


export const ThemeModeProvider = ({ children }) => {
    const ppy = typeof(userThemeColors) === 'string' ? JSON.parse(userThemeColors) : userThemeColors
    const [thememode, setThemeMode] = useState(mode);
    const [preset, setPreset] = useState(ppy.themeColors);
    // console.log(JSON.parse(darkTheme))
    const themeObj = {
        dark: {
            primary: {
                main: preset.highlightColor
            },
            background: {
                default: preset.backgroundColor,
                paper: preset.foregroundColor
            },
            mypresetcolor: {
                ...preset
            },
            text: {
                primary: preset.fontColor
            },
        },
        light: {
            primary: {
                main: preset.highlightColor
            },
            background: {
                default: preset.backgroundColor,
                paper: preset.foregroundColor
            },
            mypresetcolor: {
                ...preset
            },
            text: {
                primary: preset.fontColor
            }
        }
    }

    const colorMode = useMemo(() => ({
        // toggleThemeMode: () => setThemeMode((premode) => premode === 'light' ? 'dark' : 'light'),
        toggleThemeMode: () => {
            setThemeMode((premode) => {
                if(premode === 'light'){
                    localStorage.setItem('mode', 'dark');
                    return 'dark'
                }else{
                    localStorage.setItem('mode', 'light');
                    return 'light'
                }
            })
        },
        thememode
    }), [thememode]);

    const presetFun = useMemo(() => ({
        themeChangerFunc: function(colors){
            setPreset({...colors})
            // console.log(colors,'Sam');
        },
        changeHighlight: function (color) {
            setPreset({ ...preset, highlightColor: color })
        }
    }), [preset])

    // Create Theme
    let theme = useMemo(() => createTheme({
        breakpoints: {
            keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
            values: {
                xxs: 0,
                xs: 300,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536
            }
        },
        palette: {
            mode: thememode,
            ...themeObj[thememode],
        },

        // eslint-disable-next-line
    }), [thememode, preset]);
    theme = responsiveFontSizes(theme);
    // console.log(preset)
    return (
        <ThemeModeContext.Provider value={{ colorMode, presetFun }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    )
}

export default ThemeModeProvider