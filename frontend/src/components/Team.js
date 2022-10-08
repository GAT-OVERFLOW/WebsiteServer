import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Team({members}){
    return(<section className="team-section">
        <Container>
            <Typography variant="h3" py={10} textAlign={'center'}>Team</Typography>
            <Grid container justifyContent={'center'} spacing={10} py={10}>
            {members.map((member)=>{return(
                <Grid item sm={4}>
                    <Card style={{boxShadow: '0 0 0.3rem 0.2rem gray'}}>
                        <CardContent>
                         
                            <img className="team-dp" src={member.dp}></img>

                            <Typography justifyContent={'center'} py={3} display='flex' variant="h4">{member.name}</Typography>
                            <Typography component={'a'} href={member.github} justifyContent={'center'} alignItems={'center'} display='flex'><GitHubIcon/>&nbsp;{member.github}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )})}
                
            </Grid>
        </Container>
    </section>)
}