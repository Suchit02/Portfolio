import React from 'react';
import { Box } from '@mui/material';

const TreeCardView = (props) => {
    const {data} = props;
    // console.log(typeof(data.subSkills))
    return (
        <>
            <Box
                // height={200}
                position={'relative'}
                sx={{
                    '& .parent-skills': {
                        width: '200px',
                        border: '1px solid yellow',
                    },
                    '& .parent-skills li': {

                    },
                    '& .parent-skills li:hover': {

                    },
                    '& .child-skills': {

                    },
                    '& .child-skills li': {

                    },
                    '& .parent-skills li:hover .child-skills': {

                    },
                }}
            >
                <ul className='parent-skills' >
                    <li>
                        <details>
                            <summary>{data.skillName}</summary>
                            <ul className='child-skills'>
                                {/* <li>
                                    <details>
                                        <summary>React</summary>
                                        <ul className='child-skills'>
                                            <li>Material-UI</li>
                                            <li>Tailwind</li>
                                        </ul>
                                    </details>
                                </li> */}
                                <li>Node</li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </Box>
        </>
    )
}

export default TreeCardView;