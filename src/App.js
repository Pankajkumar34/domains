
// import './App.css';
import Home from "./MainHome/Home";
import Nav from "./NavBar/Nav";
import Contact from "./ContectFolder/Contact";
import { AdminCreate, AdminData, AdminForm } from "./Admin/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from "./dashbord/Dashbord";

import UpdateData from "./dashbord/updateData";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <Home/> */}
        <Routes>
          <Route  path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/admin" element={<AdminForm/>}>
           
          </Route>
          <Route exact path="/" element={<AdminData/>} >
          <Route exact path="/dashbord" element={<Dashbord/>}></Route>
          <Route exact path="/home2" element={<UpdateData/>}></Route>
          </Route>
        <Route path="/create" element={<AdminCreate/>}></Route>
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
