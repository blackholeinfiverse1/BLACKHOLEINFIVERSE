import React from 'react';
import { Box, Typography } from '@mui/material';
import ChatBox from './ChatBot';

// Define your MUI styles directly in the sx prop
const Game: React.FC = () => {
  return (
    <Box
      sx={{
        marginBottom: '100px',
        width: '100%',
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
        border: '2px solid black',
        marginTop: '2.1%',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          background: 'radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)',
          animation: 'blackhole 10s infinite linear',
        },
      }}
    >
      <ChatBox/>
      {/* Header Title */}
      <Box
        sx={{
          margin: '4%',
          width: '80%',
          marginX: 'auto',
          textAlign: 'center',
          animation: 'fadeIn 1s ease-in-out', // Fade-in animation
        }}
      >
        <Typography
          sx={{
            width: '50%',
            margin: 'auto',
            marginTop: '3%',
            fontSize: {
              xs: '1.5rem',
              sm: '1.5rem',
              md: '2.5rem',
              lg: '3rem',
            },
            color: '#0dcaf0',
            borderBottom: '2px solid #59b2f4',
            textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
          }}
        >
          Interactive Sports World
        </Typography>
      </Box>

      {/* Content Boxes */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          width: '80%',
          marginX: 'auto',
        }}
      >
        {['Pickleball', 'Volleyball', 'Badminton'].map((title, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: '100%', // 1 image per row on extra small screens
                sm: '100%', // 1 image per row on small screens
                md: '30%',  // 3 images per row on medium screens
                lg: '30%',  // 3 images per row on large screens
              },
              marginBottom: '40px',
              padding: '20px',
              textAlign: 'center',
              border: '2px solid black',
              borderRadius: '10px',
              backgroundColor: '#1a1a1a',
              boxShadow: '1px 1px 10px rgba(255, 255, 255, 0.1)',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Hover scale effect
              '&:hover': {
                transform: 'scale(1.05)', // Slightly zoom in
                boxShadow: '5px 5px 15px rgba(255, 255, 255, 0.4)', // Shadow increase on hover
              },
              animation: `slideUp 1s ease ${0.5 * index}s`, // Slide up with delay
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: '1.8rem',
                  sm: '2rem',
                  md: '2.5rem',
                  lg: '3rem',
                },
                color: '#0dcaf0',
                marginBottom: '1rem',
              }}
            >
              {title.toUpperCase()}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: '1rem',
                  sm: '1rem',
                  md: '1.1rem',
                  lg: '1.2rem',
                },
                color: '#e0e0e0',
                marginBottom: '20px',
              }}
            >
              {title === 'Pickleball'
                ? 'Pickleball is a fun, fast-paced game that offers a great workout and a chance to socialize. Whether you\'re a beginner or an experienced player, it\'s easy to pick up and enjoy.'
                : title === 'Volleyball'
                ? 'Volleyball is an engaging and dynamic sport suitable for players of all ages and skill levels. Whether played competitively or recreationally, it offers numerous physical, social, and mental benefits.'
                : 'Badminton is a fast-paced and engaging sport that can be enjoyed by people of all ages and skill levels. Whether played casually or competitively, it offers numerous physical, mental, and social benefits.'}
            </Typography>

            <Box
              sx={{
                width: '100%',
                marginBottom: '10px',
              }}
            >
              <img
                src={
                  title === 'Pickleball'
                    ? 'https://st4.depositphotos.com/1446098/39943/i/450/depositphotos_399439086-stock-photo-pickleball-balls-paddle-sport-pickleball.jpg'
                    : title === 'Volleyball'
                    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mGGbXfKo3pAtUXxBSf_Ndmw9eZN7FqkT0g&s'
                    : 'https://st2.depositphotos.com/1046535/7980/i/450/depositphotos_79804048-stock-photo-badminton-sport-in-gym-hand.jpg'
                }
                alt={title}
                style={{
                  width: '90%', // Smaller image width
                  height: 'auto',
                  borderRadius: '10px',
                  border: '2px solid black',
                  transition: 'transform 0.4s ease-in-out', // Image zoom effect
                }}
                className="sport-image"
              />
            </Box>
          </Box>
        ))}
      </Box>

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        
       
      `}</style>
    </Box>
  );
};

export default Game;
