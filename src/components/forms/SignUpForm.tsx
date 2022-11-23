import { Stack, Typography, Button, CircularProgress } from '@mui/material'
import { Formik, Field, Form } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../settings/api'
import TextFormField from '../TextFormField'

const SignUpForm: React.FC = () => {
  const navigate = useNavigate()

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = async (data: typeof initialValues) => {
    console.log('data')
    const response = await api.post('/user', data)

    if (response.status === 201) {
      navigate('/')
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Stack gap={3}>
            <Field
              component={TextFormField}
              name="email"
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
            <Typography
              sx={{ display: 'flex', gap: 1 }}
              color="GrayText"
              variant="subtitle1"
            >
              Ja possui cadastro?
              <Link to="/">entre</Link>
            </Typography>
            <Button
              type="submit"
              endIcon={isSubmitting && <CircularProgress />}
              sx={{ marginTop: 1 }}
            >
              Cadastrar
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
