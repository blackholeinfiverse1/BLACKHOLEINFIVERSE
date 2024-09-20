import React from 'react';
import { Box, Typography } from '@mui/material';
import ChatBox from './ChatBot';

const About: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem',
      }}
    >
      <ChatBox/>
      {/* Port Page About Section */}
      
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem',
      }}
    >
      {/* Port Page About Section */}
      <Box
  sx={{
    backgroundColor: 'black',
    border: '2px solid black',
    marginTop: '0.1%',
    padding: '1rem',
    textAlign: 'center',
  }}
>
  <Typography
    sx={{
      color: '#0dcaf0',
      marginTop: '1%',
      marginBottom: '15px', // Updated marginBottom
      fontSize: {
        xs: '2rem',  // for extra small screens (mobile devices)
        sm: '3rem',    // for small screens (tablets)
        md: '3.5rem',  // for medium screens (small laptops)
        lg: '4rem',    // for large screens (desktops)
      },
      textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', // White shadow effect
    }}
  >
    BlackHole Infiverse
  </Typography>
  {/* ChatBox Component */}
</Box>


      {/* Text Div About */}
     

      {/* About Blackhole Section */}
      <Box
        sx={{
          width: '90%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom:"100px",
          '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          },
        }}
      >
        {/* About Blackhole Left Section */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: '2rem',
            textAlign: 'center',
            '@media (min-width: 768px)': {
              width: '45%',
              marginBottom: '0',
            },
          }}
        >
          <Typography variant="h1" sx={{ color: '#0dcaf0', marginBottom:'15px',fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            Creativity Beyond the Horizons
          </Typography>
          <Box
            component="img"
            src='https://img1.wsimg.com/isteam/ip/e59032f7-8dff-4ba5-a623-34b59645b4e4/IMG_3523.jpeg/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true'
            alt='About Blackhole'
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              borderRadius: '10px',
              border: '2px solid black',
              marginBottom: '1rem',
            }}
          />
          <Typography variant="h6" sx={{ color: 'white', fontSize: { xs: '1rem', sm: '1.1rem' }}}>
            BlackHole Infiverse believes the future of content creation lies in a powerful collaboration between human and artificial intelligence.
          </Typography>
        </Box>

        {/* About Blackhole Right Section */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '500px',
            marginBottom: '2rem',
            '@media (min-width: 768px)': {
              width: '45%',
              marginBottom: '0',
            },
          }}
        >
            <Typography variant="h1" sx={{
whiteSpace:{lg:'nowrap'},                
                color: '#0dcaf0', 
                textAlign:'center', marginBottom:'15px',fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            Where Dreams Meet Cutting Edge Technology
          </Typography>
          <Box
            component="img"
            src='https://img1.wsimg.com/isteam/ip/e59032f7-8dff-4ba5-a623-34b59645b4e4/IMG_3524.jpeg/:/cr=t:16.62%25,l:0%25,w:100%25,h:66.76%25/rs=w:600,h:300,cg:true'
            alt='About Blackhole'
            sx={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              borderRadius: '10px',
              border: '2px solid black',
              marginBottom: '1rem',
            }}
          />
          <Typography variant="h6" sx={{ color: 'white', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            BlackHole Infiverse isn't just using AI for efficiency – we're exploring its potential to unlock entirely new creative avenues.
          </Typography>
        </Box>
      </Box>
    </Box>
    <hr></hr>
    <Box
  sx={{
    width: '100%',
    maxWidth: '1200px',
    margin: '10% auto',
    padding: '1rem',
    textAlign: 'center',
  }}
>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    padding: '2rem',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)', // White shadow effect

      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    }}
  >
    {/* First Child Section */}
    <Box
      sx={{
        width: '100%',
        maxWidth: '600px',
        marginBottom: '2rem',
        padding:'2%',
        '@media (min-width: 768px)': {
          width: '50%',
          marginBottom: '0',
        },
      }}
    >
      <Box
        sx={{
          border: '1px solid #0dcaf0',
          width: 'fit-content',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          margin: '0 auto',
          backgroundColor: 'black',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.7)',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: '#0dcaf0', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)' }}
        >
          Our Team
        </Typography>
      </Box>

      <Typography
        sx={{
          color: '#0dcaf0',
          marginTop: '1rem',
          fontSize: {
            xs: '2rem', // for extra small screens (mobile devices)
            sm: '2.5rem', // for small screens (tablets)
            md: '3rem', // for medium screens (small laptops)
            lg: '3.5rem', // for large screens (desktops)
          },
          textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', // White shadow effect
        }}
      >
        We Craft Dreams!
      </Typography>
      <Typography
        variant='h6'
        sx={{
          color: 'white',
          fontSize: { xs: '1rem', sm: '1.1rem' },
          marginTop: '1rem',
          lineHeight: '1.5',
          textShadow: '1px 1px 3px rgba(255, 255, 255, 0.5)', // White shadow effect
        }}
      >
        Our mission is to pioneer the future of gaming, coding, and robotics by merging these dynamic fields. Through innovation and creativity, we aim to deliver solutions that inspire, educate, and entertain. Join us on this exciting journey as we explore new frontiers and redefine what’s possible.
      </Typography>
    </Box>

    {/* Second Child Section */}
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
        '@media (min-width: 768px)': {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginBottom: '0',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '300px',
          marginBottom: '1rem',
          '@media (min-width: 768px)': {
            marginBottom: '0',
            width: '45%',
          },
          '@media (max-width: 350px)': {
            marginBottom: '0',
            width: '60%',
          },
        }}
      >
        <Box
          component="img"
          src='https://i0.wp.com/aloneclone.studio/wp-content/uploads/2023/09/CEO.png?ssl=1&is-pending-load=1'
          alt='CEO'
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            border: '2px solid black',
            maxWidth: '100%',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)', // White shadow effect
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          maxWidth: '300px',
          '@media (min-width: 768px)': {
            marginBottom: '0',
            width: '45%',
          },
          '@media (max-width: 350px)': {
            marginBottom: '0',
            width: '60%',
          },
        }}
      >
        <Box
          component="img"
          src='https://i0.wp.com/aloneclone.studio/wp-content/uploads/2023/09/CTO.png?ssl=1&is-pending-load=1'
          alt='CTO'
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px',
            border: '2px solid black',
            maxWidth: '100%',
            boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)', // White shadow effect
          }}
        />
      </Box>
    </Box>
  </Box>
</Box>
<hr></hr>

       {/* Second Port About Section */}
      <Box
        sx={{
          width: '85%',
          margin: '8% ',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            marginBottom: '2rem',
          }}
        >
          <Typography variant="h4" sx={{ color: '#0dcaf0' }}>
            About Blackhole Infiverse?
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, marginTop: '1rem', lineHeight: '1.5' }}>
            BlackHole Infiverse isn't your average content creation company. Founded in 2021, we emerged with a bold vision: to become a key player in the burgeoning meta, AI and robotics space. We're a passionate team driven by innovation, constantly pushing the boundaries of traditional media and diving headfirst into the future of immersive storytelling through VR/AR experiences.
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
          }}
        >
          <Typography variant="h4" sx={{ color: '#0dcaf0' }}>
            WHY YOU CHOOSE US?
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', sm: '1.1rem' }, marginTop: '1rem', lineHeight: '1.5' }}>
            Our team of specialists brings a wealth of experience and knowledge to every project. We leverage the latest technologies and methodologies to deliver cutting-edge solutions. We work closely with our clients to understand their needs and deliver tailored solutions that drive success.
          </Typography>
        </Box>
      </Box>

        </Box>
  );
};

export default About;
