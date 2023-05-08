import style from "./navbar.module.css"
import { Link } from "react-router-dom"
import {FiX,FiMenu} from "react-icons/fi"
import { useState } from "react"
const Nav = ()=>{
    let [view,setView] = useState(true)
    let viewClick = ()=>{setView(!view)}
    let menuClick = ()=>setView(true)
    
    return(
                <div id={style.nav}>
                        <h1>GuNA</h1>
                        <ul id={view ? style.cla2  : style.cla1} className={style.class1}>
                            <li><Link onClick={menuClick} className={style.Link} to="/">Home</Link></li>
                            <li><Link onClick={menuClick} className={style.Link} to="/create">Create User</Link></li>
                            <li><Link onClick={menuClick} className={style.Link} to="/user">Users</Link></li>
                        </ul>
                        <div onClick={viewClick} className={style.div}>
                            {view ? <FiMenu className={style.FiX}/> : <FiX className={style.FiX}/>}
                        </div>
                 </div>
        
    )
}
export default Nav