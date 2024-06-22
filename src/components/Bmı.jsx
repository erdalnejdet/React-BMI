import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BMI() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      toast.error('Weight and Height cannot be empty');
      return;
    }
    const bmiFormula = (weight/(height*height)*703);
    setBmi(bmiFormula.toFixed(2))
    if (bmiFormula > 25) {
      toast.warn('You are overweight');
    } else if (bmiFormula >= 18.5 && bmiFormula <= 25) {
      toast.success('You are healthy');
    } else {
      toast.info('You are underweight, seek support');
    }
  };

  const Reload = ()=>{
setAge('');
setWeight('');
setHeight('');
setBmi('');
  }

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleCalculate} sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          BMI Calculator
        </Typography>
        <TextField
          label="Age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Weight (kg)"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <TextField
          label="Height (cm)"
          name="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          fullWidth
          margin="normal"
          type="number"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          Calculate
        </Button>
     
       
      </Box>
      <Button onClick={Reload} variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          Reload
        </Button>
        {bmi && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            Your BMI is: {bmi}
    
            
          </Typography>
        )}
            {bmi && (
          <Typography variant="h6" sx={{ mt: 2 }}>

            your Age is : {age}
            
          </Typography>
        )}
    </Container>
  );
}

export default BMI;
