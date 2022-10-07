import Navbar from '../components/Navbar';
import React from 'react'
import Banner from '../components/Banner';
export default function Homepage(){
    return(<React.Fragment>
        <Navbar textcolor={'white'}/>
        <Banner image={'https://miro.medium.com/max/1024/0*CIIy-ftkTpOnglYd.jpg'}
            title={"GAT-Overflow"}
            description={'Learn. Upskill. Complete'}
            />

    </React.Fragment>);
}