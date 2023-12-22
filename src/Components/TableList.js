import { Box, Card, Grid, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import BasicTable from './BasicTable'
import BELL from '../Assests1/Images1/TableImg/Iconbell.png'
import HTML from '../Assests1/Images1/TableImg/Iconhtml5.png'
import SHOP from '../Assests1/Images1/TableImg/Iconshopping.png'
import DEBIT from '../Assests1/Images1/TableImg/IcondebitCard.png'
import DROP from '../Assests1/Images1/TableImg/dropboxdropbox.png'
import XD from '../Assests1/Images1/TableImg/Iconxd.png'
const TableList = () => {
  return (
    <>
        <Grid container>
            <Grid item lg={8} xs={12} sx={{p:1}}>
                <Card sx={{p: 2, borderRadius: 3}}>
                    <Stack direction={'column'} justifyContent={'space-between'}>

                            <Typography>
                                 <Typography variant='body2' sx={{
                                     fontWeight: '700',
                                     fontSize: '1rem'
                                 }}>Projects</Typography>

                                 <Typography variant='caption' component={'span'} color={'#48BB78'} sx={{fontWeight: 700}}>30 done
                                     <Typography variant='caption' color={'#A0AEC0'} sx={{fontWeight: 400}}> this month</Typography>
                                 </Typography>
                            </Typography>

                        <BasicTable />
                    </Stack>
                </Card>
            </Grid>

            <Grid item lg={4} xs={12} sx={{p:1}}>
                 <Card sx={{height: '100%', boxSizing: 'border-box', p: 2, borderRadius: 3}}>
                    <Stack direction={'column'} justifyContent={'space-between'} sx={{height: 'inherit'}}>
                        <TypoGraphyA boldText='Order overview' greenText='+30%' normalText=' this month' />
                                 
                        <List>
                            <ListItemStyle src={BELL} name='$2400, Design changes' time='22 DEC 7:20 PM' />
                            <ListItemStyle src={HTML} name='New order #4219423' time='21 DEC 11:21 PM' />
                            <ListItemStyle src={SHOP} name='Server Payments for April' time='21 DEC 9:28 PM' />
                            <ListItemStyle src={DEBIT} name='New card added for order #3210145' time='20 DEC 3:52 PM' />
                            <ListItemStyle src={DROP} name='Unlock packages for Development' time='19 DEC 11:35 PM' />
                            <ListItemStyle src={XD} name='New order #9851258' time='18 DEC 4:41 PM' />
                        </List>
                    </Stack>
                 </Card>                   
            </Grid>
        </Grid>
    </>
  )
}

const TypoGraphyA = (props) => {
  return (
    <>                        
        <Typography>
            <Typography variant='body2' sx={{fontWeight: '700', fontSize: '0.9rem'}}>{props.boldText}</Typography>

            <Typography variant='caption' component={'span'} color={'#48BB78'} sx={{fontWeight: 700}}>{props.greenText}
                <Typography variant='caption' color={'#A0AEC0'} sx={{fontWeight: 400}}>{props.normalText}</Typography>
            </Typography>
        </Typography>
    </>
  )
}

const ListItemStyle = (props) => {
    return(
        <>
            <ListItem sx={{pl: 0, pt: 2}}>
                <Stack direction={'row'} spacing={2} alignItems={'start'} width={'100%'}>
                    <img src={props.src} alt='Pics' style={{paddingTop: '2px'}}/>
                    <Box>
                        <Typography variant='subtitle2' sx={{fontSize:'0.8rem', fontWeight:'700'}}>{props.name}</Typography>
                        <Typography variant='caption' color={'#A0AEC0'} sx={{fontWeight: 700}}>{props.time}</Typography>
                    </Box>
                </Stack>
            </ListItem>
        </>
    )
}
export {TypoGraphyA, ListItemStyle}
export default TableList


