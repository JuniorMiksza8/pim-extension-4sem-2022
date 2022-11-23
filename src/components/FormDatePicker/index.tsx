import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { FieldProps, getIn } from 'formik'
import React from 'react'

interface FormDatePickerProps extends FieldProps {
  label: string
  required?: boolean
}

export const FormDatePicker: React.FC<FormDatePickerProps> = ({
  label,
  field,
  form,
  required,
  ...props
}) => {
  const errorText = form.touched[field.name] ? getIn(form.errors, field.name) : null

  return (
    <DatePicker
      label={label}
      PaperProps={{
        style: {
          padding: 0,
        },
      }}
      renderInput={(params) => (
        <TextField
          fullWidth
          required={required}
          {...params}
          error={!!errorText}
          helperText={errorText}
        />
      )}
      value={field.value}
      mask="__/__/____"
      inputFormat="dd/MM/yyyy"
      onChange={(value) => {
        form.setFieldTouched(field.name)
        form.setFieldValue(field.name, value)
      }}
      {...props}
    />
  )
}
