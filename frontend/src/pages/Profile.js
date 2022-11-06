import { Card, CardContent, CardMedia, Grid, List,ListItem, ListItemButton, Typography,Box, Avatar } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import GitHub from "@mui/icons-material/GitHub";
export default function Profile(){
    function renderRow(project,index) {
        return (
        <a key={index} style={{color:"black"}} href={"http://localhost:3000/projects/"+project._id}>
          <ListItem  key={index} component="div" disablePadding>
            <ListItemButton style={{display:'inline'}}>
                <Typography variant='h5'>{project.title}</Typography>
                <Typography variant='body1'>{project.status}</Typography>
            </ListItemButton>
          </ListItem>
          </a>
        );
      }
    const id = useParams();
    const [profileData,setProfileData] = useState("");
    const [projectData, setProjectData] = useState([{"title":"","ghLink":"","status":"Completed"}])
    const url = 'http://localhost:8080/profile?id='+id.id
    useEffect(()=>{
        axios.get(url).then((response) => {setProfileData(response.data[0]);
            setProjectData(response.data[0].contribs)
        });
    },[])
    console.log("data", projectData)
    return(<React.Fragment>
        <Grid container spacing={10} padding={10}>
            <Grid item>
            <Card variant="elevation" style={{boxShadow: '0 0 0.3rem 0.2rem gray', alignItems:"center"}} sx={{maxWidth:400, minWidth:100}}>
                <CardContent style={{paddingLeft:"25%"}}>
                    <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" sx={{ width: 175, height: 175 }} />
                </CardContent>
                <CardContent>
                    <Typography variant='h1' style={{fontSize:"35px", padding:"5px"}} align="center">{profileData.name}</Typography>
                    <Typography variant='h2' style={{fontSize:"25px", padding:"5px"}} align="left">{profileData.department}</Typography>
                    <Typography variant='h2' style={{fontSize:"25px", padding:"5px"}} align="left">{profileData.role}</Typography>
                    <Typography variant='h2' style={{fontSize:"25px", padding:"5px"}} component={'a'} href={profileData.email} justifyContent={'left'} alignItems={'left'} display='flex'><EmailIcon/>&nbsp;{profileData.email}</Typography>
                    <Typography variant="h2" style={{fontSize:"25px", padding:"5px"}} component={'a'} href={profileData.github} justifyContent={'left'} alignItems={'left'} display='flex'><GitHub/>&nbsp;{profileData.github}</Typography>
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
                sx={{ bgcolor: 'background.paper' }}

                >
                <List 
                sx={{ overflowY:'scroll', bgcolor: 'background.paper' }}
                >
                
                 { projectData.map((eve,key)=>{ return renderRow(eve,key)})}
                 </List>
                </Box>
                </Box>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    </React.Fragment> )
}