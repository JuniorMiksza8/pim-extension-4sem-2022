import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../components/forms/LoginForm'

const Login: React.FC = () => {
  return (
    <Stack
      width="100%"
      spacing={2}
      height="90vh"
      alignItems="center"
      justifyContent="center"
    >
      <Paper>
        <Stack mb={4} alignItems="center" justifyContent="center">
          <Typography variant="h6" textAlign="center">
            Bem vindo ao LInfo
          </Typography>
          <Typography color="GrayText">Para continuar, efetue o login</Typography>
        </Stack>
        <LoginForm />
      </Paper>
    </Stack>
  )
}

export default Login
