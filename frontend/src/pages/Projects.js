import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import AboutProject from "../components/AboutProject";
import ProjectDomains from "../components/ProjectDomains"
import Team from "../components/Team";
import Banner from "../components/Banner"

export default function Projects(){
    const {id} = useParams();
    const [projectData, setProfileData] = useState({"title":"", "ghLink":"","about":"", "domains":[], "contribs":[{"email":"","name":"","role":"","department":"","github":"",}], "status":""})
    const url = 'http://localhost:8080/project?id='+id;
    useEffect(()=>{
        axios.get(url).then((response) =>{setProfileData(response.data[0])})
    },[])
    console.log("project data",projectData)
    return (<React.Fragment>
        <Banner image={"https://images4.alphacoders.com/104/104644.jpg"}
            title={projectData.title}
            description={''}
            />
        <AboutProject  about={projectData.about} ghLink={projectData.ghLink} status={projectData.status} techUsed = {projectData.techUsed}/>
        <ProjectDomains domains = {projectData.domains} />
        <Team members={projectData.contribs}/>
    </React.Fragment>)
}