import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import ChatBox from './ChatBot';

const Robotics: React.FC = () => {
  return (
    <Box
      sx={{
        marginBottom:"100px",
        width: '100%',
        backgroundColor: 'black',
        border: '2px solid black',
        marginTop: '2.5%',
        // Uncomment if gradient background is needed
        // background: 'linear-gradient(to right, #191f36, #8c9eff)',
        '@media (max-width: 1200px)': {
          '.component-start': {
            flexDirection: 'column',
            height: 'auto',
            width: '100%',
            marginLeft: 0,
          },
        },
        '@media (max-width: 768px)': {
          '.first-component': {
            flexDirection: 'column',
            width: '100%',
            marginLeft: 0,
          },
        },
        '@media (max-width: 480px)': {
          '.black-text': {
            fontSize: '14px',
            textAlign: 'center',
          },
        },
      }}
    >
      <ChatBox/>
      <Container>
        <Typography variant="h2" sx={{ color: '#0dcaf0', marginTop:"30px",textAlign: 'center',
      textShadow: '2px 2px 4px rgba(255, 255, 255, 0.7)', // White shadow effect

         }}>
          Future of Robotics
        </Typography>
        <Box
          sx={{
            marginTop: '5%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {[
              {
                imgSrc: 'https://img1.wsimg.com/isteam/ip/e59032f7-8dff-4ba5-a623-34b59645b4e4/IMG_3538.jpeg/:/cr=t:5.45%25,l:0%25,w:100%25,h:89.1%25/rs=w:388,h:194,cg:true',
                title: 'Humanoid Robots… Really!',
                text: `BlackHole Infiverse isn't just about creating content – we're shaping the future through cutting-edge robotics advancements. One of our most exciting endeavors is the development of next-generation humanoid robots poised to revolutionize various sectors, seamlessly integrating into our world.`,
              },
              {
                imgSrc: 'https://img1.wsimg.com/isteam/ip/e59032f7-8dff-4ba5-a623-34b59645b4e4/IMG_3544.jpeg/:/cr=t:5.45%25,l:0%25,w:100%25,h:89.1%25/rs=w:388,h:194,cg:true',
                title: 'Transform Domestic Life',
                text: `Intelligent Assistants: Envision a humanoid robot that anticipates your needs, assists with household chores, and even offers companionship. Elder Care with a Human Touch: Our robots can provide physical and emotional support for seniors, offering a helping hand with daily tasks and fostering social interaction.`,
              },
              {
                imgSrc: 'https://img1.wsimg.com/isteam/ip/e59032f7-8dff-4ba5-a623-34b59645b4e4/IMG_3542.jpeg/:/cr=t:16.62%25,l:0%25,w:100%25,h:66.76%25/rs=w:388,h:194,cg:true',
                title: 'The Rise of Humanoid Companion',
                text: `Imagine a future where robots aren't just industrial machines, but intelligent companions capable of interacting with the world in a human-like way. BlackHole Infiverse is designing & developing humanoid robots with the potential to transform our lives and livelihoods.`,
              },
              {
                imgSrc: 'https://img1.wsimg.com/isteam/ip/e59032f7-8dff-4ba5-a623-34b59645b4e4/IMG_3545.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:388,h:194,cg:true',
                title: 'Intuitive Human-Robot Collaboration',
                text: `Humanoid robots will seamlessly integrate into factory floors, collaborating with human workers in assembly, maintenance, and quality control tasks.`,
              },
            ].map((item, index) => (
              <Grid item xs={12} md={12} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '2%',
          textShadow: '1px 1px 3px rgba(255, 255, 255, 0.5)', // White shadow effect
        

     

                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '580px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                         boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.5)', 
                        
                }}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginTop: '2%',
                      textAlign: 'center',
                      color: 'white',
                      width: '100%',
                      maxWidth: '600px',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#0dcaf0' }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{  marginTop:"10px",marginBottom:"50px", fontSize: {
                    xs: '1rem',  // for extra small screens (mobile devices)
                    sm: '1.1rem',    // for small screens (tablets)
                    md: '1.2rem',  // for medium screens (small laptops)
                    lg: '1.3rem',    // for large screens (desktops)
                  }, }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Robotics;
