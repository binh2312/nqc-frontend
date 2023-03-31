// ** React Import
import { ReactElement } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from '@core/components/icon'

// ** Types Imports
import { ThemeColor } from '@core/layouts/types'

// ** Custom Components
import CustomChip from '@core/components/mui/chip'
import CustomAvatar from '@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from '@core/utils/get-initials'

interface TableBodyRowType {
  id: number
  name: string
  email: string
  username: string
  avatarSrc?: string
  status: 'active' | 'pending' | 'inactive'
  role: 'admin' | 'editor' | 'author' | 'maintainer' | 'subscriber'
}

interface CellType {
  row: TableBodyRowType
}

interface RoleObj {
  [key: string]: {
    icon: ReactElement
  }
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const roleObj: RoleObj = {
  admin: {
    icon: (
      <Box component='span' sx={{ display: 'flex', mr: 2, color: 'error.main' }}>
        <Icon icon='mdi:laptop' />
      </Box>
    )
  },
  author: {
    icon: (
      <Box component='span' sx={{ display: 'flex', mr: 2, color: 'warning.main' }}>
        <Icon icon='mdi:cog' />
      </Box>
    )
  },
  maintainer: {
    icon: (
      <Box component='span' sx={{ display: 'flex', mr: 2, color: 'success.main' }}>
        <Icon icon='mdi:chart-donut' />
      </Box>
    )
  },
  editor: {
    icon: (
      <Box component='span' sx={{ display: 'flex', mr: 2, color: 'info.main' }}>
        <Icon icon='mdi:pencil-outline' />
      </Box>
    )
  },
  subscriber: {
    icon: (
      <Box component='span' sx={{ display: 'flex', mr: 2, color: 'primary.main' }}>
        <Icon icon='mdi:account-outline' />
      </Box>
    )
  }
}

const statusObj: StatusObj = {
  active: { color: 'success' },
  pending: { color: 'warning' },
  inactive: { color: 'secondary' }
}

const rows: TableBodyRowType[] = [
  {
    id: 1,
    role: 'admin',
    status: 'pending',
    name: 'Jordan Stevenson',
    username: '@jstevenson5c',
    email: 'susanna.Lind57@gmail.com',
    avatarSrc: '/images/avatars/1.png'
  },
  {
    id: 2,
    role: 'editor',
    status: 'active',
    name: 'Robert Crawford',
    username: '@rcrawford1d',
    avatarSrc: '/images/avatars/3.png',
    email: 'estelle.Bailey10@gmail.com'
  },
  {
    id: 3,
    role: 'author',
    status: 'inactive',
    name: 'Lydia Reese',
    username: '@lreese3b',
    email: 'milo86@hotmail.com',
    avatarSrc: '/images/avatars/2.png'
  },
  {
    id: 4,
    role: 'editor',
    status: 'pending',
    name: 'Richard Sims',
    username: '@rsims6f',
    email: 'lonnie35@hotmail.com',
    avatarSrc: '/images/avatars/5.png'
  },
  {
    id: 5,
    status: 'active',
    role: 'maintainer',
    name: 'Lucile Young',
    username: '@lyoung4a',
    email: 'ahmad_Collins@yahoo.com',
    avatarSrc: '/images/avatars/4.png'
  },
  {
    id: 6,
    role: 'editor',
    status: 'pending',
    name: 'Francis Frank',
    username: '@ffrank7e',
    avatarSrc: '/images/avatars/7.png',
    email: 'tillman.Gleason68@hotmail.com'
  },
  {
    id: 7,
    role: 'subscriber',
    status: 'inactive',
    name: 'Phoebe Patterson',
    email: 'otho21@gmail.com',
    username: '@ppatterson2g',
    avatarSrc: '/images/avatars/8.png'
  },
  {
    id: 8,
    status: 'active',
    role: 'subscriber',
    name: 'Curtis Underwood',
    username: '@cunderwood8h',
    avatarSrc: '/images/avatars/3.png',
    email: 'florencio.Little@hotmail.com'
  }
]

const renderUserAvatar = (row: TableBodyRowType) => {
  if (row.avatarSrc) {
    return <CustomAvatar src={row.avatarSrc} sx={{ mr: 3, width: 34, height: 34 }} />
  } else {
    return (
      <CustomAvatar skin='light' sx={{ mr: 3, width: 34, height: 34, fontSize: '.8rem' }}>
        {getInitials(row.name ? row.name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const columns: GridColDef[] = [
  {
    flex: 0.3,
    minWidth: 100,
    field: 'ticket_no',
    headerName: 'Ticket No',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'created_at',
    headerName: 'Created At',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.25,
    field: 'name',
    minWidth: 100,
    headerName: 'User',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderUserAvatar(row)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
              {row.name}
            </Typography>
            <Typography variant='caption' sx={{ lineHeight: 1.6667 }}>
              {row.username}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'test_case',
    headerName: 'Test Case',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'screen',
    headerName: 'Screen',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'description',
    headerName: 'Description',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'type',
    headerName: 'Type',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'step',
    headerName: 'Step',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'due_date',
    headerName: 'Due Date',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'assign',
    headerName: 'Asignee',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'in_charge',
    headerName: 'Person In Charge',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'verify',
    headerName: 'Verify',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.15,
    minWidth: 10,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => (
      <CustomChip
        skin='light'
        size='small'
        label={row.status}
        color={statusObj[row.status].color}
        sx={{ textTransform: 'capitalize', '& .MuiChip-label': { px: 2.5, lineHeight: 1.385 } }}
      />
    )
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'customer_verify',
    headerName: 'Customer Verify',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
  {
    flex: 0.3,
    minWidth: 100,
    field: 'finish',
    headerName: 'End Date',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>test</Typography>
  },
]

const CrmTable = () => {
  return (
    <Card>
      <DataGrid autoHeight hideFooter rows={rows} columns={columns} disableSelectionOnClick pagination={undefined} />
    </Card>
  )
}

export default CrmTable
