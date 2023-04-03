import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@material-ui/core";

//  Third Party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps, Legend } from 'recharts'

interface Props {
  direction: 'ltr' | 'rtl'
}

const InitialData: any = [
  { total_tickets: 280, date: '7/12', completed_tickets: 6 },
  { total_tickets: 200, date: '8/12', completed_tickets: 12 },
  { total_tickets: 220, date: '9/12', completed_tickets: 20 },
  { total_tickets: 180, date: '10/12', completed_tickets: 30 },
  { total_tickets: 270, date: '11/12', completed_tickets: 43 },
  { total_tickets: 250, date: '12/12',completed_tickets: 50 },
  { total_tickets: 220, date: '13/12',completed_tickets: 52 },
  { total_tickets: 180, date: '14/12',completed_tickets: 56 },
  { total_tickets: 160, date: '15/12',completed_tickets: 61},
  { total_tickets: 130, date: '16/12',completed_tickets: 63 },
  { total_tickets: 100, date: '17/12',completed_tickets: 67 },
]

const RechartsLineChart = ({ direction }: Props) => {
  const [data, setData] = useState([]);
  const [reportType, setReportType] = useState("all");

  useEffect(() => {
     fetch("http://localhost:8000/api/get-issues-total").then((res) => {
      const result = res.json().then((response) => {
        switch (reportType) {
          case "all":
            setData(response);
            break;
          case "30":
            setData(response.slice(response.length - 30));
            break;
          case "7":
            setData(response.slice(response.length - 7));
            break;
          default:
             setData(response);
            break;
        }
      });
    })
  }, [reportType]);

  return (
    <>
    <Card>
      <CardHeader
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
        action={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <ButtonGroup
        size="small"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          color={reportType === "all" ? "secondary" : ""}
          onClick={() => setReportType("all")}
        >
          Tất cả
        </Button>
        <Button
          color={reportType === "30" ? "secondary" : ""}
          onClick={() => setReportType("30")}
        >
          30 ngày
        </Button>
        <Button
          color={reportType === "7" ? "secondary" : ""}
          onClick={() => setReportType("7")}
        >
          7 ngày
        </Button>
      </ButtonGroup>
    </Box>
        }
      />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <LineChart height={350} data={data} style={{ direction }} margin={{ left: -20 }}>
              <CartesianGrid />
              <XAxis dataKey='date' reversed={direction === 'rtl'} />
              <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
              <Tooltip/>
              <Legend/>
              <Line dataKey='total_tickets' stroke='#ff9f43' strokeWidth={3} />
              <Line dataKey='completed_tickets' stroke='blue' strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
    </>
  )
}

export default RechartsLineChart