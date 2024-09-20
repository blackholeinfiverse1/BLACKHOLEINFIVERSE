import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import detectEthereumProvider from '@metamask/detect-provider';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import bbImage from '../assets/logo.png'; // Assuming your logo path

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [provider, setProvider] = useState<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isAuthenticated = !!localStorage.getItem('authtoken');

  useEffect(() => {
    const connect = async () => {
      const detectedProvider = await detectEthereumProvider();
      if (detectedProvider) {
        setProvider(detectedProvider);
        console.log('MetaMask detected!');
      } else {
        console.log('Please install MetaMask!');
      }
    };
    connect();
  }, []);

  const handleClick = () => {
    if (isAuthenticated) {
      localStorage.removeItem('authtoken');
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#8f827b',
        zIndex: theme => theme.zIndex.drawer + 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={bbImage}
          alt="Logo"
          sx={{
            width: 'auto',
            height: '60px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        />

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            width: '60%',
            justifyContent: 'space-around',
          }}
        >
          {[ '/game', '/robotics', '/blockchain','/about','/contact'].map((path, index) => (
            <Typography
              key={index}
              sx={{
                fontSize:"17px",
                color: isActive(path) ? '#0dcaf0' : '#fffdfc',
                fontWeight: 'bold',
                cursor: 'pointer',
                position: 'relative',
                '&:hover::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: '#0dcaf0',
                },
              }}
              onClick={() => handleNavigate(path)}
            >
              {path === '/signup' ? 'Register' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </Typography>
          ))}

          {/* Authenticated/Unauthenticated Button */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: isAuthenticated ? 'red' : 'green', // Red for Logout, Green for Login
            }}
            onClick={handleClick}
          >
            <Typography
              sx={{
                fontSize:"17px",
                color: isAuthenticated ? 'red' : 'cyan',
                fontWeight: 'bold',
              }}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </Typography>
          </Box>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Dropdown Menu with Smooth Animation */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: 'black',
              color: 'white',
              opacity: anchorEl ? 1 : 0,
              transform: anchorEl ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease', // Smooth transition for fade and slide
            },
          }}
        >
          {['/game', '/robotics', '/blockchain','/about','/contact'].map((path, index) => (
            <MenuItem
              key={index}
              onClick={() => handleNavigate(path)}
              sx={{
                color: isActive(path) ? '#0dcaf0' : 'white',
                transition: 'color 0.3s ease', // Smooth color transition
                '&:hover': {
                  backgroundColor: 'gray',
                },
              }}
            >
              {path === '/signup' ? 'Register' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </MenuItem>
          ))}

          {/* Authenticated/Unauthenticated Menu Item */}
          <MenuItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color: isAuthenticated ? 'red' : 'blue',
              transition: 'color 0.3s ease',
              '&:hover': {
                backgroundColor: 'gray',
              },
            }}
            onClick={handleClick}
          >
            <Typography
              sx={{
                color: isAuthenticated ? 'red' : 'cyan',
                fontWeight: 'bold',
              }}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
