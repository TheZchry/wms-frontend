'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { RACK_DATA } from 'src/_mock/rack';




// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// _mock
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import { SeoIllustration } from 'src/assets/illustrations';
//
import WarehouseWelcome from '../warehouse-welcome';
import WarehouseRackOverview from '../warehouse-rack-overview';
import RackGrid from '../warehouse-rack-grid';



// ----------------------------------------------------------------------

export default function OverviewWarehouseView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  const GB = 1000000000 * 24;

const TIME_LABELS = {
  week: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year: ['2018', '2019', '2020', '2021', '2022'],
};

const rack1Data = RACK_DATA['Rack 1'];
  
  const levelStats = rack1Data.reduce((acc, position) => {
    const level = position.level;
    if (!acc[level]) {
      acc[level] = {
        count: 0,
        items: 0,
        capacity: 0
      };
    }
    acc[level].count += 1;
    acc[level].items += position.itemCount;
    acc[level].capacity += position.capacity;
    return acc;
  }, {} as Record<string, { count: number; items: number; capacity: number }>);

  const totalItems = Object.values(levelStats).reduce((sum, stat) => sum + stat.items, 0);
  const totalCapacity = Object.values(levelStats).reduce((sum, stat) => sum + stat.capacity, 0);


return (
  <Container maxWidth={settings.themeStretch ? false : 'xl'}>
    <Grid container spacing={3}>
      <Grid xs={6} md={12}>
        
         <Typography variant='h4'>
          STORAGE AREA
         </Typography>
        
      </Grid>   

      {/* Wrap both components in a Paper component */}
      <Grid xs={12}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.card,
          }}
        >
         <Grid container spacing={5} justifyContent="flex-start">
    <Grid xs={12} md={12}>  {/* Mengubah md dari 9 ke 6 untuk membuat lebih kecil dan ke kiri */}
        <RackGrid />
    </Grid>


            
          </Grid>
        </Paper>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid xs={6} md={12}>
        
         <Typography variant='h4'>
          RECEIVING AREA (TEMPORARY STORAGE)
         </Typography>
        
      </Grid>   

      {/* Wrap both components in a Paper component */}
      <Grid xs={12}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.card,
          }}
        >
         <Grid container spacing={5} justifyContent="flex-start">
    <Grid xs={12} md={12}>  {/* Mengubah md dari 9 ke 6 untuk membuat lebih kecil dan ke kiri */}
        <RackGrid />
    </Grid>

            
            
          </Grid>

          
        </Paper>
      </Grid>
    </Grid>

    <Grid container spacing={3}>
      <Grid xs={6} md={12}>
        
         <Typography variant='h4'>
         SHIPPING AREA
         </Typography>
        
      </Grid>   

      {/* Wrap both components in a Paper component */}
      <Grid xs={12}>
        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.card,
          }}
        >
         <Grid container spacing={5} justifyContent="flex-start">
    <Grid xs={12} md={12}>  {/* Mengubah md dari 9 ke 6 untuk membuat lebih kecil dan ke kiri */}
        <RackGrid />
    </Grid>

            
            
          </Grid>

          
        </Paper>
      </Grid>
    </Grid>
    
  </Container>

  

  
);
}