import User from "./Components/User"
import Create from "./Components/Create"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Edit from "./Components/Edit"

const App = ()=>{
    return(
        <div>
            <BrowserRouter>
            <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/create" element={<Create/>}></Route>
                    <Route path="/user" element={<User/>}></Route>
                    <Route path="/edit/:index" element={<Edit/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App