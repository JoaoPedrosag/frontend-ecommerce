import React from 'react'
import Login from '../Pages/Login/index'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Cadastro from '../Pages/Cadastro/index'
import CadastroProduto from '../Pages/Produto/index'
import HomePage from '../Pages/Home/index'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <HomePage/>
          </ProtectedRoutes>          
          }
        />
         <Route path="/cadastrar-produto" element={
          <ProtectedRoutes>
            <CadastroProduto/>
          </ProtectedRoutes>          
          }

        />
      </Routes>
    </Router>
   );
}
 
export default Routering;