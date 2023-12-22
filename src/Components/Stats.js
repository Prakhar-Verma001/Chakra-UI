import { Box, Card, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import DATA from '../Assests1/Images1/Data graphData.png'
import LINES from '../Assests1/Images1/LinesLINES.png'
import { SideBarComp1 } from './SideBar'
import USERS from '../Assests1/Images1/defaultstatUSER.png'
import CLICKS from '../Assests1/Images1/sharpstatCLICKS.png'
import SALES from '../Assests1/Images1/defaultstatsSALES.png'
import ITEMS from '../Assests1/Images1/defaultstatITEM.png'
import GRAPH from '../Assests1/Images1/GraphGraph.png'
const Stats = () => {
  return (
    <>  
        <Grid container >
        
                <Grid item md={5} xs={12} sx={{p: 1}}>

                    <Card sx={{p: 2, borderRadius: 3}}>

                      <Stack direction={'column'} spacing={3}>

                        <Stack direction={'row'} sx={{
                            background: 'linear-gradient(to right , #313860, #151928)',
                            p:{md:3, xs:2},
                            justifyContent: 'space-between',
                            borderRadius: 4
                            }}>
                            <img src={DATA} alt='data'/>
                            <img src={LINES} alt='Lines' width={'85%'}/>
                        </Stack>

                        <Typography>
                            <Typography variant='body2' sx={{
                                fontWeight: '700',
                                fontSize: '0.9rem'
                            }}>Active Users</Typography>

                            <Typography variant='caption' component={'span'} color={'#48BB78'} sx={{fontWeight: 700}}>(+23)
                                <Typography variant='caption' color={'#A0AEC0'} sx={{fontWeight: 400}}> than last week</Typography>
                            </Typography>
                        </Typography>

                        <Grid container columns={4}>
                            <StatsComp src={USERS} alt='USERS' opt='Users' num='32,984' width='70%'/>
                            <StatsComp src={CLICKS} alt='CLICKS' opt='Clicks' num='2,42m' width='80%'/>
                            <StatsComp src={SALES} alt='SALES' opt='Sales' num='$2,400' width='30%'/>
                            <StatsComp src={ITEMS} alt='ITEMS' opt='Items' num='320' width='60%'/>
                        </Grid>

                      </Stack>

                    </Card>

                </Grid>
        
                <Grid item md={7} xs={12} sx={{p:1}}>
                    <Card sx={{borderRadius: 3, p:3, height:'100%', boxSizing: 'border-box'}}>
                        <Stack direction={'column'} justifyContent={'space-between'} sx={{height:'inherit'}}>
                            
                            <Typography>
                                 <Typography variant='body2' sx={{
                                     fontWeight: '700',
                                     fontSize: '1rem'
                                 }}>Sales Overview</Typography>

                                 <Typography variant='caption' component={'span'} color={'#48BB78'} sx={{fontWeight: 700}}>(+5) more
                                     <Typography variant='caption' color={'#A0AEC0'} sx={{fontWeight: 400}}> in 2023</Typography>
                                 </Typography>
                            </Typography>
                             
                            <img src={GRAPH} alt='graph' height={'75%'}/>

                        </Stack>
                    </Card>
                </Grid>
        </Grid>
    </>
  )
}


const StatsComp = (props) => {
  return (
    <>
        <Grid item md={1} xs={2} sx={{pr: 2}}>

            <SideBarComp1 src={props.src} alt={props.alt} opt={props.opt} fontSize='0.8rem' bgcolor= '#4FD1C5' pl={1}/>

            <Box sx={{ borderBlockEnd: '3.5px solid #E2E8F0', mr: 2, mt:'2px'}}>
                <Typography variant='body1' sx={{fontWeight: '700', ml:1}}>{props.num}</Typography>
                <hr style={{margin: '10px 0 0 0', width: props.width, height: '2px',
                backgroundColor: '#4FD1C5'}}/>
            </Box>

        </Grid>

    </>
  )
}

export {StatsComp}
export default Stats