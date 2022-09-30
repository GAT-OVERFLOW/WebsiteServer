
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";


export default function Domains(){
    const domains = [
        {link:"https://www.gat.ac.in",title:"Web Development",logo:"https://e7.pngegg.com/pngimages/179/163/png-clipart-information-technology-information-and-communications-technology-industry-technology-blue-electronics-thumbnail.png"},
        {link:"https://www.gat.ac.in",title:"Artificial Intelligence",logo:"https://e7.pngegg.com/pngimages/179/163/png-clipart-information-technology-information-and-communications-technology-industry-technology-blue-electronics-thumbnail.png"},
        {link:"https://www.gat.ac.in",title:"Embedded Systems",logo:"https://e7.pngegg.com/pngimages/179/163/png-clipart-information-technology-information-and-communications-technology-industry-technology-blue-electronics-thumbnail.png"},
        {link:"https://www.gat.ac.in",title:"Python programming",logo:"https://e7.pngegg.com/pngimages/179/163/png-clipart-information-technology-information-and-communications-technology-industry-technology-blue-electronics-thumbnail.png"},
        {link:"https://www.gat.ac.in",title:"Mobile App Development",logo:"https://e7.pngegg.com/pngimages/179/163/png-clipart-information-technology-information-and-communications-technology-industry-technology-blue-electronics-thumbnail.png"},
        {link:"https://www.gat.ac.in",title:"CAD",logo:"https://e7.pngegg.com/pngimages/179/163/png-clipart-information-technology-information-and-communications-technology-industry-technology-blue-electronics-thumbnail.png"},
        {link:"https://www.gat.ac.in",title:"Cyber security",logo:"https://e7.pngegg.com/pngimages/179/163/png-clipart-information-technology-information-and-communications-technology-industry-technology-blue-electronics-thumbnail.png"}
    ];
    const domainlist = domains.map((item)=>{
        return(
            <Grid item xs={12} md={3} m={5} justifyContent='center'>
            <MKBox position="relative" variant='gradient' color="light" bgColor='info' borderRadius='lg' p={5}>
            <Grid container justifyContent='center'>
                <Grid item xs={12} style={{justifyContent:'center',display:'flex'}}>
                    <img style={{height:'5rem',width:'5rem'}} src={item.logo}/>
                </Grid>
                <Grid item >
                    <Typography>{item.title}</Typography>
                </Grid>
            </Grid>
           
            </MKBox>
            </Grid>
            )
    })
    return (
        <MKBox bgColor='dark' color='light' component="section" pt={6} >
        <Container justifyContent='center'>
            <Grid mb={5} container justifyContent='center' alignItems="center">
            <Typography variant='h1' style={{color:"white"}}>Domains</Typography>
            </Grid>
          <Grid  container justifyContent='center' alignItems="center">
                {domainlist}
          </Grid>
        </Container>
      </MKBox>
    )
}