import axios from "axios"
import style from "./navbar.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Edit = ()=>{
    let [name,setName] = useState("")
    let inputName = (e)=>{
        setName(e.target.value)
        console.log(e.target.value);
    }

    let [sal,setSal] = useState("")
    let inputSalary = (e)=>{
        setSal(e.target.value)
    }

    let [comp,setComp] = useState("")
    let inputCompany = (e)=>{
        setComp(e.target.value)
    }

    let {index} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:3000/info/${index}`)
        .then((response)=>{
            console.log(response);
            setName(response.data.name)
            setSal(response.data.sal)
            setComp(response.data.comp)
        })
    },[])

    let done = (e)=>{
        e.preventDefault()
        let payload = {name,sal,comp}
        axios.put(`http://localhost:3000/info/${index}`,payload)
        window.location.assign("/user")
    }
    return(
        <div className={style.edit}>
            <table>
                <tr>
                    <td>Name</td>
                    <td><input value={name} type="text" onChange={inputName}/></td>
                </tr>
                <tr>
                    <td>Salary</td>
                    <td><input type="text" value={sal} onChange={inputSalary}/></td>
                </tr>
                <tr>
                    <td>Company</td>
                    <td><input type="text" value={comp} onChange={inputCompany}/></td>
                </tr>
                <tr>
                    <td colSpan="2" className={style.tbtn}><input type="submit" onClick={done}/></td>
                </tr>
            </table>
        </div>
    )
}
export default Edit