import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FetchComponent = () => {
  const [inputData, setInputData] = useState({
    pName: "",
    pPrice: "",
    editId: "",
    deleteId: "",
  });
  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGet = async () => {
    try {
      const response = await axios.get(
        "https://p-9x7e.onrender.com/products/products"
      );
      setResponseData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "https://p-9x7e.onrender.com/products/add-product",
        { ...inputData }
      );
      setResponseData(response.data.data);
      window.location.reload();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handlePut = async () => {
    try {
      const updatedData = { ...responseData.find(item => item._id === inputData.editId), ...inputData }; // Merge inputData with existing data
      const response = await axios.put(
        `https://p-9x7e.onrender.com/products/edit-product/${inputData.editId}`,
        { ...updatedData }
      );
      setResponseData(response.data.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://p-9x7e.onrender.com/products/delete-product/${inputData.deleteId}`
      );
      setResponseData(response.data.data);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#ff7043',
      },
    },
    typography: {
      fontFamily: [
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container style={{ backgroundColor: "#333", padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h4" gutterBottom style={{ color: "#fff" }}>
          Fetch Component
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="pName"
              label="Product Name"
              value={inputData.pName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "#fff", backgroundColor: "#555", borderRadius: "5px" } }}
              InputLabelProps={{ style: { color: "#fff" } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="pPrice"
              label="Product Price"
              value={inputData.pPrice}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "#fff", backgroundColor: "#555", borderRadius: "5px" } }}
              InputLabelProps={{ style: { color: "#fff" } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="editId"
              label="Edit ID"
              value={inputData.editId}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "#fff", backgroundColor: "#555", borderRadius: "5px" } }}
              InputLabelProps={{ style: { color: "#fff" } }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="deleteId"
              label="Delete ID"
              value={inputData.deleteId}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "#fff", backgroundColor: "#555", borderRadius: "5px" } }}
              InputLabelProps={{ style: { color: "#fff" } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handlePost} style={{ borderRadius: '20px' }}>
              Add Product
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" onClick={handleDelete} style={{ borderRadius: '20px' }}>
              Delete Product
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handlePut} style={{ borderRadius: '20px' }}>
              Update Product
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleGet} style={{ borderRadius: '20px' }}>
              Get Data
            </Button>
          </Grid>
        </Grid>
        {responseData && (
          <TableContainer component={Paper} style={{ marginTop: 20 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Product Price</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responseData.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.pName}</TableCell>
                    <TableCell>{row.pPrice}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default FetchComponent;
