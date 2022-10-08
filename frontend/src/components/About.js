import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';


export default function About({events}){
    function renderRow(even,index) {
        return (
        <a key={index} style={{color:"black"}} href={even.link} target = "_blank">
          <ListItem  key={index} component="div" disablePadding>
            <ListItemButton style={{display:'inline'}}>
                <Typography variant='h5'>{even.title}</Typography>
                <Typography variant='body1'>{even.date}</Typography>
            </ListItemButton>
          </ListItem>
          </a>
        );
      }
    return(
    <section>
        <Grid container py={10} alignItems='center' justifyContent={'center'} spacing={10}>
            <Grid item md={8}>
                <Container maxWidth='md'>
                <Typography variant="h3" mb={5}>
                    About us
                </Typography>
                <Typography variant="body1" textAlign={'justify'}>
                        Pariatur aute veniam ut eiusmod enim officia ad sit cillum laboris adipisicing qui. Adipisicing excepteur non veniam pariatur ea. Veniam laborum fugiat dolor excepteur aute eu nostrud incididunt aliquip culpa excepteur eiusmod aliquip nostrud.
                        Cillum culpa cillum nulla nisi quis fugiat commodo laboris excepteur. Excepteur qui proident laboris fugiat magna incididunt ex ullamco veniam ut. Laborum officia exercitation aute culpa incididunt excepteur pariatur fugiat fugiat ex adipisicing esse. Esse fugiat ad voluptate nulla laborum excepteur. Lorem nisi labore aute deserunt proident aliqua consectetur officia aliqua nisi labore.
                        n incididunt do do nostrud sunt eu veniam sunt. Dolore amet adipisicing labore deserunt nisi ipsum tempor amet laboris duis incididunt incididunt occaecat. Dolor aliqua proident esse sint tempor. Nulla mollit officia non aliqua quis. Reprehenderit minim exercitation consectetur nulla minim ea voluptate. Sint amet culpa eiusmod sit proident. Ad et amet incididunt aute minim exercitation esse fugiat ipsum ut magna.
                        Esse sint incididunt pariatur commodo culpa fugiat occaecat consequat. Consectetur ad fugiat excepteur occaecat ipsum ullamco exercitation ut enim incididunt minim. Velit velit et mollit irure. Ipsum eu cillum reprehenderit in magna cupidatat commodo pariatur adipisicing ut eiusmod aliquip occaecat nostrud. Velit dolor excepteur nisi adipisicing voluptate consectetur anim esse non proident aute nulla. Enim et voluptate anim in ex amet. Ut consequat consequat aliquip pariatur.
                </Typography>
                </Container>
            </Grid>
            <Grid item md={4}>
                <Box>
                    <Typography variant="h4">
                        Events
                    </Typography>
                <Box
                sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
                >
                <List sx={{ width: '100%', maxWidth: 360, height:'25rem', overflowY:'scroll', bgcolor: 'background.paper' }}>

                 {events.map((eve,key)=>{ return renderRow(eve,key)})}
                 </List>
                </Box>
                </Box>
            </Grid>
        </Grid>
    </section>)
}
