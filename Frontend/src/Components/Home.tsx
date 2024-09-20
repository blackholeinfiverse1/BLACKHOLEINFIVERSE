import React, { useEffect, useRef, useState } from 'react';
import { Container, Box, Typography, Button, TextField, Grid } from '@mui/material';
import videoSrc from '../assets/bhvideo.mp4';

import { useNavigate } from 'react-router-dom';
import ChatBox from './ChatBot';

const Home = () => {
    const [showVideo, setShowVideo] = useState(true);
    const navigate = useNavigate();
    const videoRef = useRef<HTMLVideoElement>(null);
    const homeRef = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        navigate('/login'); // Replace with the actual path to your login page
      };
    
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll(".reveal");
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const revealTop = reveal.getBoundingClientRect().top;
                const revealPoint = 150;

                if (revealTop < windowHeight - revealPoint) {
                    reveal.classList.add("active");
                } else {
                    reveal.classList.remove("active");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    return (
            <Box className='home-page-screen'>
                
                {/* Video or Image */}
                {showVideo ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        className="fullscreen-video"
                        onEnded={handleVideoEnd}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                  <Box 
    className="home" 
    id="home" 
    ref={homeRef} 
    sx={{ 
        background:'#04040f',
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        padding: 4, 
        gap: 4, 
        flexWrap: 'wrap', 
        '@media (max-width: 768px)': { 
            flexDirection: 'column', // Stack vertically on smaller screens
        },
        '@media (max-width: 480px)': { 
            padding: 2, // Reduced padding for very small screens
        },
    }}
>
    
    {/* Image Section */}
    <Box 
        sx={{ 
            
            flex: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            maxWidth: '100%', 
            overflow: 'hidden', 
            '@media (max-width: 320px)': {
                maxWidth: '90%', // Ensure image doesn't overflow on very small screens
            }
        }}
    >
       <Box
    component="img"
    src='https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg'
    alt="Home"
    sx={{
        width: '100%',
        height: 'auto',
        maxWidth: '500px',
        borderRadius: 8,
        '@media (max-width: 480px)': {
            maxWidth: '300px', // Adjust image size for smaller screens
        },
        '@media (max-width: 320px)': {
            maxWidth: '250px', // Further adjust for very small screens
        },
    }}
/>

    </Box>

    {/* Description Section */}
    <Box 
        sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: '#fff', 
            textAlign: 'center',
            maxWidth: '100%',
            padding: 4,
            boxShadow: '0px 0px 15px 5px rgba(255, 255, 255, 0.6)', // White shadow effect
            borderRadius: 8,
            '@media (max-width: 480px)': {
                padding: 2, // Reduce padding on smaller screens
            },
        }}
    >
        <Typography variant="h1" sx={{ mb: 2,color:'#59b2f4',   fontSize: {
                    xs: '2rem',  // for extra small screens (mobile devices)
                    sm: '3rem',    // for small screens (tablets)
                    md: '3.5rem',  // for medium screens (small laptops)
                    lg: '4rem',    // for large screens (desktops)
                  },
                  }}>
            Blackhole Infiverse LLP.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, fontSize: '1rem', '@media (max-width: 480px)': { fontSize: '0.9rem' } }}>
            BlackHole Infiverse isn't your average content creation company.
            Founded in 2021, we emerged with a bold vision: to become a key player
            in the burgeoning meta, AI, and robotics space. We're a passionate team
            driven by innovation, constantly pushing the boundaries of traditional
            media and diving headfirst into the future of immersive storytelling
            through VR/AR experiences.
        </Typography>
        <Button 
            variant="contained" 
            onClick={handleClick} 
            sx={{ 
                fontWeight:'bold',
                backgroundColor: '#59b2f4', 
                color: 'black',
                '@media (max-width: 480px)': {
                    fontSize: '0.8rem', // Smaller button text for small screens
                }
            }}
        >
            Join Now
        </Button>
    </Box>
        
</Box>


                )}
<hr></hr>


                {/* Gaming Section */}<Box
    sx={{
        padding: 4,
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        marginBottom: 15,
        marginTop: 10,
        
        '@media (max-width: 768px)': {
            padding: 2, // Adjust padding for smaller screens
        },
    }}
>
    <ChatBox></ChatBox>
    <Typography variant="h2" sx={{ mb: 4 ,
        fontSize: {
            xs: '2rem',  // for extra small screens (mobile devices)
            sm: '3rem',    // for small screens (tablets)
            md: '3.5rem',  // for medium screens (small laptops)
            lg: '4rem',    // for large screens (desktops)
          },
    }}>
        Our Service
    </Typography>
    <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
            textAlign:'center',
            '@media (max-width: 480px)': {
                gap: 4, // Reduced gap for small screens
            },
        }}
    >
        {[
            {
                imgSrc: 'https://cdn.pixabay.com/photo/2019/04/15/11/50/blockchain-4129138_1280.jpg',
                title: 'BlockChain',
                description: 'Blockchain is a decentralized digital ledger. Introduction to Blockchain Technology Blockchain technology has revolutionized the way data is stored, verified, and transmitted, offering unparalleled security, transparency, and efficiency.',
            },
            {
                imgSrc: 'https://media.istockphoto.com/id/519339600/photo/playing-shooter-game-on-console.jpg?s=612x612&w=0&k=20&c=3T8ATKr4KxT9-rIA4QzJlmfEO613AyQa0Fl71aPWKQw=',
                title: 'Gaming',
                description: 'Welcome to the future of gaming! BlackHole Infiverse isn\'t just creating content – we\'re crafting the next generation of gaming experiences that transcend traditional boundaries.',
            },
            {
                imgSrc: 'https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg',
                title: 'Robotics',
                description: 'BlackHole Infiverse isn\'t just about creating content – we\'re shaping the future through cutting-edge robotics advancements.',
            }
        ].map((item, index) => (
            <Box
                key={index}
                sx={{
                    width: '300px',
                    padding: 2,
                    backgroundColor: '#111',
                    borderRadius: 2,
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        animation: 'bounce 0.6s',
                    },
                    '@media (max-width: 480px)': {
                        width: '250px', // Adjust width for small screens
                        padding: 1, // Adjust padding for small screens
                    },
                }}
            >
                <Box
                    component="img"
                    src={item.imgSrc}
                    alt={item.title}
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 2,
                    }}
                />
                <Typography variant="h5" sx={{ mt: 2, color: '#59b2f4' }}>
                    {item.title}
                </Typography>
                <Typography sx={{ mt: 1 }}>
                    {item.description}
                </Typography>
            </Box>
        ))}
    </Box>

    {/* Inline CSS for Bounce Animation */}
    <Box
        component="style"
        sx={{
            display: 'none',
        }}
    >
        {`
            @keyframes bounce {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.1);
                }
                100% {
                    transform: scale(1);
                }
            }
        `}
    </Box>
</Box>



            </Box>
    );
};

export default Home;
