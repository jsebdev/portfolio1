import React from 'react'
import { SmallDetailS } from 'ui/styledComponents/paragraphStyled'
import { LogoContainerS, LogoS, StackItemContainerS } from 'ui/styledComponents/StackItemStyled'

export const StackItem = ({ name, href, icon, alt }) => {
  return (
    <StackItemContainerS href={href} target='_blank' rel='noreferrer'>
      <LogoContainerS>
        <LogoS src={icon} alt={alt} />
      </LogoContainerS>
      <SmallDetailS>{name}</SmallDetailS>
    </StackItemContainerS>
  )
}
