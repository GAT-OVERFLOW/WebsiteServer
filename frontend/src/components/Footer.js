import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Footer(){
    return(
        <footer>
            <Box color={{backgroundColor:"#26242e"}} py={10}>
                <Container maxWidth={'xl'} className='nav-text'>
                <Grid container spacing={10} justifyContent={'space-around'}>
                    <Grid item sm={4} >
                        <Typography variant='h4'>
                            Content
                        </Typography>
                        <Divider/>
                        <Typography  className='nax-text'>Consequat labore veniam proident in esse qui aute consequat cillum irure pariatur sit. Ea qui magna voluptate excepteur mollit amet laborum ad cillum do. Ut incididunt id dolor duis anim magna. Officia elit ipsum ipsum dolor eu eiusmod adipisicing culpa in labore minim do magna et. Ea consequat voluptate irure dolor.</Typography>
                    
                    </Grid>
                    <Grid item sm={3} >
                    <Typography variant='h4'>
                            Domains
                        </Typography>
                        <Divider />
                        <Typography component={'a'} className='nax-text'>Web development</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Artificial intelligence</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Embedded Systems</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Python programming</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Mobile app development</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Cyber security</Typography><br/>
                    </Grid>
                    <Grid item sm={2}>
                    <Typography variant='h4'>
                            Links
                        </Typography>
                        <Divider />
                        <Typography component={'a'} className='nax-text'>Home</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Domains</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Members</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Projects</Typography><br/>
                        <Typography component={'a'} className='nax-text'>Contact</Typography><br/>
                    </Grid>
                    <Grid item sm={3}>
                    <Typography variant='h4'>
                            Contact
                        </Typography>
                        <Typography component={'a'} >Phone: </Typography>
                        <Typography component={'a'} href="tel:+91 9990560531">+91 99905 60531</Typography><br/>
                        <Typography component={'a'}>Location: </Typography>
                        <Typography component={'a'}>GAT</Typography><br/>
                        <Typography component={'a'}>Email: </Typography>
                        <Typography component={'a'} href="mailto: gatoverflow@gmail.com">gatoverflow@gmail.com</Typography><br/>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </footer>
    )
}