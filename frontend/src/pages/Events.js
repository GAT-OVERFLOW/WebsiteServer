import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Banner from "../components/Banner";
import { Grid, Container, Typography } from "@mui/material";

export default function Events() {
    const { id } = useParams();
    const [eventData, setEventData] = useState({ "_id": "", "title": "", "regLink": "", "description": "", "venue": "", "teamStrength": "", "image": "", "pdf": "" })
    useEffect(() => {
        axios.get('http://localhost:8080/event?id=' + id).then((response) => { setEventData(response.data[0]) })
    }, [])
    console.log(eventData)
    return (
        <React.Fragment>
            <Banner image={"https://images4.alphacoders.com/104/104644.jpg"} title={eventData.title} description={''} />
            <section className="events-details">
                <Grid container p={10} justifyContent='center'>
                    <Grid item sm={8} display='flex' alignItems={'center'}>
                        <Container style={{ boxShadow: '0 0 0.3rem 0.2rem white', borderRadius: "10px", backgroundColor: "rgba(254, 227, 110, 1)", backdropFilter: " blur(10px)" }}>
                            <Typography textAlign={'justify'} variant="p" style={{ fontSize: "35px" }}>
                                {eventData.description}
                            </Typography><br />
                            <Typography textAlign={'left'} variant="p" style={{ fontSize: "25px" }}>
                                Last date for resgistration:
                            </Typography><br />
                            <Typography textAlign={'left'} variant="p" style={{ fontSize: "25px" }}>
                                Venue: {eventData.venue}
                            </Typography><br />
                            <Typography textAlign={'left'} variant="p" style={{ fontSize: "25px" }}>
                                Team Strength: {eventData.teamStrength}
                            </Typography>
                            <Typography textAlign={'left'} variant="p" style={{ fontSize: "25px" }}>
                                Link: <a href={eventData.regLink}>{eventData.regLink}</a>
                            </Typography>
                        </Container>
                    </Grid>
                </Grid>
            </section>
        </React.Fragment>
    )
}