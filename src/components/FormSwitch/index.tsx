import { FormControlLabel, Switch } from '@mui/material'
import { FieldProps } from 'formik'
import React from 'react'

interface FormSwitch extends FieldProps {
  label: string
}

export const FormSwitch: React.FC<FormSwitch> = ({ label, field, form }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form.setFieldValue(field.name, event.target.checked)
  }

  return (
    <FormControlLabel
      control={<Switch color="info" onChange={handleChange} checked={field.checked} />}
      label={label}
    />
  )
}
