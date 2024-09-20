import { Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <Box 
        component="footer" 
        sx={{
          backgroundColor: '#2b2b2b',
          color: '#fff',
          padding: '20px 0',
          textAlign: 'center',
          marginBottom: '100px', // Leave space for the fixed bottom part
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}
        >
          {/* Links Section */}
          <Box sx={{ flex: 1, padding: '10px', minWidth: '150px' }}>
            <Typography variant="h6">Link</Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              About Us
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              Our Service
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              Affiliate Programme
            </Link>
          </Box>

          {/* Contact Us Section */}
          <Box sx={{ flex: 1, padding: '10px', minWidth: '150px' }}>
            <Typography variant="h6">Contact Us</Typography>
            <Typography>bh@blackholeinfiverse.com</Typography>
            <Typography>9856******</Typography>
            <Typography>Motilal Nagar</Typography>
          </Box>

          {/* Company Section */}
          <Box sx={{ flex: 1, padding: '10px', minWidth: '150px' }}>
            <Typography variant="h6">Company</Typography>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              FAQ
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              Shipping
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              Return
            </Link>
            <Link href="#" color="inherit" sx={{ display: 'block', margin: '5px 0' }}>
              Affiliate Programme
            </Link>
          </Box>

          {/* Follow Us Section */}
          <Box sx={{ flex: 1, padding: '10px', minWidth: '150px' }}>
            <Typography variant="h6">Follow Us</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Fixed Bottom Part */}
      <Box
        sx={{
          height:'70px',
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          display:'flex',
          justifyContent:'center',
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center',
          padding: '20px 0',
          zIndex: 1000, // Make sure it's above other content
        }}
      >
        <Typography sx={{
          fontSize: {
            xs: '1rem',  // for extra small screens (mobile devices)
            sm: '1.5rem',    // for small screens (tablets)
            md: '1.5rem',  // for medium screens (small laptops)
            lg: '1.5rem',    // for large screens (desktops)
          },
        }}>
          © 2024 design and developed by{' '}
          <Typography
            component="span"
            sx={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: {
                xs: '1rem',  // for extra small screens (mobile devices)
                sm: '1.5rem',    // for small screens (tablets)
                md: '1.5rem',  // for medium screens (small laptops)
                lg: '1.5rem',    // for large screens (desktops)
              },
            }}
          >
            Blackhole Infiverse
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
