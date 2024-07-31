import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import DataCollection from '../DataCollections/DataCollection'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from '@mui/material'
import './Style.css'
import BasicLineChart from '../Charts/BasicLineChart'

import { Link } from 'react-router-dom'
import CandleIcon from '@mui/icons-material/CandlestickChart'

import data from './DashboardData.json'
import { entities } from './constant'

const DashboardTable = () => {
  return (
    <DashboardLayout title={'Dashboard'}>
      <Box
        sx={{
          overflowY: 'auto',
          maxHeight: 444,
        }}
      >
        <TableContainer
          component={Paper}
          className='tableContainer'
          style={{ backgroundColor: '#2b2b2b' }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {entities.map((entity, index) => (
                  <TableCell
                    style={{ color: 'white' }}
                    id={`index ${index}`}
                  >
                    {entity}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#333' : '#2b2b2b',
                  }}
                >
                  <TableCell style={{ color: 'white' }}>
                    {row.Account}
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    <Link
                      to={`/candle/${row['Magic Number']}`}
                      style={{ color: 'yellow', textDecoration: 'none' }}
                    >
                      {row['Magic Number']}
                      <CandleIcon style={{ marginRight: '5px' }} />
                    </Link>
                  </TableCell>
                  <TableCell
                    style={{ color: row['Avg Lose'] < 0 ? 'red' : 'green' }}
                  >
                    {row['Avg Lose']}
                  </TableCell>
                  <TableCell
                    style={{
                      color: row['Avg.Loss Pips'] < 0 ? 'red' : 'green',
                    }}
                  >
                    {row['Avg.Loss Pips']}
                  </TableCell>
                  <TableCell
                    style={{ color: row['Avg Net Pips'] < 0 ? 'red' : 'green' }}
                  >
                    {row['Avg Net Pips']}
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    {row['Avg Trade']}
                  </TableCell>
                  <TableCell style={{ color: 'white' }}>
                    {row['Avg Trade Time']}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        sx={{
          display: 'flex',
          height: '400px',
          width: '100%',
        }}
      >
        {/* Line chart Box */}
        <Box
          sx={{
            flexWrap: 'wrap',
            width: '65%',
            backgroundColor: '#111111',
            marginTop: '40px',
            overflowY: 'scroll',
            gap: '8px',
            marginRight: '25px',
          }}
        >
          <Box
            sx={{
              margin: '20px',
            }}
          >
            <Typography>Selected EAs PF Graph</Typography>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-around',
                marginLeft: '10px',
              }}
            >
              <BasicLineChart />
              <BasicLineChart />
              <BasicLineChart />
            </Box>
            <Box
              sx={{
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-around',
                marginLeft: '10px',
              }}
            >
              <BasicLineChart />
              <BasicLineChart />
              <BasicLineChart />
            </Box>
          </Box>
        </Box>
        {/* Data Colection Box */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '30%',
            backgroundColor: '#111111',
            marginTop: '40px',
            overflowY: 'scroll',
            marginRight: '20px',
          }}
        >
          <DataCollection />
        </Box>
      </Box>
    </DashboardLayout>
  )
}

export default DashboardTable
