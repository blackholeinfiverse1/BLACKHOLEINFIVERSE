import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth0 } from "@auth0/auth0-react";

interface UserData {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = userData;

    try {
      const response = await axios.post("http://localhost:8000/api/createuser", {
        name,
        email,
        password,
      });
      toast.success("Registration successful", { autoClose: 3000 });
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || "Please enter valid values";
        toast.error(message, { autoClose: 3000 });
      } else {
        toast.error("An unexpected error occurred", { autoClose: 3000 });
      }
    }
  };

  const handleGoogleSuccess = async (response: any) => {
    const credential = response.credential;
    try {
      const res = await axios.post("http://localhost:8000/api/auth/google", {
        token: credential,
      });
      toast.success("Google login successful", { autoClose: 3000 });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Google login failed", { autoClose: 3000 });
    }
  };

  const handleGoogleFailure = () => {
    toast.error("Google login failed", { autoClose: 3000 });
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        fontFamily: 'Roboto, Arial, sans-serif',
      }}
    >
      <Box
        sx={{
          width: { xs: '95%', sm: '400px' },
          padding: '30px',
          borderRadius: '15px',
          backgroundColor: '#1e1e1e',
          boxShadow: '0 12px 25px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#e0e0e0',
            fontWeight: 'bold',
            paddingBottom: '20px',
          }}
        >
          Sign Up
        </Typography>

        <form onSubmit={handleOnSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Name"
            type="text"
            onChange={handleChange}
            name="name"
            value={userData.name}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            name="email"
            value={userData.email}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            name="password"
            value={userData.password}
            sx={{ marginBottom: '20px' }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '100%',
              marginTop: '20px',
            }}
          >
            Register
          </Button>
        </form>

        {/* Google Login Button */}
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />

        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Link href="/login" sx={{ color: '#e0e0e0', fontSize: '16px', textDecoration: 'none' }}>
            Already a user? <b>Click Here</b>
          </Link>
          <Typography sx={{ color: '#b0b0b0', fontSize: '14px', marginTop: '10px' }}>
            I agree to the terms & conditions
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
