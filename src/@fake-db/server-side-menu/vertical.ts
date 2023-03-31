// ** Mock Adapter
import mock from '@fake-db/mock'

// ** Type import
import { VerticalNavItemsType } from '@core/layouts/types'

const navigation: VerticalNavItemsType = [
  {
    title: 'Dashboards',
    icon: 'mdi:home-outline',
    badgeContent: 'new',
    badgeColor: 'error',
    children: [
      {
        title: 'CRM',
        path: '/dashboards/crm'
      },
    ]
  },
  {
    sectionTitle: 'Charts & Misc'
  },
  {
    title: 'Charts',
    icon: 'mdi:chart-donut',
    children: [
      {
        title: 'Apex',
        path: '/charts/apex-charts'
      },
      {
        title: 'Recharts',
        path: '/charts/recharts'
      },
      {
        title: 'ChartJS',
        path: '/charts/chartjs'
      }
    ]
  },
]

mock.onGet('/api/vertical-nav/data').reply(() => {
  return [200, navigation]
})
