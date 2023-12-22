import { Card, CardActionArea, Stack, Typography, Box } from '@mui/material'
import React from 'react'

const TodayReportCard = (props) => {
  return (
    <>
        <Card sx={{borderRadius: 3}}>
            <CardActionArea>
                <Stack direction='row' sx={{p: 2}} justifyContent='space-between' alignItems='center'>
                    <Typography variant='body1' color={'#A0AEC0'} sx={{fontSize: '0.8rem', fontWeight: '700'}}>
                        {props.heading}<Typography color={'black'} sx={{fontWeight: '700'}} variant='subtitle1'>
                            {props.amount}<Typography variant='caption' color={'#48BB78'} 
                            sx={{fontWeight: '700'}}> {props.interest}</Typography>
                        </Typography>
                    </Typography>
                    <Box sx={{
                        bgcolor: '#4FD1C5', p: 1, borderRadius: 2
                        }}>
                        <img src={props.src} alt={props.alt}/>
                    </Box>
                </Stack>
            </CardActionArea>
        </Card>
    </>
  )
}

export default TodayReportCard