import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MKBox from "components/MKBox"
import { Typography } from '@mui/material';
export default function Events(){

const events = [
    {title:"BMS Hackathon",link:"https://www.gat.ac.in",date:"01-12-2022"},
    {title:"RVCE Hackathon",link:"https://www.gat.ac.in",date:"36-12-2023"},
    {title:"PES Hackathon",link:"https://www.gat.ac.in",date:"01-12-2022"},
    {title:"GAT Workshop",link:"https://www.gat.ac.in",date:"28-2-2023"},
    {title:"PES Workshop",link:"https://www.gat.ac.in",date:"28-2-2023"}
]
const listitems = events.map((item,key)=>{
    return(
    <a href={item.link} target="_blank" >
    <ListItem key={key}>
    <ListItemText primary={item.title} secondary={item.date} />
    </ListItem>
    <Divider variant="inset" component="li"/>
    </a>
  )
})

    return(

<MKBox
  color="white"
  bgColor="info"
  variant="gradient"
  borderRadius="lg"
  shadow="lg"
  opacity={1}
  p={2}
>
  <Typography variant='h3'>Events</Typography>
  <MKBox
  color="dark"
  bgColor="white"
  variant="gradient"
  borderRadius="lg"
  shadow="lg"
  opacity={1}
  p={2}
>
  <List style={{maxHeight: 300, overflowY: 'scroll'}}>
    {listitems}
  </List>
</MKBox>
</MKBox>
    )
}