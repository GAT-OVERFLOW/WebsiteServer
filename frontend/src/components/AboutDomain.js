import { Grid, Typography,Container } from "@mui/material";
import { Box } from "@mui/system";

export default function AboutDomain({about,aboutimage,title}){
    return(
        <section>
            <Grid container p={10} justifyContent='center'>
                <Grid item sm={4} sx={{ display: { xs: 'none', md: 'block' } }} >
                    <Container >
                    <img className="about-image" src={aboutimage}></img>
                    </Container>
                </Grid>
                <Grid item sm={8} display='flex' alignItems={'center'}>
                    <Container>
                    <Typography  variant='h3'>
                        About {title}
                    </Typography>
                    <Typography textAlign={'justify'}>
                        {about}
                    </Typography>
                    </Container>
                </Grid>
                
            </Grid>
        </section>
    )
}