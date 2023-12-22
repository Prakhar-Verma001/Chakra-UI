import { Grid } from '@mui/material'
import React from 'react'
import TodayReportCard from './TodayReportCard'
import Money from '../Assests1/Images1/default1.png'
import Users from '../Assests1/Images1/outline2.png'
import Clients from '../Assests1/Images1/text3.png'
import Sales from '../Assests1/Images1/default4.png'

const TodayReport = () => {
  return (
    <>
        <Grid container sx={{mb: 0}}>
            <Grid item lg={3} md={6} xs={12} sx={{p: 1}}>
                <TodayReportCard 
                heading="Today's Money"
                amount='$53,000'
                interest='+55%'
                src={Money}
                alt='Money' />
            </Grid>
            <Grid item lg={3} md={6} xs={12} sx={{p: 1}}>
                <TodayReportCard 
                heading="Today's Users"
                amount='2,300'
                interest='+5%' 
                src={Users}
                alt='Users'/>
            </Grid>
            <Grid item lg={3} md={6} xs={12} sx={{p: 1}}>
                <TodayReportCard 
                heading="New Clients"
                amount='+3,052'
                interest='-14%'
                src={Clients}
                alt='Clients' />
            </Grid>
            <Grid item lg={3} md={6} xs={12} sx={{p: 1}}>
                <TodayReportCard 
                heading="Total Sales"
                amount='$173,000'
                interest='+8%' 
                src={Sales}
                alt='Sales' />
            </Grid>
        </Grid>
    </>
  )
}

export default TodayReport