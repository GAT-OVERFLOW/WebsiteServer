import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';
import About from '../components/About';
import Events from "../data/events.json";
import Domains from '../components/Domains';
import Footer from '../components/Footer';
export default function Homepage(){

    return(<React.Fragment>
        <Navbar/>
        {/* <Banner image={'https://images2.alphacoders.com/702/70292.jpg'} */}
        
        <Banner image={"https://images4.alphacoders.com/104/104644.jpg"}
            title={"GAT Overflow"}
            description={'Learn. Upskill. Complete'}
            />
        <About events={Events}></About>
        <Domains></Domains>
        <Footer/>
    </React.Fragment>);
}