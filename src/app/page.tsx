"use client"
import {Source_Code_Pro} from "next/font/google"
import styles from './page.module.css'
import Box from '@mui/material/Box';


const source_code_pro = Source_Code_Pro({ subsets: ['latin'], style: 'italic', weight: '300' })

export default function Home() {
  return (
  <>
    <Box
    sx={{
      justifyContent: 'center',
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center'
    }}

  >
    <h1 className={source_code_pro.className}>Introducing Akash Kallumkal</h1>
    <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          m: 5,
          borderRadius: '16px'
        }}
        alt="The house from the offer."
        src="akashkglasses.png"
      />
   </Box>
   </>
  )
}
