import axios from "axios"
import { useEffect, useState } from "react"
import style from "./navbar.module.css"
import { Link } from "react-router-dom"
const User = () => {

    let [state, setState] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/info")
            .then((response) => {
                setState(response.data)
                console.log(response.data);
            })
    },[])
    let deleteData=(a)=>{
        axios.delete(`http://localhost:3000/info/${a}`)
        .then(()=>{console.log('Delete');})
        window.location.assign("/User")
    }
    
    return (
        <div className={style.mainbox}>
            {state.map((x)=>{
                return(

                         <div className={style.result}>
                            <div className={style.d1}>
                                <p>Name:</p>
                                <p>{x.name}</p>
                            </div>
                            <div className={style.d2}>
                                <p>Salary:</p>
                                <p>{x.sal}</p>
                            </div>
                            <div className={style.d3}>
                                <p>Company:</p>
                                <p>{x.comp}</p>
                            </div>
                            <div className={style.d4}>
                                <Link className={style.tLink} to={`/edit/${x.id}`}>Edit</Link>
                                <button onClick={()=>{deleteData(x.id)}}>Delete</button>
                            </div>
                        </div> 
                    
                )
            })}
        </div>
    )
}

export default User