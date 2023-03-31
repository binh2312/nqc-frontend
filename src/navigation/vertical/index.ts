// ** Type import
import { VerticalNavItemsType } from '@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
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
          title: 'Ticket Management',
          path: '/charts/recharts'
        },
      ]
    },
  ]
}

export default navigation
