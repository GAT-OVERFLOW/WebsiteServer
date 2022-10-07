import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import About from '../components/About';
export default function Homepage(){


    const events = 
       [
        {"title":"RV Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"},
        {"title":"PES Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"},
        {"title":"BMS Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"},
        {"title":"NMIT Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"},
        {"title":"VIT Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"},
        {"title":"AIT Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"},
        {"title":"GAT Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"},
        {"title":"SJBIT Hackathon","date":"01-30-2021","link":"https://www.gat.ac.in"}
        ]
    
    return(<React.Fragment>
        <Navbar textcolor={'white'}/>
        <Banner image={'https://miro.medium.com/max/1024/0*CIIy-ftkTpOnglYd.jpg'}
            title={"GAT-Overflow"}
            description={'Learn. Upskill. Complete'}
            />
        <About events={events}></About>

    </React.Fragment>);
}