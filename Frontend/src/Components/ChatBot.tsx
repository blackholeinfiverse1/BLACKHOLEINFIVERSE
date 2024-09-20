import React from 'react';
import { Box, Link } from '@mui/material';
import bbImage from '../assets/1.png';

const ChatBox: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        padding: 0,
        borderRadius: '50%',
        width: { xs: '40px', sm: '50px', md: '60px' },
        height: { xs: '40px', sm: '50px', md: '60px' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: { xs: '5px', sm: '10px', md: '130px' },
        right: { xs: '20px', sm: '50px', md: '25px' },
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1000,
        animation: 'moveAndStop 5s ease-in-out forwards',
        '@keyframes moveAndStop': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(20px, -20px) rotate(90deg)' },
          '50%': { transform: 'translate(-20px, 20px) rotate(180deg)' },
          '75%': { transform: 'translate(20px, 20px) rotate(270deg)' },
          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
        },
      }}
    >
      <Link href='https://uni-guru.in/' sx={{ display: 'block' }}>
        <Box
          component="img"
          src={bbImage}
          alt="Description of the image"
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
            animation: 'rotate 5s linear infinite',
            '@keyframes rotate': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            },
          }}
        />
      </Link>
    </Box>
  );
};

export default ChatBox;
