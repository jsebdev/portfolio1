import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RESUME_FILE } from 'ui/helpers/constants'
import { ParagraphS } from 'ui/styledComponents/paragraphStyled'
import { Spinner } from './Spinner'

export const ResumeRedirect = () => {

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 500)
    window.location.replace(RESUME_FILE)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <>
    {showMessage ?
      <div>
        <ParagraphS>
          The File will be shown soon.
        </ParagraphS>
        <ParagraphS>
          If the file don't show up or download automatically. Please click{" "}
          <a href={RESUME_FILE} >here</a>
        </ParagraphS>
      </div> :
      <Spinner position="inherit" />
    }
  </>
}
