import React, {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Button from '../../Components/Botao/index'
import { validarEmail, validarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'
import {toastSuccess, toastError} from '../../Utils/toast'

const userService = new UserService()

const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form)
    try {
      setLoading(true)
      const response = await userService.login(form)
      console.log(form);
      if (response === true) {
        toastSuccess('usuário Logado com Sucesso')
        navigate('/home')
      }
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
      toastError(err.response.data.message)
    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  return (
    <Container>
      <Form>
        <h1>Faça o seu Login 👋</h1>
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
        <Button
          type='submit'
          text='Entrar!'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="cadastrar">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Login;