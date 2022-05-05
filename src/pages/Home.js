import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MultiActionAreaCard from '../components/ImgCard';

export default function Home() {
  return (
    <div>
        <div className="App">
      <Container sx={{marginY: 5}}>

          <Grid container spacing={4}>
            <MultiActionAreaCard/>
          </Grid>
        
      </Container> 
    </div>
    </div>
  )
}
