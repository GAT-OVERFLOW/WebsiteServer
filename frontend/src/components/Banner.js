import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"

export default function Banner({image,title,description}){

    return(
        <section className="banner-section" style={{background:"linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("+image+") no-repeat fixed center"}}>
            <Grid style={{height:'100%'}} container alignItems={'center'} justifyContent='center'>
                <Grid item>
                    <Container>
                    <Typography color={'white'} variant='h1'  textAlign={'center'}>{title}</Typography>
                    <Typography color={'white'} variant='h5' textAlign={'center'}>{description}</Typography>
                    </Container>
                </Grid>
            </Grid>
        </section>)
    }