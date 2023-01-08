import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Info } from '@mui/icons-material';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#252525',
    color: '#ffffff',
    maxWidth: 200,
    borderRadius:'2px',
  },
}));

export default function TooltipShow(props) {
  const {heading,body} = props;
  return (
    <div>
      <HtmlTooltip
      placement="left-start"
        title={
          <React.Fragment>
            <Typography variant='body2' color="#DC9E00" fontWeight="500">
            {heading}
            </Typography>
            <Typography variant="subtitle3">
            {body}
            </Typography>
          </React.Fragment>
        }
      >
        <Info color="disabled" fontSize="small" style={{cursor:'pointer', color:'#DC9E00'}}></Info>
      </HtmlTooltip>
    </div>
  );
}