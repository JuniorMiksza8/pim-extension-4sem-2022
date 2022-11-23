import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Field, Form, Formik } from 'formik'
import { useQuery } from 'react-query'
import api from '../../settings/api'
import { FormDatePicker } from '../FormDatePicker'
import TextFormField from '../TextFormField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CopyAll } from '@mui/icons-material'

const UserForm: React.FC = () => {
  const { data, refetch } = useQuery('/user', () => api.get('/user/detail'))

  const initialValues = {
    birthDate: data?.data?.birthDate || '',
    telephone: data?.data?.telephone || '',
    cpf: data?.data?.cpf || '',
    email: data?.data?.email || '',
  }

  const onSubmit = async (data: typeof initialValues) => {
    const response = await api.put('/user', data)

    if (response.status === 200) {
      await refetch()
    }
  }

  return (
    <Formik onSubmit={onSubmit} enableReinitialize initialValues={initialValues}>
      {({ isSubmitting, values }) => (
        <Form>
          <Stack gap={2} mb={2}>
            <Field
              component={TextFormField}
              name="cpf"
              variant="outlined"
              label="CPF"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => navigator.clipboard.writeText(values.cpf)}>
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Field
                component={FormDatePicker}
                name="birthDate"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          navigator.clipboard.writeText(values.birthDate.toString())
                        }
                      >
                        <CopyAll />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Data de nascimento"
              />
            </LocalizationProvider>
            <Field
              component={TextFormField}
              name="telephone"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.telephone)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              label="Telefone"
            />
            <Field
              component={TextFormField}
              name="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.email)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              label="Email"
            />
          </Stack>
          <Button
            type="submit"
            endIcon={isSubmitting && <CircularProgress size={20} />}
            sx={{ marginTop: 1 }}
          >
            Salvar
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default UserForm
