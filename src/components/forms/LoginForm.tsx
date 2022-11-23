import { Button, CircularProgress, Stack, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authenticate } from '../../redux/slices/AuthSlice'
import api from '../../settings/api'
import TextFormField from '../TextFormField'

const LoginForm: React.FC = () => {
  const dispatch = useDispatch()

  const initialValues = {
    username: '',
    password: '',
  }

  const onSubmit = async (data: typeof initialValues) => {
    const response = await api.post('/auth/sign-in', data)

    if (response.status === 200) {
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`

      dispatch(
        authenticate({
          email: data.username,
          token: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      )
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Stack gap={3}>
            <Field
              component={TextFormField}
              name="username"
              fullWidth
              variant="outlined"
              label="Email"
            />
            <Field
              component={TextFormField}
              name="password"
              variant="outlined"
              label="Senha"
            />
            <Typography color="GrayText" variant="subtitle1">
              Não possui cadastro? <Link to="/sign-up">cadastre-se</Link>
            </Typography>
            <Button
              type="submit"
              endIcon={isSubmitting && <CircularProgress />}
              sx={{ marginTop: 1 }}
            >
              Entrar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
