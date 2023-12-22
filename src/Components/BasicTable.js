import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Stack, Typography } from '@mui/material';
import XD from '../Assests1/Images1/TableImg/Iconxd.png'
import A from '../Assests1/Images1/TableImg/IconA.png'
import SLACK from '../Assests1/Images1/TableImg/IconSLACK.png'
import SP from '../Assests1/Images1/TableImg/spotify-2 1SPOTIFY.png'
import SQ from '../Assests1/Images1/TableImg/IconSQ.png'
import IN from '../Assests1/Images1/TableImg/IconIND.png'
import P1 from '../Assests1/Images1/TableImg/Avatars Group 3 (Horizontal)d.png'
import P2 from '../Assests1/Images1/TableImg/Avatars Group 3 (Horizontal)d2.png'
import P3 from '../Assests1/Images1/TableImg/Membersd3.png'
import P4 from '../Assests1/Images1/TableImg/Membersd4.png'
import P5 from '../Assests1/Images1/TableImg/Membersd5.png'
import P6 from '../Assests1/Images1/TableImg/Membersd6.png'
import S1 from '../Assests1/Images1/TableImg/Progress60%.png'
import S2 from '../Assests1/Images1/TableImg/Progress10%.png'
import S3 from '../Assests1/Images1/TableImg/Progress100%.png'
import S4 from '../Assests1/Images1/TableImg/Progress100% (1).png'
import S5 from '../Assests1/Images1/TableImg/Progress25%.png'
import S6 from '../Assests1/Images1/TableImg/Progress40%.png'


export default function BasicTable() {
  return (
    <TableContainer component={Box}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{pl: 0, fontSize: '0.8rem', fontWeight: '700', color: '#A0AEC0'}}>COMPANIES</TableCell>
            <TableCell sx={{pl: 0, fontSize: '0.8rem', fontWeight: '700', color: '#A0AEC0'}}>MEMBERS</TableCell>
            <TableCell sx={{pl: 0, fontSize: '0.8rem', fontWeight: '700', color: '#A0AEC0'}}>BUDGET</TableCell>
            <TableCell sx={{pl: 0, fontSize: '0.8rem', fontWeight: '700', color: '#A0AEC0'}}>COMPLETION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRows
              src={XD}
              alt='XD'
              name='Chakra Soft UI Version'
              src1={P1}
              alt1='P1'
              texts='$14,000'
              src2={S1}
              alt2='S1'
            />

            <TableRows
              src={A}
              alt='A'
              name='Add Progress Track'
              src1={P2}
              alt1='P2'
              texts='$3,000'
              src2={S2}
              alt2='S2'
            />

            <TableRows
              src={SLACK}
              alt='SLACK'
              name='Fix Platform Errors'
              src1={P3}
              alt1='P3'
              texts='Not set'
              src2={S3}
              alt2='S3'
            />

            <TableRows
              src={SP}
              alt='SP'
              name='Launch our Mobile App'
              src1={P4}
              alt1='P4'
              texts='$32,000'
              src2={S4}
              alt2='S4'
            />

            <TableRows
              src={SQ}
              alt='SQ'
              name='Add the New Pricing Page'
              src1={P5}
              alt1='P5'
              texts='$400'
              src2={S5}
              alt2='S5'
            />

            <TableRows
              src={IN}
              alt='IN'
              name='Redesign New Online Shop'
              src1={P6}
              alt1='P6'
              texts='$7,600'
              src2={S6}
              alt2='S6'
            />
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export const CompICON = (props) => {
  return (
    <>
      <Stack direction={'row'} spacing={2}>
        <img src={props.src}  alt={props.alt}/>
        <Typography variant='subtitle2' 
            sx={{fontWeight: '700', fontSize: '0.9rem'}}>
              {props.name}</Typography>
      </Stack>
    </>
  )
}


export const TableRows = (props) => {
  return (
    <>
        <TableRow>
            <TableCell sx={{pl: 0}}>
              <CompICON src={props.src} alt={props.alt} name={props.name}/>
            </TableCell>
            <TableCell sx={{pl: 0, pr: 5}}>
              <img src={props.src1} alt={props.alt1} />
            </TableCell>
            <TableCell sx={{pl: 0, pr: 5}}>
              <Typography variant='subtitle2' sx={{fontSize: '0.9rem', fontWeight: '700'}}>{props.texts}</Typography>
            </TableCell>
            <TableCell sx={{pl: 0, pr: 0}}>
              <img src={props.src2} alt={props.alt2} />
            </TableCell>
        </TableRow>
    </>
  )
}

