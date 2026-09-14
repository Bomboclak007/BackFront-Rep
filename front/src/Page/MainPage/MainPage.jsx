import { useState } from "react"
import classes from './MainPage.module.scss'
import { Photo } from "../../../file"
import { Link, useFetcher } from 'react-router-dom'
import { use } from "react"
import { useEffect } from "react"
import axios from "axios"

export default function MainPage() {
    const[data,setData] = useState([])
    const[data2,setData2] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3000/api/main")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    useEffect(() => {
        fetch("http://localhost:3000/api/main2")
        .then(res => res.json())
        .then(data2 => setData2(data2))
    },[])
return (
<>
<main>
    {/* <div>
        {data.map(item =>(
            <div key={item.id}>
                <p>{item.categoru}</p>
                <img src={item.img} alt="" />
            </div>
        ))}
    </div> */}
    <div>
        {data2 && (
        <div key={data2.id}>
            <p>{data2.titlemain}</p>
            <img src={data2.img} alt="" />
        </div>
    )}
    </div>
        
</main>
</>
)
}