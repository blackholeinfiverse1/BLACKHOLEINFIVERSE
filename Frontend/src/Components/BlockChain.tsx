import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import ChatBot from "./ChatBot"
// Define TypeScript types if needed
interface CarouselItem {
  imageSrc: string;
  title: string;
  description: string;
  price: string;
  discount: string;
}

const carouselItems: CarouselItem[] = [
  {
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJvPOOPiI9gJi5ymL8KiK7UhyHzgX-YVrF-BlXEfUxDyCU0wx',
    title: 'Bitcoin',
    description: 'Bitcoin is an innovative payment network',
    price: '$34,000',
    discount: '15%',
  },
  {
    imageSrc: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQrOK06TTYdJ5p9e-LFDllmgRPnnUrbmXgsIXwnV1V0leEsFZHS',
    title: 'Ethereum',
    description: 'Ethereum is open-source blockchain currency',
    price: '$25,600',
    discount: '9%',
  },
  {
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSli5GgtoyKeRaj09htpBg9maTGsnv4R81vrqgMh1-L8gKZHlI4wd_XtJ55g&s',
    title: 'Tether',
    description: 'Tether is a stable coin cryptocurrency',
    price: '$7,000',
    discount: '4%',
  },
];

const Blockchain: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
  <ChatBot/>

    <Box sx={{ p: 3, display: 'flex',justifyContent:"space-evenly", flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', marginBottom:'150px',marginTop:"100px"}}>
  {/* Text Section */}
  <Box>

    <Typography variant="h2" align="center" sx={{ mb: 3, color: "white" }}>
      Exploring Blockchain

    </Typography>
    <Box sx={{ textAlign: 'center', my: 4, color: "white" }}>
      <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
        Blockchain is a decentralized digital ledger. Introduction to Blockchain Technology Blockchain technology
        has revolutionized the way data is stored, verified, and transmitted, offering unparalleled security, transparency,
        and efficiency. Initially developed as the underlying technology for Bitcoin, blockchain's applications have
        expanded far beyond cryptocurrencies, impacting various industries, including finance, healthcare, supply chain,
        and more. A blockchain is a decentralized, distributed ledger that records transactions across multiple computers
        in such a way that the registered transactions cannot be altered retroactively. This ensures transparency
        and security, making it a reliable technology for various applications.
      </Typography>
    </Box>
  </Box>

  {/* Image Section */}
  <Box sx={{ maxWidth: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
    <img
      src="https://www.ezloyalty.io/wp-content/themes/ezloyalty/assets/images/industry-detail/on-demand/introduce/image-mobile.svg"
      alt="Blockchain"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  </Box>
</Box>
<hr></hr>

{/* Carousel Section */}
<Box sx={{ display: 'flex', color:"white",overflowX: 'auto', justifyContent:"space-evenly", py: 3,marginBottom:'150px',marginTop:"150px" }}>
  {carouselItems.map((item, index) => (
    <Card
      key={index}
      sx={{
        maxWidth: { xs: 300, sm: 345, md: 380 },
        minWidth: { xs: 200, sm: 250 },
        flexShrink: 0,
        mx: { xs: 1, sm: 2 },
        p: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.imageSrc}
        alt={item.title}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography variant="h6">{item.price}</Typography>
          <Box sx={{ ml: 2, display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'gray',
                mx: 1,
              }}
            />
            <Typography variant="body2" sx={{ color: 'red' }}>
              {item.discount}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  ))}
</Box>
<hr></hr>


<Box sx={{ backgroundColor: 'black',color:"white", p: 4, display: 'flex',padding:{
  sm:0,
  md:5,
  lg:"100px"
}, flexDirection: { xs: 'column', md: 'row' }, marginTop:"150px",marginBottom:'150px',alignItems: 'center', gap: { xs: 4, md: 6 }, textAlign: 'center' }}>
  {/* Text Section */}
  <Box sx={{ maxWidth: '800px' }}>
    <Typography variant="h4" sx={{ mb: 3,fontWeight:"bold" }}>
      Trade crypto in seconds
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, fontWeight:"bold"}}>
      But with Prouple, you can mine Bitcoin from your own phone! You no longer have to worry about costly transactions.
    </Typography>
    <Button variant="contained" sx={{ mt: 2 }}>
      Explore Now
    </Button>
  </Box>


  {/* Image Section */}
  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
    <img
      src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
      alt="Exchange"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  </Box>
</Box>
<hr></hr>
<Box sx={{ p: 4, textAlign: 'center', color: "white" }}>
  {/* Title and Description */}
  <Typography variant="h4" sx={{ mb: 3 }}>
    Control your funds
  </Typography>
  <Typography variant="body1" sx={{ mb: 4 }}>
    Our mining pool offers some of the most competitive contracts in the market.
  </Typography>

  {/* Three Feature Cards */}
  <Box sx={{ 
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center', 
    gap: { xs: 4, md: 6 }, 
    mt: 2 
  }}>
    {/* First Card */}
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center', 
      width: { xs: '100%', md: '350px' } 
    }}>
      <img
        src="https://www.altassets.net/wp-content/uploads/2024/04/money-860128_1280-324x160.jpg"
        alt="Support All Currency"
        style={{ width: '100%', maxWidth: '350px', height: 'auto', marginBottom: '16px' }}
      />
      <Typography variant="h6">Support All Currency</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Accept and process payments from all types of currencies.
      </Typography>
    </Box>

    {/* Second Card */}
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center', 
      width: { xs: '100%', md: '350px' } 
    }}>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRX52uFc0q2cZ364EoWn5kaTTH1YRDcYONp60D3GC7RxjWcBGLg"
        alt="Blockchain System"
        style={{ width: '100%', maxWidth: '350px', height: 'auto', marginBottom: '16px' }}
      />
      <Typography variant="h6">Block Chain System</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        How it Works, Benefits, and its Deployment in Financial.
      </Typography>
    </Box>

    {/* Third Card */}
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center', 
      width: { xs: '100%', md: '350px' } 
    }}>
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRX52uFc0q2cZ364EoWn5kaTTH1YRDcYONp60D3GC7RxjWcBGLg"
        alt="Support All Currency"
        style={{ width: '100%', maxWidth: '350px', height: 'auto', marginBottom: '16px' }}
      />
      <Typography variant="h6">Support All Currency</Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Accept and process payments from all types of currencies.
      </Typography>
    </Box>
  </Box>
</Box>


    </Box>
  );
};

export default Blockchain;
