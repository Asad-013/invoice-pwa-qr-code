import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Typography, Card, CardContent, CardActions } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const invoices = [
  { id: 1, name: 'AzimuT', date: '27 Jun 2024', amount: 863, status: 'Paid' },
  { id: 2, name: 'Tariq P.', date: '11 Jun 2024', amount: 1720, status: 'Open' },
  { id: 3, name: 'OliveCo', date: '02 Jun 2024', amount: 2167, status: 'Open' },
];

export default function InvoiceList() {
  return (
    <Box sx={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h6" component="h1">
          Welcome, Arina
        </Typography>
        <div>Your wallet: Grey</div>
      </header>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <Box>
          <Typography variant="body2" color="textSecondary">Due Date</Typography>
          <Typography variant="h6">Tomorrow</Typography>
        </Box>
        <Box>
          <Typography variant="body2" color="textSecondary">Total</Typography>
          <Typography variant="h6">$5731.23</Typography>
        </Box>
      </Box>

      <Button
        component={Link}
        to="/new-invoice"
        startIcon={<AddCircleIcon />}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginBottom: '20px', borderRadius: '20px' }}
      >
        New Invoice
      </Button>

      {invoices.map((invoice) => (
        <Card key={invoice.id} sx={{ marginBottom: '20px', borderRadius: '15px' }}>
          <CardContent>
            <Typography variant="h6">{invoice.name}</Typography>
            <Typography color="textSecondary">{invoice.date}</Typography>
            <Typography variant="body2">${invoice.amount} - {invoice.status}</Typography>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              to={`/invoice-details/${invoice.id}`}
              variant="outlined"
              color="primary"
              fullWidth
            >
              View Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
