import { Typography, Box, Stack, Link} from '@mui/material'
import React from 'react'
import ARROW from '../Assests1/Images1/forwardARROW.png'

const Articles = (props) => {
  return (
    <>
        <Stack justifyContent={'space-between'} sx={{
          height: 'inherit'
        }}>
          <Box width={{md:'90%', xs:'98%'}}>
            <Typography>
                <Typography color={'#A0AEC0'} sx={{fontSize: '0.8rem',fontWeight: '700'}} variant='subtitle2'>{props.caption}</Typography>
                <Typography gutterBottom={0} sx={{fontSize: '0.9rem', fontWeight: '700'}} variant='h6'>{props.term}</Typography>
                <Typography sx={{fontSize: '0.8rem', lineHeight: '1.1rem'}} color={'#A0AEC0'} variant='body1'>{props.details}</Typography>
            </Typography>
          </Box>
          
            <Box>
              <Link href="#" underline='none'>
               <Stack direction={'row'} spacing={'4px'} alignItems={'center'}>
                  <Typography color={'black'} sx={{fontSize: '0.8rem', fontWeight: '600'}}>Read More</Typography>
                  <img src={ARROW} alt='Arrow' height={'14px'} width={'14px'}  />
               </Stack>
              </Link> 
            </Box>
        </Stack>

        
    </>
  )
}

export default Articles