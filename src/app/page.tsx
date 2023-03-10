"use client"
import { Source_Code_Pro } from "next/font/google"
import styles from './page.module.css'
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import * as React from 'react';
import Socials from "./socials";

const source_code_pro = Source_Code_Pro({ subsets: ['latin'], style: 'italic', weight: '300' })

export default function Home() {
  return (
    <>
    <main className={source_code_pro.className}> 
    <Container
      sx={{
        maxWidth: "sm",
        m: "5"
      }}
      
        >
        <Box
          sx={{
            justifyContent: 'center',
           
          }}

        >
          <h1 >Introducing Akash Kallumkal</h1>
          <Box
            component="img"
            sx={{
              height: '100%',
              width: '100%',
              borderRadius: '16px',

            }}
            alt="The house from the offer."
            src="akashkglasses.png"
          />
        </Box>
        <Socials/>
      </Container>
    </main>
    </>
  )
}
