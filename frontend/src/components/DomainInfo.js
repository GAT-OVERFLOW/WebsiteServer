import { Grid, Typography,Container, List,ListItem, ListItemButton } from "@mui/material";
import { Box } from "@mui/system";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

  function renderRow(project,index) {
    return (
    <a key={index} style={{color:"black"}} href={project.link} target = "_blank">
      <ListItem  key={index} component="div" disablePadding>
        <ListItemButton style={{display:'inline'}}>
            <Typography variant='h5'>{project.title}</Typography>
            <Typography variant='body1'>{project.description}</Typography>
        </ListItemButton>
      </ListItem>
      </a>
    );
  }

export default function DomainInfo({roadmap,ongoing,completed}){

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };



    return(
        <section className="domain-info-section">
            <Grid container p={10} justifyContent='center'>
                <Grid item sm={8} display='flex' alignItems={'center'}>
                    <Container>
                    <Typography my={5} textAlign={'center'}  variant='h4'>
                       Projects
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Ongoing projects" {...a11yProps(0)} />
                            <Tab label="Completed projects" {...a11yProps(1)} />
                            </Tabs>
                        </Box>
                    <TabPanel value={value} index={0}>
                        <List sx={{ width: '100%', height:'25rem', overflowY:'scroll', bgcolor: 'background.paper' }}>
                            {ongoing.map((eve,key)=>{ return renderRow(eve,key)})}
                        </List>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    <List sx={{ width: '100%', height:'25rem', overflowY:'scroll', bgcolor: 'background.paper' }}>
                            {completed.map((eve,key)=>{ return renderRow(eve,key)})}
                    </List>
                    </TabPanel>
                    </Box>
                    </Container>
                </Grid>

                <Grid item sm={4} sx={{justifyContent:'center',alignItems:'center',display:'flex'}}>
                    <Container>
                    <Typography item my={5} textAlign={'center'} variant='h4'>
                       Roadmap
                    </Typography>
                    <img style={{borderRadius:'2rem',boxShadow: '0 0 1rem 0.1rem red,0 0 1rem 0.2rem pink'}} className="about-image" src={roadmap}></img>
                    </Container>
                </Grid>
            </Grid>
        </section>
    )
}