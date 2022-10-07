import { Grid, Typography } from "@mui/material"

export default function Banner({image,title,description}){
    const styles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage:"url("+image+")",
        objectFit: 'contain',
        backgroundPosition:'bottom',
        height: '80vh'
    }
    return(
        <section style={styles}>
            <Grid style={{height:'100%'}} container alignItems={'center'} justifyContent='center'>
                <Grid item>
                    <Typography color={'white'} variant='h1'>{title}</Typography>
                    <Typography color={'white'} variant='h5' textAlign={'center'}>{description}</Typography>
                </Grid>
            </Grid>
        </section>)
    }