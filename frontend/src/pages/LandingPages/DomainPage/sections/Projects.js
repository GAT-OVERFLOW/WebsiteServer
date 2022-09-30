
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"


// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import Events from "customComponents/Events"
import { Divider, ListItemText } from "@mui/material";

function Projects({ongoing,completed}) {
    const ongoingprojects = ongoing.map((project)=>{
        console.log(project.name)
        return(
        <>
        <ListItem>
        <ListItemText primary = {project.title} secondary={project.description}/>
        </ListItem>
        <Divider/>
        </>)
    })
    const completedprojects = completed.map((project)=>{
        return(
        <>
        <ListItem>
            <ListItemText primary = {project.title} secondary={project.description}/>
        </ListItem>
        <Divider/>
        </>)
    })
  return (
    <MKBox component="section" >
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item lg={6} >
                  <Typography mb={5} variant="h1" >Completed projects</Typography>
                <List >{ongoingprojects}</List>
          </Grid>
          <Grid item lg={6} >
                  <Typography mb={5} variant="h1" >Ongoing projects</Typography>
                  <List >{completedprojects}</List>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Projects;
