import { Button } from '@mui/material'
import React from 'react'
import PersonalInfoAccordion from '../components/Accordions/PersonalInfoAccordion'
import SocialAccordion from '../components/Accordions/SocialAccordion'
import CarsAccordion from '../components/Accordions/CarsAccordion'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <PersonalInfoAccordion />
      <SocialAccordion />
      <CarsAccordion />
      <Button sx={{ mt: 3 }}>Compartilhamento avançado</Button>
    </React.Fragment>
  )
}

export default Home
