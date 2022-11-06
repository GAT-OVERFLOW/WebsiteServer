import { Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "mui-image"

export default function ProjectDomains({ domains }) {
    return (<section className="team-section">
        <Grid>
            <Grid item sm={4}>
                <Typography variant="h1" style={{ fontSize: "60px" }} paddingY={"50px"} textAlign={'center'}>Domains</Typography>
            </Grid>
            <Grid item sm={4}>
                <Grid container justifyContent={'center'} paddingX={"1px"} spacing={10} paddingBottom={"50px"} >
                    {domains.map((domain) => {
                        return (
                            <Grid item sm={3}>
                                <Card style={{ boxShadow: '0 0 0.3rem 0.2rem gray', borderRadius:"10px", backgroundColor: "rgba(255, 255, 255, .4)", backdropFilter: " blur(10px)" }}>
                                    <CardContent >
                                            <img src="https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png" alt="" style={{  display: "block",height:"75Fpx", marginLeft: "auto", marginRight: "auto", width: "75px"}}/>
                                    </CardContent>
                                    <CardContent><Typography variant='h1' style={{ fontSize: "30px", color:"black" }} align="center">{domain.category}</Typography></CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    </section>)
}