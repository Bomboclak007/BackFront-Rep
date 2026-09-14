import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return(
<>
<header>
    <div className={styles.headerBlockTop}>
        <div className={styles.headerJC}>
            <div className={styles.logoPhoto}>
                <img src='src\assets\Logo.png' alt="" />
            </div>
            <nav className={styles.nav}>
                    <NavLink to={"MainPage"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>1</NavLink>
                    <NavLink to={"/service"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>2</NavLink>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? "active":"")}>3</NavLink>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? "active":"")}>4</NavLink>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? "active":"")}>5</NavLink>
                    <NavLink to={'/'} className={({isActive}) => (isActive ? "active":"")}>6</NavLink>
                <button className={styles.ConectUs}>Contact Ass</button>
            </nav> 
        </div>
    </div>
</header>
</>
)
}
