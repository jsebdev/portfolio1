import React from 'react'
import { useEffect } from 'react'
import { RESUME_FILE } from 'ui/helpers/constants'
import { Spinner } from './Spinner'

export const ResumeRedirect = () => {
  useEffect(() => {
    window.location.replace(RESUME_FILE)
  }, [])
  return <Spinner position="inherit" />
}
