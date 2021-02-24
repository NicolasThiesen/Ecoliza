import React, { useState } from 'react'
import ErrorIcon from '@material-ui/icons/Error'
import api from 'services/api'
import { Formik, Form, Field } from 'formik'
import history from 'Tools/history'
import './style.css'

export const LoginAdm = () => {
  const [error, setError] = useState(false)

  const handleSubmit = async values => {
    try {
      const { data } = await api.post('/admin', values)
      localStorage.setItem('token', data)
      history.push('/cadastro')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className="box">
      <div className="header">
        <h3>Login</h3>
      </div>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="username">Login</label>
          <Field name="username" type="text" required autoFocus></Field>
          <label htmlFor="password">Senha</label>
          <Field name="password" type="password" required></Field>
          {error && (
            <div className="box-error">
              <span className="error-msg">Login ou senha incorreto</span>
              <ErrorIcon />
            </div>
          )}
          <button type="submit">Logar</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginAdm
