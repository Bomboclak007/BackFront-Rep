import { useState } from "react"
import classes from '../TechRevolution/TechRevolution.module.scss'
import { Photo } from "../../../file"
import { Link, useFetcher } from 'react-router-dom'
import { use } from "react"
import { useEffect } from "react"
import axios from "axios"


export default function TechRevolution(){
    const[data5,setData5] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/api/main5")
        .then(res => res.json())
        .then(data5 => setData5(data5))
    },[])
    return(
        <>
    <section className={classes.TechRevolutionSection}>
        <div className={classes.TechRevolution}>
            <div className={classes.DivTech}>
                <div className={classes.DivTechUp}>
                    <div className={classes.DivTechUpLeft}>
                        <img src={Photo.Logo} alt="" />
                    </div>
                    <div className={classes.DivTechUpRight}>
                        <div>
                            <p>Learn, Connect, and Innovate</p>
                        </div>
                        <p>Be Part of the Future Tech Revolution</p>
                        <p>Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                    </div>
                </div>
                <div className={classes.DivTechDown}>
                    {data5.map(item =>(
                        <div className={classes.DivBack} key={item.id}>
                            <div className={classes.Up}>
                                <p>{item.maintitle}</p>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={classes.Down}>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    </section>
        </>
    )
}
