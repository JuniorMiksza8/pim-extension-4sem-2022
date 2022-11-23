import {
  CopyAll,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Stack,
} from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useQuery } from 'react-query'
import api from '../../settings/api'
import TextFormField from '../TextFormField'

const SocialForm: React.FC = () => {
  const { data, refetch } = useQuery('/user', () => api.get('/user/detail'))

  const initialValues = {
    instagram: data?.data?.instagram || '',
    twitter: data?.data?.twitter || '',
    linkedin: data?.data?.linkedin || '',
    github: data?.data?.github || '',
    facebook: data?.data?.facebook || '',
    youtube: data?.data?.youtube || '',
  }

  const onSubmit = async (data: typeof initialValues) => {
    const response = await api.put('/user/socials', data)

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
              name="instagram"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Instagram />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.instagram)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              label="instagram"
            />
            <Field
              component={TextFormField}
              name="facebook"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Facebook />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.facebook)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              label="facebook"
            />
            <Field
              component={TextFormField}
              name="twitter"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Twitter />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.twitter)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              label="twitter"
            />
            <Field
              component={TextFormField}
              name="youtube"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <YouTube />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.youtube)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              label="youtube"
            />
            <Field
              component={TextFormField}
              name="github"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <GitHub />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.github)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="github"
            />
            <Field
              component={TextFormField}
              name="linkedin"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedIn />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => navigator.clipboard.writeText(values.linkedin)}
                    >
                      <CopyAll />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="linkedin"
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

export default SocialForm
