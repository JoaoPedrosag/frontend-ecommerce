import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha, validarNome, validarConfirmarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'
import Checkbox from '../../Components/CheckBox'

const userService = new UserService()

const Cadastro = () => {
  const [loading, setLoading] = useState();
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState([])
  const navigate = useNavigate()
  const onChange = (event) => {    
    setChecked(!checked);
    return checked;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = onChange();
      console.log(result);
      setLoading(true);      
      
      const { data } = await userService.cadastrar({
        nome: form.nome,        
        email: form.email,
        password: form.password,
        admin: result,
        shop_name: form.shop_name ?? '',
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
    }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err)
    }
  }

  const handleChange = (event) => {    
    console.log({[event.target.name]: event.target.value})
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) 
    && validarSenha(form.password)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
    && validarNome(form.nome)
    
  }

  return (
    <Container>
      <Form>
        <h1>Faça o seu Cadastro 👋</h1>
        <Input
          name='nome'
          placeholder='Digite o seu nome'
          onChange={handleChange}
          type='text'
        />       
        <Input
          name='email'
          placeholder='Digite o seu e-mail'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Digite a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Input
          name='confirmarPassword'
          placeholder='Confirme a sua senha'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Efetuar Cadastro!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <Checkbox
        label={'Sou revendedor'}
        id={'checkbox'}
        value={checked}
        onChange={onChange}
        />
        {checked && (
          <Input
          name='show_name'
          placeholder='Digite sua loja'
          onChange={handleChange}
          type='text'          
          />
        )}
        <SubContainerSign>
          <p>Já possui conta?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Cadastro;