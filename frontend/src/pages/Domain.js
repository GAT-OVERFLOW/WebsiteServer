import React from "react";
import Banner from "../components/Banner";
import {useParams} from 'react-router-dom';
import data from '../data/domains.json';
import AboutDomain from "../components/AboutDomain";
import DomainInfo from "../components/DomainInfo";
import Team from "../components/Team";

export default function Domain(){
    const {id} = useParams();
    const {about,aboutimage,roadmap,bgImage,completed,logo,ongoing,team,title,caption} = data[id];
    console.log(about,bgImage,completed,logo,ongoing,team,title)
    return (<React.Fragment>
        <Banner image={bgImage}
            title={title}
            description={caption}
            />
        <AboutDomain aboutimage={aboutimage} about={about} title = {title}/>
        <DomainInfo roadmap={roadmap} completed={completed} ongoing={ongoing}></DomainInfo>
        <Team members={team}/>
    </React.Fragment>)
}