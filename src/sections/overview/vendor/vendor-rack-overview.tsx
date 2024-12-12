import { ApexOptions } from 'apexcharts';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Card, { CardProps } from '@mui/material/Card';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
// utils
// components
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  total: number;
  rackName: string;
  data: {
    name: string;
    usedStorage: number;
    capacity: number;
    filesCount: number;
    icon: React.ReactNode;
  }[];
  chart: {
    colors?: string[];
    series: number;
    options?: ApexOptions;
  };
}

export default function WarehouseRackOverview({ data, total, chart, rackName, ...other }: Props) {
  const theme = useTheme();

  const totalCapacity = data.reduce((sum, item) => sum + item.capacity, 0);
  const percentage = Number(((total / totalCapacity) * 100).toFixed(1));

  const { colors = [theme.palette.primary.main, theme.palette.primary.dark], series, options } = chart;

  const chartOptions = useChart({
    chart: {
      offsetY: -16,
      sparkline: {
        enabled: true,
      },
    },
    grid: {
      padding: {
        top: 24,
        bottom: 24,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '56%',
        },
        dataLabels: {
          name: {
            offsetY: 8,
          },
          value: {
            offsetY: -40,
            formatter: (value) => `${value}%`
          },
          total: {
            // Ubah label total
            label: `${percentage}%${rackName}`,
            color: theme.palette.text.disabled,
            fontSize: theme.typography.body2.fontSize as string,
            fontWeight: theme.typography.body2.fontWeight,
          },
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <Chart type="radialBar" series={[series]} options={chartOptions} height={360} />

      <Stack spacing={3} sx={{ px: 3, pb: 5 }}>
        {data.map((category) => (
          <Stack key={category.name} spacing={2} direction="row" alignItems="center">
            <Box sx={{ width: 40, height: 40 }}>{category.icon}</Box>

            <ListItemText
              primary={category.name}
              // Ubah format secondary text
              secondary={`${category.filesCount} positions`}
              secondaryTypographyProps={{
                mt: 0.5,
                component: 'span',
                typography: 'caption',
                color: 'text.disabled',
              }}
            />

            {/* Ubah format jumlah item */}
            <Box sx={{ typography: 'subtitle2' }}> {category.usedStorage} items </Box>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}
