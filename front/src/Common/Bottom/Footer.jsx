import { useState } from "react"
import classes from './Footer.module.scss'
import { Photo } from "../../../file"
import { Link, useFetcher } from 'react-router-dom'
import { use } from "react"
import { useEffect } from "react"
import axios from "axios"
import { NavLink } from 'react-router-dom'
export default function Bottom() {
return (
    <>

        <footer>
            <div className={classes.foter}>
                <div className={classes.Up}>
                    <ul>
                        <NavLink to={"/"}  className={({ isActive }) => (isActive ? `${classes.active2} ` : "")}>Home</NavLink>
                        <NavLink to={"/#"} className={({isActive}) => (isActive ? `${classes.active} `: "")}>Features</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Blogs</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Resources</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Testimonials</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Contact Us</NavLink>
                            <p></p>
                        <NavLink to={'/'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Newsletter</NavLink>
                    </ul>
                    <ul>
                        <NavLink to={"/"}  className={({ isActive }) => (isActive ? `${classes.active2}` : "")}>News</NavLink>
                        <NavLink to={"/#"} className={({isActive}) => (isActive ? `${classes.active}`: "")}>Trending Stories</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Featured Videos</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Technology</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Health</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Politics</NavLink>
                        <NavLink to={'/'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Environment</NavLink>
                    </ul>
                    <ul>
                        <NavLink to={"/"}  className={({ isActive }) => (isActive ? `${classes.active2}` : "")}>Home</NavLink>
                        <NavLink to={"/#"} className={({isActive}) => (isActive ? `${classes.active}`: "")}>Features</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Blogs</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Resources</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Testimonials</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Contact Us</NavLink>
                        <NavLink to={'/'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Newsletter</NavLink>
                    </ul>
                    <ul>
                        <NavLink to={"/"}  className={({ isActive }) => (isActive ? `${classes.active2}` : "")}>Blogs</NavLink>
                        <NavLink to={"/#"} className={({isActive}) => (isActive ? `${classes.active} `: "")}>Quantum Computing</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>AI Ethics</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Space Exploration</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Biotechnology</NavLink>
                            <p></p>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Renewable Energy</NavLink>
                        <NavLink to={'/'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Biohacking</NavLink>
                    </ul>
                    <ul>
                        <NavLink to={"/"}  className={({ isActive }) => (isActive ? `${classes.active2} ` : "")}>Podcasts</NavLink>
                        <NavLink to={"/#"} className={({isActive}) => (isActive ? `${classes.active}    `: "")}>AI Revolution</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>AI Revolution</NavLink>
                            <p></p>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>TechTalk AI</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>AI Conversations</NavLink>

                    </ul>
                    <ul>
                        <NavLink to={"/"}  className={({ isActive }) => (isActive ? `${classes.active2} ` : "")}>Resources</NavLink>
                        <NavLink to={"/#"} className={({isActive}) => (isActive ? `${classes.active}`: "")}>Whitepapers</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Ebooks</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Reports</NavLink>
                        <NavLink to={'/#'} className={({isActive}) => (isActive ? `${classes.active} `:"")}>Research Papers</NavLink>
                    </ul>
                </div>
                <div className={classes.bot}>
                    <div className={classes.text}>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div className={classes.photo}>
                        <a href="https://vk.ru/id357167312"><img src={Photo.twiter} alt="" /></a>
                        <a href="https://vk.ru/ne_solewoy007"><img src={Photo.coundclaud} alt="" /></a>
                        <a href="https://vk.ru/rakdav"><img src={Photo.insta}/></a>
                    </div>
                    <p>© 2024 FutureTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
)
}