import { useState } from 'react'
import {
  ExpandMore,
  DirectionsCar,
  Delete,
  Bluetooth,
  CopyAll,
  Mail,
} from '@mui/icons-material'
import {
  Accordion,
  AccordionSummary,
  Typography,
  CircularProgress,
  AccordionDetails,
  Button,
  Box,
  IconButton,
  Stack,
} from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query'
import api from '../../settings/api'
import CarForm from '../forms/CarForm'

const CarsAccordion = () => {
  const { data, isFetching, refetch } = useQuery(['/cars'], () => api.get('/car'))

  const [createNew, setCreateNew] = useState(false)

  const onDelete = async (id: any) => {
    await api.delete(`/car/${id}`)
    await refetch()
  }

  const onCopy = (car: any = {}) => {
    navigator.clipboard.writeText(
      `nome : ${car.name} \n 
      modelo : ${car.model} \n 
      montadora : ${car.manufacturer} \n 
      placa :  ${car.licensePlate} \n 
      color :  ${car.color} \n `,
    )
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography display="flex" alignItems="center" gap={2} variant="h6">
          <DirectionsCar /> Veiculos{' '}
          {isFetching && <CircularProgress size={18} sx={{ ml: 2 }} />}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {data?.data.map((value: any) => (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography display="flex" alignItems="center" gap={2} variant="subtitle1">
                {value.name}
                <IconButton color="error" onClick={() => onDelete(value.id)}>
                  <Delete />
                </IconButton>
                <Stack direction="row">
                  <IconButton onClick={() => onCopy(value)}>
                    <CopyAll />
                  </IconButton>
                  <IconButton disabled>
                    <Mail />
                  </IconButton>
                  <IconButton disabled>
                    <Bluetooth />
                  </IconButton>
                </Stack>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CarForm id={value.id} />
            </AccordionDetails>
          </Accordion>
        ))}
        <Box mt={3} mb={1}>
          {createNew && <CarForm close={() => setCreateNew(false)} />}
        </Box>
        <Button
          color={createNew ? 'secondary' : 'primary'}
          onClick={() => setCreateNew((value) => !value)}
        >
          {createNew ? 'Cancelar' : 'Criar novo'}
        </Button>
      </AccordionDetails>
    </Accordion>
  )
}

export default CarsAccordion
