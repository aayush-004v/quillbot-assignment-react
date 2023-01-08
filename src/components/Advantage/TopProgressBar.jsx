import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
            <Box sx={{ width: '80%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} color="success" />
            </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function TopProgressBar(props) {
    const percent = parseInt(props.value);
    return (
        <Box sx={{ width: '80%' }}>
            <LinearProgressWithLabel value={percent} />
        </Box>
    );
}