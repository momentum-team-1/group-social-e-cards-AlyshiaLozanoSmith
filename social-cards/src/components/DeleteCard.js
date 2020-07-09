import React from 'react'
import { Redirect } from 'react-router-dom'

export default function DeleteCard ({ onDelete }) {
  onDelete()
  return <Redirect to='/profile' />
}
