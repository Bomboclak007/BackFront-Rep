import React from 'react';
import { useState } from "react"
import classes from './News.module.scss'
import { Photo } from "../../../../file"
import { Link, useFetcher } from 'react-router-dom'
import { use } from "react"
import { useEffect } from "react"
import axios from "axios"
import TechRevolution from "../../../Common/TechRevolution/TechRevolution"

export default function News() {
    const[data,setData] = useState([])
    const[data3,setData3] = useState([])

      useEffect(() => {
        fetch("http://localhost:3000/api/main")
        .then(res => res.json())
        .then(data => setData(data))
    },[])
        useEffect(() => {
        fetch("http://localhost:3000/api/main6")
        .then(res => res.json())    
        .then(data3 => setData3(data3))
    },[])
    const[expanded,setExpanded] = useState (false)
    return(
<>


      <div className={classes.BackImage}>
        <p>The Rise of Artificial Intelligence in Healthcare</p>
      </div>
    <div className={classes.DivText}>
        <div className={classes.right}>
            <div className={classes.Top}>
                <div className={classes.Text}>
                    <p>Introduction</p>
                    <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>
                </div>
            </div>
            <div className={classes.Bot2}>
                    <div className={`${classes.content} ${expanded ? classes.expanded : ""}`}>
                        <p>Artificial Intelligence (AI)</p>
                        <p>
Абсурдная классика

Иван, как бревно, провалился в болото,
А пудель в реке утонул, как топор.
Иван Топорышкин пошел на охоту,
С ним пудель вприпрыжку пошел, как топор.
Иван повалился бревном на болото,
А пудель в реке перепрыгнул забор.
Иван Топорышкин пошел на охоту,
С ним пудель в реке провалился в забор.

Скороговорка с сюжетом

В недрах тундры выдры в гетрах
Тырят в вёдра ядра кедров.
Выдрав с выдры в тундре гетры,
Вытру выдрой ядра кедра,
Вытру гетрой выдре морду —
Ядра в вёдра, выдру в тундру!Без костюма — лоск пожиже,
Без очков — на вид глупее.
Шапку скинул — плешь наружу,
Без перчаток — руки-крюки.
Без жилета грудь поуже,
Зубы вынул — хуже звуки.
Без портфеля вид попроще,
Без мобильника — как нищий.
Скинул майку — вовсе тощий,
Сбрил усы — такой носище!
Посмотрела — засмеялась!
Как важна вещей опека!
Снять трусы ему осталось —
И не будет человека.Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.One of the most prominent applications of AI in healthcare is in diagnostic imaging. AI algorithms have demonstrated remarkable proficiency in interpreting medical images such as X-rays, MRIs, and CT scans. They can identify anomalies and deviations that might be overlooked by the human eye. This is particularly valuable in early disease detection. For instance, AI can aid radiologists in detecting minute irregularities in mammograms or identifying critical findings in chest X-rays, potentially indicative of life-threatening conditions.</p>
                
                    </div>
                <button className={`${classes.ReadMore} ${expanded ? classes.ReadMoreOpen : ""}`}onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Show less ↑" : "Read Full Blog ↓"}
                </button>
            </div>
        </div>
        <div className={classes.left}>
            <div className={classes.Top}>
                                     {data3.map(item =>(
                    <div key={item.id} className={classes.DivFiveContainer}>
                <div className={classes.To_Meta_Info_3}>
                    <div>
                        <p><img src={Photo.like} alt="" />{item.like}</p>
                        <p><img src={Photo.rep} alt="" />{item.repost}</p>
                        <p><img src={Photo.coment} alt="" />{item.coment}</p>
                     </div>
                 </div>
                    </div>
                    ))}
            </div>
            <div className={classes.Bot}>
                    <div className={classes.TopBot}>
                        <div className={classes.DivMy}>
                            <p>Publication Date <span>October 15, 2023</span></p>
                            <p>Category<span>Healthcare</span></p>
                            <p>Reading Time<span>10 Min</span></p>
                            <p>Author Name<span>Dr. Emily Walker</span></p>
                        </div>
                    </div>
                    <div className={classes.BotBot}>
                        <div className={classes.Spisok}>
                            <p>Table of Contents</p>
                            <div className={classes.DivUl}>
                                <ul>
                                    <li>Introduction</li>
                                    <li>AI in Diagnostic Imaging</li>
                                    <li>Predictive Analytics and Disease Prevention</li>
                                    <li>Personalized Treatment Plans</li>
                                    <li>Drug Discovery and Research</li>
                                    <li>AI in Telemedicine</li>
                                    <li>Ethical Considerations</li>
                                    <li>The Future of AI in Healthcare</li>
                                    <li>Conclusion</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
 <div className={classes.DivThree}>
        {data.map(item =>(
            <div key={item.id}>
                <img src={item.img} alt="" />
                    <p>{item.titlemain}</p>
                    <p>{item.categoru}</p>
                 <div className={classes.To_Meta_Info_2}>
                    <div className={classes.ReadMore}>
                        <button>Read More<img src={Photo.arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        ))}
        
    </div>
            <TechRevolution/>
    
    </>
  );
}
