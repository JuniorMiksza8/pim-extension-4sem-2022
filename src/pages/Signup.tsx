import { Stack, Paper, Typography } from '@mui/material'
import SignUpForm from '../components/forms/SignUpForm'

const SignUp: React.FC = () => {
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
            Cadastro
          </Typography>
          <Typography color="GrayText">
            Preencha as informações para prosseguir
          </Typography>
        </Stack>
        <SignUpForm />
      </Paper>
    </Stack>
  )
}

export default SignUp
