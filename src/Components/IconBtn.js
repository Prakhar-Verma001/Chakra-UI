import { IconButton, Typography, Stack } from '@mui/material'
import React from 'react'

const ImageSize ={
    height: '15px', 
    width: '15px'
}

const IconBtn = (props) => {

  return (
    <>
        <IconButton>
          <img src={props.src} style={ImageSize} alt={props.alt} />
        </IconButton>
    </>
  )
}

const StackBtn = (props) => {
  return (
    <>
        <IconButton>
            <Stack direction='row' alignItems='center' spacing={'4px'}>
                <img src={props.src} style={ImageSize} alt={props.alt} /> 
                <Typography sx={{fontWeight: '700'}}>{props.children}</Typography>
            </Stack>
        </IconButton>
    </>
  )
}

const StackLogo = (props) => {
  return (
    <>
        <IconButton>
            <Stack direction='row' alignItems='center' spacing={'8px'}>
                <img src={props.src} style={{height: '23px', width: '23px'}} alt={props.alt} /> 
                <Typography color={'black'} sx={{fontWeight: '700', fontSize: '0.9rem'}}>{props.children}</Typography>
            </Stack>
        </IconButton>
    </>
  )
}

export {StackBtn, StackLogo}

export default IconBtn