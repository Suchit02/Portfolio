import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';

const BtnCompo = (props) => {
    const { activeBtn, btnCirPosi, btnName, btnFunc } = props;
    return (
        <>

            <Box
                className={`btn-box ${activeBtn === btnName.toLowerCase() ? 'active' : null}`}
            >
                <Tooltip title={btnName}>
                    <a className='btn-nav' href={`#${btnName.toLowerCase()}`}>
                        <IconButton onClick={() => btnFunc(btnName.toLowerCase(), btnCirPosi)}>
                            <props.btnIcon />
                        </IconButton>
                    </a>
                </Tooltip>
                <Typography variant='caption'>{btnName}</Typography>
            </Box>

        </>
    )
}

export default BtnCompo;