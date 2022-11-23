import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material'
import { FieldProps, getIn } from 'formik'
import React from 'react'

interface FormSelectProps extends FieldProps {
  label: string
  size?: 'small' | 'medium'
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  children,
  field,
  form,
  size,
  ...props
}) => {
  const errorText = form.touched[field.name] ? getIn(form.errors, field.name) : null

  return (
    <FormControl {...props} size={size} error={!!errorText}>
      <InputLabel id={field.name}>{label}</InputLabel>
      <Select
        size={size}
        value={field.value}
        error={!!errorText}
        onClick={() => form.setFieldTouched(field.name)}
        onChange={(ev) => form.setFieldValue(field.name, ev.target.value)}
        id={field.name}
        label={label}
      >
        {children}
      </Select>
      {errorText && <FormHelperText> {errorText} </FormHelperText>}
    </FormControl>
  )
}
