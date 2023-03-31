// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from '@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from '@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'


import CrmTable from 'views/dashboards/crm/CrmTable'

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12} md={12}>
          <CrmTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
