import * as React from 'react';
import { SvgIcon } from '@mui/material';

// Ensure to update the path to where your SVG file is located
const SitemarkIcon = (props) => {
  return (
    <SvgIcon {...props} component="img" src="/assets/sitemark-icon.svg" />
  );
}

export default SitemarkIcon;
