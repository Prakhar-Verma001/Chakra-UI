import { Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import PURITY from '../Assests1/Images1/ShapePurity.png'
import PEOPLE from '../Assests1/Images1/defaultPeaple.png'
import SETT from '../Assests1/Images1/VectorSett.png'
import BELL from '../Assests1/Images1/defaultBells.png'
import IconBtn, { StackBtn, StackLogo } from './IconBtn'
const Header = () => {
    
  return (
    <div>
        <Grid container alignItems='center' sx={{px: 3, bgcolor: '#F8F9FA'}}>

            <Grid item lg={2} xs={6} sx={{py: 2}}>
                {/* <Stack direction='row' spacing={1}>
                    <img src={PURITY} alt='PurityImages' />
                    <Typography variant='body2' sx={{display: 'inline-block'}}>PURITY UI DASHBOARD</Typography>
                </Stack> */}
                <StackLogo src={PURITY} children='PURITY UI DASHBOARD' alt='Purity' />
            </Grid>

            <Grid item lg={10} xs={6}>
                <Stack direction='row' justifyContent={{lg:'space-between', xs:'end'}}>

                    <Stack direction={'column'} spacing={1} sx={{
                        display: {lg: 'flex', xs: 'none'}
                    }}>
                        <Typography>
                            <Typography color={'GrayText'} component='span'>Pages</Typography>
                            <Typography component='span'> / Dashboard</Typography>
                        </Typography>
                        <Typography sx={{fontWeight: 700}}>Dashboard</Typography>
                    </Stack>

                    <Stack direction='row' alignItems='center' spacing= {'10px'}>
                        <TextField sx={{display:{md:'block', xs:'none'},
                            ".MuiInputBase-input":{py: 1, px: 2},
                            ".MuiOutlinedInput-root":{border: '2px black', borderRadius: 4, mr: 1}
                        }} type='text' placeholder='Type here...' />

                        
                        <StackBtn src={PEOPLE} children='Sign In' alt='Poeple'/>
                        
                        <IconBtn src={SETT} alt='setting' />

                        <IconButton>
                            <img src={BELL} style={{
                                height: '16px', 
                                width: '16px',
                                marginRight: '3px'
                            }} alt='Bell' />
                        </IconButton>
                    </Stack>

                </Stack>
            </Grid>
        </Grid>
    </div>
  )
}

export default Header