// ** Type import
import { HorizontalNavItemsType } from '@core/layouts/types'

const navigation = (): HorizontalNavItemsType => {
  return [
    {
      icon: 'mdi:home-outline',
      title: 'Dashboards',
      children: [
        {
          icon: 'mdi:chart-donut',
          title: 'CRM',
          path: '/dashboards/crm'
        },
      ]
    },
    {
      title: 'Charts',
      icon: 'mdi:chart-donut',
      children: [
        {
          title: 'Ticket Management',
          icon: 'mdi:chart-bell-curve-cumulative',
          path: '/charts/recharts'
        }
      ]
    },
  ]
}

export default navigation
