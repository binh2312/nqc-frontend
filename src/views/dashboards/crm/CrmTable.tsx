// ** React Import
import { ReactElement, useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useUserHooks } from "@hooks/index";

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

// const statusObj: StatusObj = {
//   active: { color: 'success' },
//   pending: { color: 'warning' },
//   inactive: { color: 'secondary' }
// }

const renderUserAvatar = (row: any) => {
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
    minWidth: 250,
    field: 'ticket_no',
    headerName: 'Ticket No',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.ticket_no}</Typography>
  },
  {
    flex: 0.3,
    minWidth: 250,
    field: 'created_at',
    headerName: 'Created At',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.created_at}</Typography>
  },
  {
    flex: 0.25,
    field: 'name',
    minWidth: 250,
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
    flex: 0.5,
    minWidth: 250,
    field: 'test_case',
    headerName: 'Test Case',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.test_case}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'screen',
    headerName: 'Screen',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.screen}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'description',
    headerName: 'Description',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.description}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'type',
    headerName: 'Type',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.type}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'step',
    headerName: 'Step',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.step}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'due_date',
    headerName: 'Due Date',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.due_date}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'assign',
    headerName: 'Asignee',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.assign}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'in_charge',
    headerName: 'Person In Charge',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.in_charge}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'verify',
    headerName: 'Verify',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.verify}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => (
      <CustomChip
        skin='light'
        size='small'
        label={row.status}
        // color={statusObj[row.status].color}
        sx={{ textTransform: 'capitalize', '& .MuiChip-label': { px: 2.5, lineHeight: 1.385 } }}
      />
    )
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'customer_verify',
    headerName: 'Customer Verify',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.customer_verify}</Typography>
  },
  {
    flex: 0.5,
    minWidth: 250,
    field: 'finish',
    headerName: 'End Date',
    renderCell: ({ row }: CellType) => <Typography variant='body2'>{row.finish}</Typography>
  },
]

const CrmTable = () => {
  const [rows, setRows] = useState([]);
  // const { useFetchMe } = useUserHooks();

  // const { data } = useFetchMe();

  useEffect(() => {
    let data = fetch("http://localhost:8000/api/get-issues").then((res) => {
      const result = res.json().then((response) => {
        setRows(response);
      });
      return result;
    })   
  },[])
  return (
    <Card>
      <DataGrid autoHeight hideFooter rows={rows} columns={columns} disableSelectionOnClick pagination={undefined} />
    </Card>
  )
}

export default CrmTable
