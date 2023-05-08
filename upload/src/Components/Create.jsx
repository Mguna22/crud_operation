import { useState } from "react"
import axios from "axios"
import style from "./navbar.module.css"

const Create = ()=>{
    let [name,setName] = useState("")
    let inputName = (u)=>{
        console.log(u.target);
        setName(u.target.value)
    }

    let [sal,setSal] = useState("")
    let inputSal = (e)=>{
        setSal(e.target.value)
    }

    let [comp,setComp] = useState("")
    let inputCom = (e)=>{
        setComp(e.target.value)
    }

    let sub = (e)=>{
        e.preventDefault()
        let paylout = {name, sal, comp}
        axios.post("http://localhost:3000/info",paylout)
        .then(()=>{
            console.log("Done");
        setComp("")
        setName("")
        setSal("")
        })
    }
    return(
        <div className={style.div_form}>
            <form action="" className={style.form}>
                <div>
                    <h3>Employee Details</h3>
                </div>
                <div>
                    <input type="text" value={name} onChange={inputName} placeholder="User Name"/>
                </div>
                <div>
                    <input type="text" value={sal} onChange={inputSal} placeholder="Salary"/>
                </div>
                <div>
                    <input type="text" value={comp} onChange={inputCom} placeholder="Company"/>
                </div>
                <div className={style.submit}>
                    <button className={style.btn} onClick={sub}>Sumbit</button>
                </div>
            </form>
          
        </div>

    )
}
export default Create