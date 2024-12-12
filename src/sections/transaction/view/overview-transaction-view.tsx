'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';



// hooks
import { useMockedUser } from 'src/hooks/use-mocked-user';
// _mock
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from 'src/_mock';
// components
import { useSettingsContext } from 'src/components/settings';
// assets
import { SeoIllustration } from 'src/assets/illustrations';
//
import TransactionWidget from '../transaction-widget';
import TransactionWelcome from '../transaction-welcome';
import TransactionFeatured from '../transaction-featured';
import TransactionNewInvoice from '../transaction-new-invoice';
import TransactionTopAuthors from '../transaction-top-authors';
import TransactionTopRelated from '../transaction-top-related';
import TransactionAreaInstalled from '../transaction-area-installed';
import TransactionWidgetSummary from '../transaction-widget-summary';
import TransactionCurrentDownload from '../transaction-current-download';
import TransactionTopInstalledCountries from '../transaction-top-installed-countries';
import TransactionDataActivity from '../transaction-data-activity'
import TransactionConversionRates from '../transaction-conversion-rates';


// ----------------------------------------------------------------------

export default function OverviewTransactionView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  const settings = useSettingsContext();

  const GB = 1000000000 * 24;

const TIME_LABELS = {
  week: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year: ['2018', '2019', '2020', '2021', '2022'],
};

  

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={6} md={12}>
          <TransactionWelcome
            title={`Warehouse Dashboard`}
          />
        </Grid>
        
        
        <Grid xs={6} md={4}>
          <TransactionWidgetSummary
            title="Warehouse"
            icon=''        
            total={18765}  
            sx={{
             
              bgcolor: '#98FB98'
              }}
              
          />
        </Grid>

        <Grid xs={6} md={4}>
          <TransactionWidgetSummary
            title="item"
            icon=''
            total={4876}
            sx={{
             
              bgcolor: '#98FB98'
              }}
          />
        </Grid>
       

        <Grid xs={6} md={4}>
          <TransactionWidgetSummary
            title="outbound quantity"
            icon=''
            total={678}
            sx={{
             
              bgcolor: '#98FB98'
              }}
          />
        </Grid>
        
        <Grid xs={6} md={4}>
          <TransactionWidgetSummary
            title="inbound quantity"
            icon=''
            total={678}
            sx={{
              
              bgcolor: '#98FB98'
              }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <TransactionCurrentDownload
            title="Current Download"
            chart={{
              series: [
                { label: 'Mac', value: 12244 },
                { label: 'Window', value: 53345 },
                { label: 'iOS', value: 44313 },
                { label: 'Android', value: 78343 },
              ],
            }}
          />
        </Grid>
       
            <Grid xs={12} md={12} lg={7}>
          <TransactionAreaInstalled
            title="Inbound Shipment"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Asia',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'America',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Asia',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'America',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <TransactionConversionRates
            title="Order Status"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={12} lg={7}>
          <TransactionAreaInstalled
            title="Outbound Shipment  "
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  year: '2019',
                  data: [
                    {
                      name: 'Asia',
                      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 35, 51, 49],
                    },
                    {
                      name: 'America',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 13, 56, 77],
                    },
                  ],
                },
                {
                  year: '2020',
                  data: [
                    {
                      name: 'Asia',
                      data: [51, 35, 41, 10, 91, 69, 62, 148, 91, 69, 62, 49],
                    },
                    {
                      name: 'America',
                      data: [56, 13, 34, 10, 77, 99, 88, 45, 77, 99, 88, 77],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <TransactionConversionRates
            title="Order Status"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>       
      </Grid>
    </Container>
  );
}
