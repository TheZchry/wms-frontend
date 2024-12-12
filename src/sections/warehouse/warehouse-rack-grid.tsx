// src/sections/warehouse/warehouse-rack-grid.tsx
import React, { useState } from 'react';
import { Box, Paper, Typography, Select, MenuItem, Stack, Grid } from '@mui/material';
import { RACK_DATA, RackPosition } from '../../_mock/rack';
import WarehouseRackOverview from './warehouse-rack-overview';
import Iconify from 'src/components/iconify';

const levels = ['Level 1', 'Level 2', 'Level 3', 'Level 4'];
const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

type StockStatus = 'atStock' | 'underStock' | 'overStock' | 'outOfStock';

const statusColors: Record<StockStatus, string> = {
  atStock: '#18a45a',
  underStock: '#0092bb',
  overStock: '#e59500',
  outOfStock: '#d93823',
};

const getStockStatus = (itemCount: number, capacity: number): StockStatus => {
  if (itemCount === 0) return 'outOfStock';
  const percentage = (itemCount / capacity) * 100;
  if (percentage > 100) return 'overStock';
  if (percentage >= 75) return 'atStock';
  return 'underStock';
};

const RackGrid = () => {
  const [selectedRack, setSelectedRack] = useState('Rack 1');
  const currentRackData = RACK_DATA[selectedRack];

  const calculateOverviewData = () => {
    const getLevelData = (level: string) => {
      const levelPositions = currentRackData.filter((pos) => pos.level === level);
      return {
        name: level,
        usedStorage: levelPositions.reduce((sum, pos) => sum + pos.itemCount, 0),
        capacity: levelPositions.reduce((sum, pos) => sum + pos.capacity, 0),
        filesCount: 9, // 9 positions per level
        icon: <Iconify icon="solar:box-linear" width={32} />,
      };
    };

    const totalCapacity = currentRackData.reduce((sum, pos) => sum + pos.capacity, 0);
    const totalItems = currentRackData.reduce((sum, pos) => sum + pos.itemCount, 0);

    return {
      data: [
        getLevelData('Level 1'),
        getLevelData('Level 2'),
        getLevelData('Level 3'),
        getLevelData('Level 4'),
      ],
      total: totalItems,
      chart: {
        series: Number(((totalItems / totalCapacity) * 100).toFixed(1)),
        options: {
          colors: ['#18a45a', '#0092bb'],
        },
      },
    };
  };

  const getPositionData = (level: string, column: string): RackPosition | undefined => {
    return currentRackData.find((pos) => pos.level === level && pos.column === column);
  };

  const StockLegend = () => (
    <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: 0.5,
            bgcolor: statusColors.atStock,
          }}
        />
        <Typography variant="caption">At Stock</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: 0.5,
            bgcolor: statusColors.underStock,
          }}
        />
        <Typography variant="caption">Under Stock</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: 0.5,
            bgcolor: statusColors.overStock,
          }}
        />
        <Typography variant="caption">Over Stock</Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: 0.5,
            bgcolor: statusColors.outOfStock,
          }}
        />
        <Typography variant="caption">Out of Stock</Typography>
      </Stack>
    </Stack>
  );

  const overviewData = calculateOverviewData();

  return (
    <Paper sx={{ p: 0, display: 'flex', gap: 2 }}> {/* Remove padding to maximize width */}
      {/* Rack Section */}
      <Box sx={{ flex: 4, overflowX: 'auto' }}> {/* Increase flex value for the rack */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5">{selectedRack}</Typography>
          <Select
            value={selectedRack}
            onChange={(e) => setSelectedRack(e.target.value)}
            size="small"
          >
            <MenuItem value="Rack 1">Rack 1</MenuItem>
            <MenuItem value="Rack 2">Rack 2</MenuItem>
          </Select>
        </Box>

        <StockLegend />

        <Grid container spacing={1}>
          {levels.map((level) => (
            <React.Fragment key={level}>
              <Grid item xs={12}>
                <Typography variant="subtitle1">{level}</Typography>
              </Grid>
              {columns.map((column) => {
                const positionData = getPositionData(level, column);
                const status = positionData
                  ? getStockStatus(positionData.itemCount, positionData.capacity)
                  : 'outOfStock';

                return (
                  <Grid item xs={1.33} key={`${level}-${column}`}>
                    <Paper
                      sx={{
                        height: 60,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: statusColors[status],
                        color: 'white',
                      }}
                    >
                      <Typography sx={{ 
                        color: '#000000',
                        fontWeight: 'bold', 
                        fontSize: '40px',
                      }}>{`${column}${level.slice(-1)}`}</Typography>
                    </Paper>
                  </Grid>
                );
              })}
            </React.Fragment>
          ))}
        </Grid>
      </Box>

      {/* Overview Section on the Right */}
      <Box sx={{ flex: 2 }}> {/* Adjust flex value for the overview */}
        <WarehouseRackOverview
          data={overviewData.data}
          total={overviewData.total}
          chart={overviewData.chart}
          rackName={selectedRack}
        />
      </Box>
    </Paper>
  );
};

export default RackGrid;