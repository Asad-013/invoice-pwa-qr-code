import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoiceList from './screens/InvoiceList';
import NewInvoice from './screens/NewInvoice';
import InvoiceDetails from './screens/InvoiceDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

// Create dark theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1de9b6', // Custom green
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9e9e9e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/new-invoice" element={<NewInvoice />} />
          <Route path="/invoice-details/:id" element={<InvoiceDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
