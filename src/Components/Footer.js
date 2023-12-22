import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {

    const DefineFontSize = {
        fontSize: '0.7rem',
        color: '#A0AEC0'
    }

    const SpanStyle = {
        color: '#4FD1C5',
        fontWeight: '700',
        fontSize: '0.7rem'
    }
  return (
    <div>
        <Box sx={{ 
            width: '100%',
            p: 1
        }}>
            <Container sx={{
                display: 'flex',
                flexDirection: {md: 'row', xs: 'column'},
                alignItems: 'center',
                pb: '1px',
                pl: 0,
                justifyContent: 'space-between'
            }}>
                <Stack sx={{mb: {md: 0, xs: 1}, textAlign: 'center'}}>
                    <Typography {...DefineFontSize} variant='subtitle2' sx={{
                        p: 2
                    }}>@ 2021, Made WITH ❤️ 
                        by <Typography {...SpanStyle} component='span'>
                        Creative Tim</Typography> & <Typography {...SpanStyle} 
                        component='span'>Simmmple</Typography> for a better web
                    </Typography>
                </Stack>
                <Grid container columns={8} direction={'row'} sx={{
                    width: {md: '40%', xs: '100%'},
                    textAlign: 'center',
                    rowGap: {md: 1, xs: '10px'}
                }}>
                    <Grid item md={2} xs={4}>
                        <Button sx={{p: 0}}>
                        <Typography {...DefineFontSize} variant='subtitle2'>
                            Creative Tim
                        </Typography>
                        </Button>
                    </Grid>
                    <Grid item md={2} xs={4}>
                    <Button sx={{p: 0}}>
                        <Typography {...DefineFontSize} variant='subtitle2'>
                            Simmmple
                        </Typography>
                     </Button>   
                    </Grid>
                    <Grid item md={2} xs={4}>
                    <Button sx={{p: 0}}> 
                        <Typography {...DefineFontSize} variant='subtitle2'>
                            Blog
                        </Typography>
                    </Button>   
                    </Grid>
                    <Grid item md={2} xs={4}>
                    <Button sx={{p: 0}}> 
                        <Typography {...DefineFontSize} variant='subtitle2'>
                            Licence
                        </Typography>
                    </Button>    
                    </Grid>
                </Grid>
            </Container>   
        </Box>
    </div>
  )
}

export default Footer