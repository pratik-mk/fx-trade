import * as React from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { Box, Typography } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'

export default function BasicLineChart() {
  return (
    <Box
      id='root-chart'
      sx={{
        backgroundColor: '#535353',
        borderRadius: '5px',
      }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Typography
          style={{
            marginTop: '10px',
            color: '#FFFFFF',
            fontFamily: 'Space Grotesk',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '20.42px',
            textAlign: 'left',
          }}
        >
          10
        </Typography>
        <Typography
          style={{
            display: 'flex',
            marginTop: '10px',
            color: '#00C287',
            lineHeight: '17.86px',
            fontSize: '16px',
            fontWeight: '400',
            fontFamily: 'Space Grotesk',
          }}
        >
          <Typography>
            <ArrowCircleUpIcon fontSize='small' />
          </Typography>
          <Typography>20%</Typography>
        </Typography>
      </Box>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={266}
        height={166}
      />
    </Box>
  )
}
