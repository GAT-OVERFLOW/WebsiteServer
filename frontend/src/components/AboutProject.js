import GitHub from "@mui/icons-material/GitHub";
import { Grid, Typography, Container} from "@mui/material";


export default function AboutProject({about, ghLink, status, techUsed}) {
    return (
        <section className="team-section">
            <Grid container p={10} justifyContent='center'>
                    <Grid item sm={4} sx={{ display: { xs: 'none', md: 'block' } }} >
                    </Grid>
                    <Grid item sm={8} display='flex' alignItems={'center'}>
                        <Container style={{ boxShadow: '0 0 0.3rem 0.2rem gray', borderRadius:"10px", backgroundColor: "rgba(255, 255, 255, .5)", backdropFilter: " blur(10px)" }}>
                            <Typography textAlign={'justify'} variant="p" style={{ fontSize: "35px" }}>
                                {about}
                            </Typography><br/>
                            <Typography textAlign={'left'} variant="p" style={{ fontSize: "25px" }}>
                                GitHub: <a href={ghLink}> <GitHub/>{ghLink}</a>
                            </Typography><br/>
                            <Typography textAlign={'left'} variant="p" style={{ fontSize: "25px" }}>
                                Status: {status}
                            </Typography><br/>
                            <Typography textAlign={'left'} variant="p" style={{ fontSize: "25px" }}>
                                Technologies Used: {techUsed}
                            </Typography>
                        </Container>
                    </Grid>
            </Grid>
        </section>
    )
}