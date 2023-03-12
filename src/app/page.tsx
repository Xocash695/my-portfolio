"use client"
import {Dancing_Script} from "next/font/google"
import styles from './page.module.css'
import Box from '@mui/material/Box';


const dancingScript = Dancing_Script({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box
    justifyContent= 'center'
    display= 'flex'
  >
    <h1 className={dancingScript.className}>Introducing Akash Kallumkal</h1>
  </Box>
  )
}
