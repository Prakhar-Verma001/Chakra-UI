import React from 'react'
import {Box, Card, Grid, Stack} from '@mui/material'
import CHK from '../Assests1/Images1/ImageCHK.png'
import Full from '../Assests1/Images1/brooke-cagle-g1Kr4Ozfoac-unsplash 1Full.png'
import Articles from './Articles'
const ArticleGrid = () => {

   
  return (
    <>
        <Grid container>

            <Grid item xs={12} lg={7} sx={{p: 1}}>
                <Card sx={{p: 2, borderRadius: 3, height:'100%', boxSizing:'border-box'}}>
                    <Stack direction={'row'} justifyContent={'space-between'} height={'100%'}>
                        
                        <Articles 
                        caption='Built by developers'
                        term='Purity UI Dashboard'
                        details='From colors, cards, typography to complex 
                        elements, you will find the full documentation.' />
                        
                        {/* <Box sx={{}}> */}
                            <img src={CHK} alt='CHK' style={{
                            width: '38%',
                            height: '100%'
                            }}/>
                        {/* </Box>    */}
                        
                    </Stack>
                </Card>
            </Grid>

            <Grid item xs={12} lg={5} sx={{p: 1}}>
                <Card sx={{p: '14px', borderRadius: 3, width: '100%', height:'100%', boxSizing:'border-box'}}>
                    <Stack direction={'row'} sx={{
                        bgcolor: 'black', 
                        borderRadius: '10px',
                        justifyContent: 'start',
                        position: 'relative',
                        height:'100%',
                        boxSizing:'border-box'
                        }}>
                        
                        <img src={Full} alt='Full' style={{
                            borderRadius: '10px', 
                            opacity: '0.8',
                            width: '100%'}} />

                        <Box sx={{
                            position: 'absolute', 
                            p: '12px',
                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box'
                            }}>
                               <Articles 
                               caption=''
                               term='Work with the Rockets'
                               details='Wealth creation is an evolutionarily recent
                               positive-sum game. It is all about who take the 
                               opportunity first.' />
                        </Box>
                    </Stack>
                </Card>
            </Grid>

        </Grid>
    </>
  )
}

export default ArticleGrid