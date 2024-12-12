'use client';

import React from 'react';
import { Container, TextField, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs'; // Adjust the import based on your structure
import { paths } from 'src/routes/paths'; // Adjust the import based on your structure

export default function CreateTransferTask() {
  return (
    <Container maxWidth="lg">
      <CustomBreadcrumbs
        heading="Create Transfer Task"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Transfer', href: paths.dashboard.transfer.createtransfer },
        ]}
        action={
          <>
            <Button variant="outlined" style={{ marginLeft: '8px' }}>
              Print
            </Button>
          </>
        }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Typography variant="h4" gutterBottom>
        Create Transfer Task #6079
      </Typography>
      <TextField label="From Warehouse" fullWidth margin="normal" />
      <TextField label="To Warehouse" fullWidth margin="normal" />
      <TextField label="Notes" fullWidth margin="normal" multiline rows={4} />

      <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
        Create Transfer Task
      </Button>

      <Typography variant="h6" style={{ marginTop: '32px' }}>
        Order Details
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Picking Qty</TableCell>
              <TableCell>Total Inventory</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Replace with dynamic data */}
            {[1, 2, 3, 4].map((item) => (
              <TableRow key={item}>
                <TableCell>{item}</TableCell>
                <TableCell>Bawang</TableCell>
                <TableCell>0</TableCell>
                <TableCell>2000</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary">
                    Count Item
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}