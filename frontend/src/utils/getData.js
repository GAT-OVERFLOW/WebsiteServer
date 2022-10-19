import {useEffect,useState} from 'react';
import axios from 'axios'

export default function GetData(id){
    const [data, setData] = useState("");
    const url = 'http://localhost:8080/projects?id='+id
    console.log(url)
    useEffect(()=>{
        axios.get(url).then((response) => {setData(response.data[0])});
        console.log(data)
    },[]);
    return data
}