import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

const ProgressBulltesBox = ({ progressCheckerFunc }) => {
    const [selectedVal, setSelectedVal] = useState('circle');
    // Progress Bar Select Handler
    const progresSelectHandler = (e) => {
        setSelectedVal(e.target.value)
        progressCheckerFunc(e.target.value)
    }
    return (
        <>
            <Box className='outer-bullets-box'>
                <Box className='progress-bullets-selection'
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        '& .MuiButtonBase-root': { padding: '0px', fontSize: '0.75rem' },
                        '& .MuiFormLabel-root': { fontSize: '0.75rem' },
                        '& .MuiTypography-root': { fontSize: '0.75rem', pt: 0.2 },
                        '& .MuiFormControlLabel-root': { margin: '0px' },
                        '& .MuiFormGroup-root': { gap: 1 },
                    }}>
                    <FormControl sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                        <FormLabel id='progress-bar-sel'>Progress Bar:</FormLabel>
                        <RadioGroup
                            aria-labelledby='progress-bar-sel'
                            name='progress-bar-sel'
                            row
                            value={selectedVal}
                            onChange={progresSelectHandler}
                        >
                            <FormControlLabel value={'circle'} control={<Radio size='small' />} label='Circle' />
                            <FormControlLabel value={'linear'} control={<Radio size='small' />} label='Linear' />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
        </>
    )
}

export default ProgressBulltesBox;