import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
  return (
    <Box
      style={{marginTop: '10px'}}
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
        backgroundColor: '#f5f5f5',
        mt: 'auto',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Follow Me
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/pankaj-kumar-047/"
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          href="https://x.com/Pankaj_047?t=t3K37qI1pYyiu9y0wApCcg&s=08"
          target="_blank"
          rel="noopener"
        >
          <XIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Facebook"
          href="https://www.facebook.com/share/ywyu2eYvxWtyc9jD/?mibextid=qi2Omg"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          href="https://www.instagram.com/pankaj_047"
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
