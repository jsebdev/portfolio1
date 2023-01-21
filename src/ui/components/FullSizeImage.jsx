import React from 'react'
import { FullSizeImageContainerS, FullSizeImageS } from 'ui/styledComponents/FullSizeImageStyled'

export const FullSizeImage = ({ img, toggleShow }) => {
  return (
    <FullSizeImageContainerS onClick={toggleShow}>
      <FullSizeImageS src={img} />
    </FullSizeImageContainerS>
  )
}