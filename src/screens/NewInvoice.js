import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

export default function NewInvoice() {
  const [invoice, setInvoice] = useState({
    item: '',
    amount: '',
  });

  const handleChange = (e) => {
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    console.log('Invoice Added:', invoice);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5">New Invoice</Typography>

      <TextField
        name="item"
        label="Item"
        fullWidth
        margin="normal"
        value={invoice.item}
        onChange={handleChange}
        sx={{ borderRadius: '10px' }}
      />

      <TextField
        name="amount"
        label="Amount"
        type="number"
        fullWidth
        margin="normal"
        value={invoice.amount}
        onChange={handleChange}
        sx={{ borderRadius: '10px' }}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: '10px', borderRadius: '20px' }}
        onClick={handleAdd}
      >
        Add Item
      </Button>

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ marginTop: '10px', borderRadius: '20px' }}
      >
        Continue
      </Button>
    </Box>
  );
}
