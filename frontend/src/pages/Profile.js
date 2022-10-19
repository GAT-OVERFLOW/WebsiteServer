import { Card, CardContent, CardMedia, Grid, List,ListItem, ListItemButton, Typography,Box } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import Banner from "../components/Banner";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import GitHub from "@mui/icons-material/GitHub";
export default function Profile(){
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
    const id = useParams();
    const [data,setData] = useState("");
    const url = 'http://localhost:8080/profile?id='+id.id
    console.log(url)
    useEffect(()=>{
        axios.get(url).then((response) => {setData(response.data[0])});
        console.log(data)
    },[]);
    console.log(data) 
    return(<React.Fragment>
        <Banner image="https://images4.alphacoders.com/104/104644.jpg"
            />
        <Grid container spacing={10} padding={10}>
            <Grid item>
            <Card variant="elevation" style={{boxShadow: '0 0 0.3rem 0.2rem gray'}} sx={{maxWidth:1000, minWidth:500}}>
                <CardMedia
                    component="img"
                    height={"500"}
                    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"    
                />
                <CardContent>
                    <Typography variant='h4'  align="center">{data.name}</Typography>
                    <Typography variant='h6' align="left">{data.department}</Typography>
                    <Typography variant='h6' align="left">{data.role}</Typography>
                    <Typography variant='h6' component={'a'} href={data.email} justifyContent={'left'} alignItems={'left'} display='flex'><EmailIcon/>&nbsp;{data.email}</Typography>
                    <Typography variant="h6" component={'a'} href={data.github} justifyContent={'left'} alignItems={'left'} display='flex'><GitHub/>&nbsp;{data.github}</Typography>
                </CardContent>
            </Card>
            </Grid>
            <Grid item md = {7}>
            <Card variant="elevation" style={{boxShadow: '0 0 0.3rem 0.2rem gray'}}>
                <CardContent>
                <Box>
                    <Typography variant="h4">
                        Projects
                    </Typography>
                <Box
                // sx={{ width: '100%', height: 400, maxWidth: 1500, bgcolor: 'background.paper' }}

                >
                <List 
                //sx={{ width: '100%', maxWidth: 1500, height:'25rem', overflowY:'scroll', bgcolor: 'background.paper' }}
                >

                 { [{"title":"RV Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"}].map((eve,key)=>{ return renderRow(eve,key)})}
                 </List>
                </Box>
                </Box>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </React.Fragment> )
}