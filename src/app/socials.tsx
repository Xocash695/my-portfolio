"use client"
import Box from '@mui/material/Box';
import { Link } from "@mui/material";

import {  useEffect } from 'react'


export default function Socials() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <>
            <h1> Akash&apos;s Socials</h1>
            <Link className="twitter-timeline" data-width="500" data-height="500" href="https://twitter.com/AkashKallumkal?ref_src=twsrc%5Etfw">Akash Kallumkal</Link>
            <Box
                component="img"
                sx={{
                    height: '40%',
                    width: '40%',
                    borderRadius: '16px',

                }}
                alt="The house from the offer."
                src="kallumkalakash_qr.png"
            />
            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/0EvkRsk2ljJgAKoihIWDD4?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 
          
        </>
    );
}