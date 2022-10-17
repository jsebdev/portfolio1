import React from 'react'
import { SecondaryButtonS } from 'ui/styledComponents/ButtonsStyled'
import { StackItemContainerS } from 'ui/styledComponents/StackItemStyled'

export const StackItem = ({ name, href }) => {
  return (
    <StackItemContainerS href={href} target='_blank' rel='noreferrer'>
      <SecondaryButtonS>{name}</SecondaryButtonS>
    </StackItemContainerS>
  )
}
