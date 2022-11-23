import { InputAdornment, OutlinedTextFieldProps, TextField } from '@mui/material'
import { FieldProps, getIn } from 'formik'
import React, { Component } from 'react'

interface TextFormFieldProps extends FieldProps, OutlinedTextFieldProps {}

class TextFormField extends Component<TextFormFieldProps> {
  render() {
    const { field, form, ...props } = this.props
    const errorText = form.touched[field.name] ? getIn(form.errors, field.name) : null
    return (
      <TextField
        fullWidth
        error={!!errorText}
        helperText={errorText}
        {...field}
        {...props}
      />
    )
  }
}

export default TextFormField
