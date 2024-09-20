import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography, Link } from '@mui/material';

interface LoginData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginData;

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("authtoken", response.data.token); // Assuming token is returned
        toast.success("Login successful");
        navigate("/"); // Redirect to home
      }
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212', // Dark background for contrast
        fontFamily: 'Roboto, Arial, sans-serif', // Professional font family
      }}
    >
      <Box
        sx={{
          width: { xs: '95%', sm: '380px' },
          padding: '20px',
          backgroundColor: '#1e1e1e', // Dark grey background
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            padding: '15px',
            color: '#e0e0e0',
            fontWeight: 'bold',
          }}
        >
          Login
        </Typography>

        <form onSubmit={handleOnSubmit} style={{ width: '100%' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder='Email'
            type='email'
            onChange={handleChange}
            name='email'
            value={loginData.email}
            sx={{
              marginBottom: '15px',
              backgroundColor: '#333',
              '& .MuiInputBase-root': { borderColor: '#666' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#999' },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#aaa' },
              '& input::placeholder': { color: '#ccc' },
              borderRadius: '8px',
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            placeholder='Password'
            type='password'
            onChange={handleChange}
            name='password'
            value={loginData.password}
            sx={{
              marginBottom: '20px',
              backgroundColor: '#333',
              '& .MuiInputBase-root': { borderColor: '#666' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#999' },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#aaa' },
              '& input::placeholder': { color: '#ccc' },
              borderRadius: '8px',
            }}
          />
          <Button
            type='submit'
            variant="contained"
            sx={{
              width: '100%',
              padding: '12px',
              marginTop: '20px',
              borderRadius: '30px',
              backgroundColor: '#616161',
              color: '#e0e0e0',
              border: '2px solid #424242',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                backgroundColor: '#757575',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              },
              '&:active': {
                backgroundColor: '#494949',
              },
            }}
          >
            Login
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Link href='/signup' sx={{ color: '#ccc', fontSize: '16px', textDecoration: 'none', '&:hover': { color: '#e0e0e0' } }}>
            New Account? <b>Click Here</b>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
