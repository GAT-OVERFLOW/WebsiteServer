import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';




export default function Navbar(){
    const [mobileOpen, setMobileOpen] = useState(false);
    const drawerWidth = 240;
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
          <Link to='/' >
          <Typography variant="h6" sx={{ my: 2 }} color={'white'}>
          
            GAT OVERFLOW
           
          </Typography>
          </Link>
          <Divider />
          <List>

          <ListItem disablePadding>
                <ListItemButton href='/'>
                  <ListItemText sx={{ textAlign: 'center' }} primary='HOME' />
                </ListItemButton>
              </ListItem>
            
              <ListItem disablePadding>
                <ListItemButton href='/#domain-section'>
                  <ListItemText sx={{ textAlign: 'center' }} primary='DOMAINS' />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton >
                  <ListItemText sx={{ textAlign: 'center' }} primary='MEMBERS' />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton >
                  <ListItemText sx={{ textAlign: 'center' }} primary='PROJECTS' />
                </ListItemButton>
              </ListItem>

              
              <ListItem disablePadding>
                <ListItemButton  onClick={()=>{window.scroll({top:document.body.scrollHeight, behavior: "smooth"})}} sx={{ textAlign: 'center' }}>
                  <ListItemText primary='CONTACT' />
                </ListItemButton>
              </ListItem>
            
          </List>
        </Box>
      );

    const container = window !== undefined ? () => window.document.body : undefined;
    return(   
    <Box sx={{ display: 'flex' }}>   
    <AppBar  style={{ background: 'transparent', boxShadow: 'none'}} component="nav">
    <Toolbar >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon color='primary'/>
      </IconButton>
      <Typography className='nav-text'
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        <Link className='nav-text' to='/'>
        GAT OVERFLOW
        </Link>
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        
          <Button className='nav-text' href="/#domain-section">
            Domains
          </Button>

          <Button className='nav-text'  >
            Members
          </Button>

          <Button className='nav-text'  >
            Projects
          </Button>

          <Button className='nav-text' onClick={()=>{window.scroll({top:document.body.scrollHeight, behavior: "smooth"})}} >
            Contact
          </Button>
      
      </Box>
    </Toolbar>
  </AppBar>
        <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,backgroundColor: '#26242e',color:'white'},
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      </Box>
  )
}