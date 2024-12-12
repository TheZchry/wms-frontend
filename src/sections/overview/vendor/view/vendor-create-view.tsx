'use client';

import React from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs'; // Adjust the import based on your structure
import { paths } from 'src/routes/paths'; // Adjust the import based on your structure

export default function CreateVendor() {
  return (
    <Container maxWidth="lg">
      {/* Breadcrumbs */}
      <CustomBreadcrumbs
        heading="Create A New Vendor"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Vendor', href: paths.dashboard.vendor.root },
          { name: 'New Vendor' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      {/* Form Section */}
      <Typography variant="h6" gutterBottom>
        Details
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Name, Email and Phone....
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Vendor Name" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Phone" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Account" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Notes" fullWidth margin="normal" multiline rows={4} />
        </Grid>
      </Grid>

      {/* Address Section */}
      <Typography variant="h6" style={{ marginTop: '32px' }}>
        Location
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Address 1" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Address 2" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" fullWidth margin="normal" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Country" fullWidth margin="normal" />
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Button variant="contained" color="secondary" style={{ marginTop: '16px' }}>
        Create Vendor
      </Button>
    </Container>
  );
}