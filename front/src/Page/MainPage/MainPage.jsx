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
    const[data3,setData3] = useState([])
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
    useEffect(() => {
        fetch("http://localhost:3000/api/main3")
        .then(res => res.json())
        .then(data3 => setData3(data3))
    },[])
return (
<>
<main>

    <div className={classes.container}>
        {data2 && (
        <div key={data2.id} className={classes.TwoDiv}>
           <div className={classes.left}>
            <img src={data2.img} alt="" />
           </div>
           <div className={classes.right}>
                <div className={classes.TwoText}>
                    <p>{data2.titlemain}</p>
                    <p>{data2.news}</p>
                </div>
                <div className={classes.MetaInfo}>
                    <p>Category <span>{data2.categoru}</span></p>
                    <p>Publication Date <span>{data2.publicationdata}</span></p>
                    <p>Author <br /><span>{data2.author}</span></p>
                </div>
                <div className={classes.To_Meta_Info}>
                    <div>
                        <p><img src={Photo.like} alt="" />{data2.like}K</p>
                        <p><img src={Photo.rep} alt="" />{data2.repost}</p>
                    </div>
                    <div>
                        <button>Read More</button>
                    </div>
                </div>
           </div>
        </div>
    )}
        <div className={classes.DivThree}>
        {data.map(item =>(
            <div key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.titlemain}</p>
                <p>{item.categoru}</p>
                 <div className={classes.To_Meta_Info_2}>
                    <div>
                            <p><img src={Photo.like} alt="" />{item.like}K</p>
                            <p><img src={Photo.rep} alt="" />{item.repost}</p>
                    </div>
                    <div className={classes.ReadMore}>
                        <button>Read More<img src={Photo.arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <div className={classes.DivFour}>
        <div className={classes.TextFor}>
            <p>Welcome to Our News Hub</p>
            <p>Discover the World of Headlines</p>
        </div>
        <div className={classes.ReadMore}>           
            <button>View All News<img src={Photo.arrow} alt="" /></button>
        </div>
    </div>
</div>

<section className={classes.FiveSection}>
    <div className={classes.ButtonFive}>
        <div className= {classes.ButtonElements}>
        <div>
            <p>All</p>
        </div>
        <div>
            <p>Technology</p>
        </div>
        <div>
            <p>Politics</p>
        </div>
        <div>
            <p>Health</p>
        </div>
        <div>
            <p>Environment</p>
        </div>
        <div>
            <p>Sports</p>
        </div>
        </div>

    </div>
    <div className={classes.DivFive}>
        {data3.map(item =>(
            <div key={item.id} className={classes.DivFiveContainer}>
                <div className={classes.DivFiveLeft}>
                    <div className={classes.Beta}>
                        <img src={item.img} alt="" />
                        <div>
                            <p>{item.name}</p>
                            <p>{item.profesia}</p>
                        </div>
                    </div>
                    </div>
                    <div className={classes.DivFiveRight}>
                        <div className={classes.Beta2}>
                            <p>{item.Data}</p>
                            <p>{item.title}</p>
                            <p>{item.textnews}</p>
                            <div className={classes.To_Meta_Info_3}>
                                <div>
                                    <p><img src={Photo.like} alt="" />{item.like}</p>
                                    <p><img src={Photo.rep} alt="" />{item.repost}</p>
                                    <p><img src={Photo.coment} alt="" />{item.coment}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={classes.ReadMore}>
                            <button>Read More<img src={Photo.arrow} alt="" /></button>
                        </div>
                    </div> 
             </div>
            ))}
        </div>
</section>
</main>
</>
)
}
