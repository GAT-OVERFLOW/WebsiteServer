import React from "react";
import Banner from "../components/Banner";
import {useParams} from 'react-router-dom';
import data from '../data/domains.json';
import AboutDomain from "../components/AboutDomain";

export default function Domain(){
    const {id} = useParams();
    console.log(id)
    const {about,aboutimage,bgImage,completed,logo,ongoing,team,title,caption} = data[id];
    console.log(about,bgImage,completed,logo,ongoing,team,title)
    return (<React.Fragment>
        <Banner image={bgImage}
            title={title}
            description={caption}
            />
        <AboutDomain aboutimage={aboutimage} about={about} title = {title}/>
    </React.Fragment>)
}