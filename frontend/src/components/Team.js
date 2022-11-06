import { Card, CardContent, Grid, Typography, Avatar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Team({ members }) {
    console.log(members)
    return (<section className="team-section">
        <Grid>
            <Grid item sm={4}>
                <Typography variant="h1" style={{ fontSize: "60px" }} paddingY={"50px"} textAlign={'center'}>Team</Typography>
            </Grid>
            <Grid item sm={4}>
                <Grid container justifyContent={'center'} paddingX={"1px"} spacing={10} paddingBottom={"50px"} >
                    {members.map((member) => {
                        return (
                            <Grid item sm={3}>
                                <Card style={{ boxShadow: '0 0 0.3rem 0.2rem gray', borderRadius:"10px", backgroundColor: "rgba(255, 255, 255, .4)", backdropFilter: " blur(10px)" }}>
                                    <CardContent style={{ paddingLeft: "25%" }}>
                                        <a href={"http://localhost:3000/profile/" + member._id}>
                                            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" sx={{ width: 175, height: 175 }} />
                                        </a>
                                    </CardContent>
                                    <CardContent>
                                        <a href={"http://localhost:3000/profile/" + member._id}>
                                            <Typography variant='h1' style={{ fontSize: "30px", padding: "5px", color:"black" }} align="center">{member.name}</Typography>
                                        </a>
                                        <Typography variant='h2' style={{ fontSize: "20px", padding: "5px" }} align="left">{member.department}</Typography>
                                        <Typography variant='h2' style={{ fontSize: "20px", padding: "5px" }} align="left">{member.role}</Typography>
                                        <Typography variant='h2' style={{ fontSize: "20px", padding: "5px" }} component={'a'} href={member.email} justifyContent={'left'} alignItems={'left'} display='flex'><EmailIcon />&nbsp;{member.email}</Typography>
                                        <Typography variant="h2" style={{ fontSize: "20px", padding: "5px" }} component={'a'} href={member.github} justifyContent={'left'} alignItems={'left'} display='flex'><GitHubIcon />&nbsp;{member.github}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    </section>)
}