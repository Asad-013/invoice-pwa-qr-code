import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography, Box, Card, CardContent } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react'; // Import QRCodeCanvas

export default function InvoiceDetails() {
  const { id } = useParams();

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Card sx={{ padding: '20px', borderRadius: '15px' }}>
        <CardContent>
          <Typography variant="h5">Invoice #{id}</Typography>
          <Typography variant="h6">Total Amount: $3782.00</Typography>
          <Typography>Status: Open</Typography>
          <Typography>Invoice Date: 27 Jun 2024</Typography>

          <Button variant="contained" color="primary" sx={{ marginTop: '10px', borderRadius: '20px' }}>
            Mark as Paid
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button variant="outlined" color="primary" sx={{ borderRadius: '20px' }} component={Link} to="/">
              Edit
            </Button>
            <Button variant="outlined" color="primary" sx={{ borderRadius: '20px' }} component={Link} to="/">
              Share
            </Button>
          </Box>

          <Box sx={{ marginTop: '30px', textAlign: 'center' }}>
            <Typography>Scan to view invoice:</Typography>
            <QRCodeCanvas value={`https://my-invoice-app.com/invoice/${id}`} size={200} /> {/* Updated to QRCodeCanvas */}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
