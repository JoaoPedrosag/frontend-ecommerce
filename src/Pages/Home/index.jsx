import React from "react";
import Button from '../../Components/Botao/index'
import Header from "../../Components/Header";
import { Container} from "../Login/styles";
import {useNavigate } from 'react-router-dom'
const HomePage = () => {
    const navigate = useNavigate()
    return ( 
    <Container>
       <div>
       <Header/>
       <Button
          type='submit'
          text='Cadastrar Produtos'   
          onClick={() => navigate('/cadastrar-produto')} 
        /> 
       </div>
       
    </Container>
        
        

     );
}
 
export default HomePage;