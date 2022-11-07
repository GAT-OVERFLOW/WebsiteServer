import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Team from '../components/Team';
import data from '../data/team.json';

export default function Members(){
    
    const sections = data.map((domain)=>{
        return (
        <section style={{backgroundImage:"https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png"}}>
        <Typography paddingBottom={3} variant='h3' textTransform={'uppercase'} textAlign={'center'}>{domain.name}</Typography>
        <Team members={domain.coordinators} title="Coordinators"/>
        <Team members={domain.subcore} title="Subcore"/>
        </section>);
    })


    return(<div style={{padding:"5rem",backgroundSize:'100vw',backgroundRepeat:'no-repeat', background:"url('https://3.bp.blogspot.com/-7lMP43U_k7s/Ue11W90uvYI/AAAAAAAAFO4/pBaiD-TZp7Q/s1600/abstract-sky-background.jpg')"}}>
        {sections}
    </div>)
}