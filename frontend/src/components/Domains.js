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
        <section style={{backgroundColor:'#26254d'}}>
        <Container >
                <Typography my={10} pt={10} textAlign={'center'} color='white' variant="h2">Domains</Typography>
                <Grid container spacing={10} justifyContent='center'>
                    {domains.map((domain,key)=>{
                        return(
                        <Grid key={key} item sm={4}>
                        <Card >
                        <CardContent style={{backgroundColor:'#bffffd'}}>
                            <Grid container >
                                <Grid item xs={12} justifyContent='center' display='flex'>
                                    <img className="domain-logo" src={domain.logo}></img>
                                </Grid>
                                <Grid item xs={12} justifyContent='center' display='flex'>
                                    <Typography variant="h5">{domain.title}</Typography>
                                </Grid>
                            </Grid>

                        </CardContent>
                        </Card>
                        </Grid>)
                    })}
                </Grid>
        </Container>
        </section>
    )
}