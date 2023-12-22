import { Box, Card, CardActionArea, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Home from '../Assests1/Images1/SiderBar Img/defaulthome.png'
import Stat from '../Assests1/Images1/SiderBar Img/chartstat.png'
import Radio from '../Assests1/Images1/SiderBar Img/defaultRadio.png'
import Tool from '../Assests1/Images1/SiderBar Img/defaultTool.png'
import PRO from '../Assests1/Images1/SiderBar Img/defaultPRO.png'
import IN from '../Assests1/Images1/SiderBar Img/defaultIN.png'
import UP from '../Assests1/Images1/SiderBar Img/VectorUP.png'
import QS from '../Assests1/Images1/SiderBar Img/VectorQS.png'

const SideBar = () => {
  return (
    <Stack direction={'column'} width={'100%'} spacing={2} sx={{
        p:2, pl: 3,
        boxSizing: 'border-box',
        display: {lg: 'flex', xs: 'none'}
    }}>
        {/* <SideBarComp1 src={Home} alt='home' opt='Dashboard' bgcolor='#4FD1C5' pl={2} /> */}
        <SideBarComp src={Home} alt='home' opt='Dashboard' />
        <SideBarComp1 src={Stat} alt='Tables' opt='Tables' pl={2}/>
        <SideBarComp1 src={Radio} alt='Billing' opt='Billing' pl={2}/>
        <SideBarComp1 src={Tool} alt='RTL' opt='RTL' pl={2}/>
        <Box sx={{px: 2, py: '12px'}}>
        <Typography variant='body2' sx={{fontWeight: 700}}>ACCOUNT PAGES</Typography>
        </Box>
        <SideBarComp1 src={PRO} alt='Profile' opt='Profile' pl={2}/>
        <SideBarComp1 src={IN} alt='Sign In' opt='Sign In' pl={2}/>
        <SideBarComp1 src={UP} alt='Sign Up' opt='Sign Up' pl={2}/>
        <BottomBox />
    </Stack>
  )
}

export default SideBar


const SideBarComp = (props) => {
  return (
    <>
        <Card sx={{borderRadius: 4}}>
            <CardActionArea>

                <Stack direction={'row'} alignItems={'center'} spacing={'12px'} sx={{
                    px: 2, py: '12px'
                }}>

                    <Paper sx={{py: '8px', px: '10px', borderRadius: 3, bgcolor: '#4FD1C5'}}>
                        <img src={props.src} alt={props.alt} />
                    </Paper>

                    <Typography color={'Black'} variant='subtitle2' sx={{
                        fontWeight: '700'
                    }}>{props.opt}</Typography>

                </Stack>
            </CardActionArea>
        </Card>
    </>
  )
}

const SideBarComp1 = (props) => {
  return (
    <>  
        <Card elevation={0} sx={{borderRadius: 4, bgcolor: 'transparent',
            "&:hover": {
            bgcolor:'white',
            boxShadow: 1
            } }}>
            <CardActionArea>

                <Stack direction={'row'} alignItems={'center'} spacing={'12px'} sx={{
                    pr: 2, py: '10px', pl: props.pl
                }}>
                    <Paper sx={{py: '7px', px: '10px', pt: '10px', 
                        borderRadius: 3, bgcolor: props.bgcolor}}>
                        <img src={props.src} alt={props.alt} />
                    </Paper>

                    <Typography color={'#A0AEC0'} variant='subtitle2' sx={{
                        fontWeight: '700',
                        fontSize: props.fontSize
                    }}>{props.opt}</Typography>

                </Stack>
            </CardActionArea>
        </Card>
    </>
  )
}

const BottomBox = () => {
  return (
    <>
        <Box sx={{p: 1}}>
            <Stack direction={'column'} alignItems={'start'} spacing={3} width={'100%'}
            sx={{bgcolor: '#4FD1C5', 
            p: 2, borderRadius: 4,
            boxSizing: 'border-box'}}>

                <Card sx={{borderRadius: 3}}>
                    <CardActionArea sx={{py: '8px', px: '10px', pt: '10px'}}>
                        <img src={QS} alt='QS' />
                    </CardActionArea>
                </Card>

                <Box width={'inherit'}>

                    <Typography variant='h6' sx={{
                        fontSize: '1rem',
                        fontWeight: '700'
                    }}>Need Help?</Typography>

                    <Typography variant='body1' sx={{
                        fontWeight: '400',
                        fontSize: '0.9rem',
                        mb: '14px'
                    }}>Please check our docs</Typography>

                    <Card sx={{borderRadius: 3, bgcolor: 'white', mx: 'auto'}}>
                        <CardActionArea sx={{p:1, width: '100%'}}>
                                <Typography variant='subtitle1' sx={{
                                fontSize: '0.7rem',
                                fontWeight: '700',
                                color: 'black',
                                textAlign: 'center'
                            }}>DOCUMENTATION</Typography>
                        </CardActionArea>
                    </Card>

                </Box>

            </Stack>
        </Box>
    </>
  )
}

export {SideBarComp, SideBarComp1, BottomBox}