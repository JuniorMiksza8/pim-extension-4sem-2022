import { Bluetooth, CopyAll, ExpandMore, Forum, Mail } from '@mui/icons-material'
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
import SocialForm from '../forms/SocialForm'

const SocialAccordion = () => {
  const { isFetching: isFetchingUser, data } = useQuery('/user', () =>
    api.get('/user/detail'),
  )

  const onCopy = () => {
    const user = data?.data || {}
    navigator.clipboard.writeText(
      `facebook : ${user.facebook} \n instagram : ${user.instagram} \n twitter : ${user.twitter} \n linkedin :  ${user.linkedin} \n github :  ${user.github} \n youtube : ${user.youtube} \n `,
    )
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography display="flex" alignItems="center" gap={2} variant="h6">
          <Forum /> Social{' '}
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
          {isFetchingUser && <CircularProgress size={18} sx={{ ml: 2 }} />}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <SocialForm />
      </AccordionDetails>
    </Accordion>
  )
}

export default SocialAccordion
