import { Grid } from '@mui/material'
import React from 'react'
import TodayReport from '../Components/TodayReport'
import ArticleGrid from '../Components/ArticleGrid'
import SideBar from '../Components/SideBar'
import Header from '../Components/Header'
import Stats from '../Components/Stats'
import Footer from '../Components/Footer'
import TableList from '../Components/TableList'

const DashboardPage = () => {
  return (
    <>  
        <Header />
        <Grid container sx={{bgcolor: '#F8F9FA'}}>
            <Grid item lg={2} display={{lg: 'grid', xs: 'none'}}>
              <SideBar />
            </Grid>
            <Grid item lg={10} xs={12} sx={{mb:0}}>
                <TodayReport />
                <ArticleGrid />
                <Stats />
                <TableList />
            </Grid>
        </Grid>
        <Footer />
    </>
  )
}

export default DashboardPage