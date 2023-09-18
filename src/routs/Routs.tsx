import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/inde";
import Cadastro from "../pages/cadastro";
import Kamnbam from "../pages/kambam";



const Routs = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/kambam" element={<Kamnbam/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Routs;