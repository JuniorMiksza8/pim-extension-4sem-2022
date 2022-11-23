import { Bluetooth, CopyAll, ExpandMore, Mail, PermIdentity } from '@mui/icons-material'
import {
  Accordion,
  AccordionSummary,
  Typography,
  CircularProgress,
  AccordionDetails,
  IconButton,
  Stack,
} from '@mui/material'
import { format } from 'date-fns'
import { useQuery } from 'react-query'
import api from '../../settings/api'
import UserForm from '../forms/UserForm'

const PersonalInfoAccordion = () => {
  const { data, isFetching: isFetchingUser } = useQuery('/user', () =>
    api.get('/user/detail'),
  )

  const onCopy = () => {
    const user = data?.data || {}
    navigator.clipboard.writeText(
      `email : ${user.email} \n cpf : ${user.cpf} \n telefone ${
        user.telephone
      } \n data de nascimento ${format(user.birthDate, 'dd/MM/yyyy')}`,
    )
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography display="flex" alignItems="center" gap={2} variant="h6">
          <PermIdentity /> Informações pessoais{' '}
          {isFetchingUser && <CircularProgress size={18} sx={{ ml: 2 }} />}
          <Stack direction="row">
            <IconButton disabled={!data?.data} onClick={onCopy}>
              <CopyAll />
            </IconButton>
            <IconButton disabled onClick={onCopy}>
              <Mail />
            </IconButton>
            <IconButton disabled onClick={onCopy}>
              <Bluetooth />
            </IconButton>
          </Stack>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <UserForm />
      </AccordionDetails>
    </Accordion>
  )
}

export default PersonalInfoAccordion
