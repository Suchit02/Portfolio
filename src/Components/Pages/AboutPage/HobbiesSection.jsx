import React from 'react';
import { Chip, Stack } from '@mui/material';
import { Code, Edit, LocalLibrary, PhotoCamera } from '@mui/icons-material';
import SkillCard1Framer from '../../GlobalComponents/AnimatedCompo/SkillCard1Framer';

const HobbiesSection = () => {
    const hobbies = [
        { hobbName: 'Reading', hobbIcon: LocalLibrary },
        { hobbName: 'Writing', hobbIcon: Edit },
        { hobbName: 'Coding', hobbIcon: Code },
        { hobbName: 'Photograpy', hobbIcon: PhotoCamera }
    ];
    return (
        <>
            <Stack mx={1} mt={2} display={'flex'} flexDirection={'row'} flexWrap={'wrap'} gap={1} sx={{ '& .MuiChip-root': { fontWeight: 'bold' }, '& .MuiChip-root:hover': { backgroundColor: 'mypresetcolor.foregroundColor' } }}>
                {
                    hobbies.map((item, index) => <SkillCard1Framer key={index} dVal={index + 1}><Chip icon={<item.hobbIcon color='primary' />} label={item.hobbName} /></SkillCard1Framer>)
                }
            </Stack>
        </>
    )
}

export default HobbiesSection;