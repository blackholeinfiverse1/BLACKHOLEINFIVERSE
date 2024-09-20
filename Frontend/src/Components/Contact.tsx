import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';

interface ContactData {
  name: string;
  email: string;
  message: string;
  number:string
}

const Contact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData>({
    name: '',
    email: '',
    message: '',
    number:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message,number } = contactData;

    try {
      const response = await axios.post("http://localhost:8000/api/contact", {
        name,
        email,
        message,
        number,

      });
      toast.success("Message sent successfully!", { autoClose: 3000 });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", { autoClose: 3000 });
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212', // Dark background
        padding: { xs: '20px', sm: '40px' }, // Responsive padding
        fontFamily: 'Roboto, Arial, sans-serif', // Professional font family
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '500px' }, // Full width on small screens, fixed width on larger screens
          padding: { xs: '20px', sm: '30px' }, // Responsive padding
          borderRadius: '15px',
          backgroundColor: '#1e1e1e', // Dark grey background
          boxShadow: '0 12px 25px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          transition: 'transform 0.3s ease, opacity 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
            opacity: 0.9,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: '#e0e0e0',
            fontWeight: 'bold',
            paddingBottom: { xs: '15px', sm: '20px' }, // Responsive padding
          }}
        >
          Contact Us
        </Typography>

        <form onSubmit={handleOnSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Your Name"
            type="text"
            name="name"
            value={contactData.name}
            onChange={handleChange}
            sx={{
              marginBottom: { xs: '15px', sm: '20px' },
              '& .MuiInputBase-root': { color: '#e0e0e0' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#424242' },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e' },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e', boxShadow: '0 0 8px #9e9e9e' },
              '& input::placeholder': { color: '#b0b0b0' },
              backgroundColor: '#333', // Slightly darker background
              borderRadius: '8px',
              padding: { xs: '8px', sm: '10px' },
            }}
          />

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Your Email"
            type="email"
            name="email"
            value={contactData.email}
            onChange={handleChange}
            sx={{
              marginBottom: { xs: '15px', sm: '20px' },
              '& .MuiInputBase-root': { color: '#e0e0e0' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#424242' },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e' },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e', boxShadow: '0 0 8px #9e9e9e' },
              '& input::placeholder': { color: '#b0b0b0' },
              backgroundColor: '#333',
              borderRadius: '8px',
              padding: { xs: '8px', sm: '10px' },
            }}
          />
<TextField
            fullWidth
            variant="outlined"
            placeholder="Your Contact Number"
            type="number"
            name="number"
            value={contactData.number}
            onChange={handleChange}
            sx={{
              marginBottom: { xs: '15px', sm: '20px' },
              '& .MuiInputBase-root': { color: '#e0e0e0' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#424242' },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e' },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e', boxShadow: '0 0 8px #9e9e9e' },
              '& input::placeholder': { color: '#b0b0b0' },
              backgroundColor: '#333',
              borderRadius: '8px',
              padding: { xs: '8px', sm: '10px' },
            }}
          />

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Your Message"
            multiline
            rows={4}
            name="message"
            value={contactData.message}
            onChange={handleChange}
            sx={{
              marginBottom: { xs: '15px', sm: '20px' },
              '& .MuiInputBase-root': { color: '#e0e0e0' },
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: '#424242' },
              '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e' },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#9e9e9e', boxShadow: '0 0 8px #9e9e9e' },
              '& input::placeholder': { color: '#b0b0b0' },
              backgroundColor: '#333',
              borderRadius: '8px',
              padding: { xs: '8px', sm: '10px' },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: '100%',
              padding: { xs: '10px', sm: '12px' },
              marginTop: { xs: '15px', sm: '20px' },
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
            Send Message
          </Button>
        </form>

        <Box sx={{ textAlign: 'center', marginTop: { xs: '15px', sm: '20px' } }}>
          <Typography sx={{ color: '#b0b0b0', fontSize: { xs: '12px', sm: '14px' }, marginTop: { xs: '8px', sm: '10px' } }}>
            We value your privacy and will not share your information.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
