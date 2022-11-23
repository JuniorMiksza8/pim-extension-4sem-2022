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
import { Instagram, CopyAll } from '@mui/icons-material'

interface CarFormProps {
  id?: number
  close?: () => any
}

const CarForm: React.FC<CarFormProps> = ({ id, close }) => {
  const { refetch: refetchCars } = useQuery(['/cars'], () => api.get('/car'))

  const { data, refetch } = useQuery(`/car/${id}`, () =>
    id ? api.get(`/car/${id}`) : undefined,
  )

  const initialValues = {
    name: data?.data?.name || '',
    model: data?.data?.model || '',
    manufacturer: data?.data?.manufacturer || '',
    licensePlate: data?.data?.licensePlate || '',
    color: data?.data?.color || '',
  }

  const onSubmit = async (data: typeof initialValues) => {
    const response = id
      ? await api.post(`/car/${id}`, data)
      : await api.post('/car', data)

    if (response.status === 201 || response.status === 200) {
      await refetch()
      await refetchCars()
      if (close) close()
    }
  }

  return (
    <Formik onSubmit={onSubmit} enableReinitialize initialValues={initialValues}>
      {({ isSubmitting, values }) => (
        <Form>
          <Stack gap={2} mb={2}>
            <Field
              component={TextFormField}
              name="name"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.name)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Nome"
            />
            <Field
              component={TextFormField}
              name="model"
              variant="outlined"
              label="Modelo"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.model)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Field
              component={TextFormField}
              name="Manufacturer"
              variant="outlined"
              label="Montadora"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.manufacturer)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Field
              component={TextFormField}
              name="licensePlate"
              variant="outlined"
              label="Placa"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.licensePlate)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Field
              component={TextFormField}
              name="color"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.color)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Cor"
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

export default CarForm
