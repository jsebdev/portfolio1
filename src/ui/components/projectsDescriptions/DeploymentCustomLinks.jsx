import React from 'react';
import {
  ButtonContainerS,
  ButtonsContainerS,
} from 'ui/styledComponents/ButtonsStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';

export const DeploymentCustomLinks = ({
  descriptionText,
  customLinks
}) => {
  return (
    <div>
      <ParagraphS>{descriptionText}</ParagraphS>
      <ButtonsContainerS>
        {customLinks.map((link, index) => (
          <ButtonContainerS key={index} href={link.href} target='_blank' rel='noreferrer'>
            {link.button}
          </ButtonContainerS>
        ))}
      </ButtonsContainerS>
    </div>
  );
};