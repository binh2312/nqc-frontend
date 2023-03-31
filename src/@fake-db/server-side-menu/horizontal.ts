// ** Mock Adapter
import mock from '@fake-db/mock'

// ** Type import
import { HorizontalNavItemsType } from '@core/layouts/types'

const navigation: HorizontalNavItemsType = [
  {
    icon: 'mdi:home-outline',
    title: 'Dashboards',
    children: [
      {
        icon: 'mdi:chart-donut',
        title: 'CRM',
        path: '/dashboards/crm'
      }
    ]
  },
  {
    title: 'Charts',
    icon: 'mdi:chart-donut',
    children: [
      {
        title: 'Apex',
        icon: 'mdi:chart-line',
        path: '/charts/apex-charts'
      },
      {
        title: 'Recharts',
        icon: 'mdi:chart-bell-curve-cumulative',
        path: '/charts/recharts'
      },
      {
        title: 'ChartJS',
        path: '/charts/chartjs',
        icon: 'mdi:chart-bell-curve'
      }
    ]
  },
]

mock.onGet('/api/horizontal-nav/data').reply(() => {
  return [200, navigation]
})
