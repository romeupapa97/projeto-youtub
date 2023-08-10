import { useContext } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { UserContext } from "./contexts/userContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Inscricao from "./pages/inscrição";
import Libery from "./pages/biblioteca";
import Historico from "./pages/historico";

function App() {
  const {openMenu, setOpenMenu}=useContext(UserContext);
  return (
    <BrowserRouter>
    
      <div className="App">
        <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <div style={{width:'100%', display:'flex'}}>
          <Menu openMenu={openMenu} />
          <div style={{ width: '100%', padding:'50px 70px', boxSizing:'border-box', display:'flex', justifyContent:'center'}}>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/shorts' element={<Shorts/>}/>
              <Route path='/inscrições' element={<Inscricao/>}/>
              <Route path='/biblioteca' element={<Libery/>}/>
              <Route path='/historico' element={<Historico/>}/>
            </Routes>
          </div>
        </div>
      </div>
     </BrowserRouter>
  );
}

export default App;
