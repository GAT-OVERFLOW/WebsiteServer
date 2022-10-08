import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
const domains = [
        {title:"Web development",logo:"https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png"},
        {title:"Artificial intelligence",logo:"https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png"},
        {title:"Embedded systems",logo:"https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png"},
        {title:"CAD",logo:"https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png"},
        {title:"Python programming",logo:"https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png"},
        {title:"Mobile app development",logo:"https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png"},
        {title:"Cyber security",logo:"https://spng.pngfind.com/pngs/s/223-2239115_instagram-social-icon-black-red-instagram-icons-png.png"},
        ]
export default function Domains(){
    return(
        <Container maxWidth='xl'>
        <section id="domain-section">
                <Typography my={10} pt={10} textAlign={'center'} color='white' variant="h2">Domains</Typography>
                <Container >
                <Grid container spacing={10} pb={10} mb={10} justifyContent='center'>
                    {domains.map((domain,key)=>{
                        return(
                        <Grid key={key} item sm={4} style={{width:"100%"}}>
                            <Box className='cardbox'>
                        <Card className="domain-card" >
                        <CardContent>
                            <Container>
                            <Grid container>
                                <Grid item xs={12} justifyContent='center' display='flex'>
                                    <img className="domain-logo" src={process.env.PUBLIC_URL+domain.logo} ></img>
                                </Grid>
                                
                                <Grid item xs={12} justifyContent='center' display='flex'>
                                    <Typography textAlign={'center'} variant="body1">{domain.title}</Typography>
                                </Grid>
                            </Grid>
                            </Container>

                        </CardContent>
                        </Card>
                        </Box>
                        </Grid>)
                    })}
                </Grid>
                </Container>
        </section>
        </Container>
    )
}