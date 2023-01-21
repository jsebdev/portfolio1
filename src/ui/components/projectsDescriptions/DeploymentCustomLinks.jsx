import React from 'react';
import {
  ButtonsCodeContainerS,
} from 'ui/styledComponents/ButtonsStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';

export const DeploymentCustomLinks = ({
  descriptionText,
  customLinks
}) => {
  return (
    <div>
      <ParagraphS>{descriptionText}</ParagraphS>
      <ButtonsCodeContainerS>
        {customLinks.map((link, index) => (
          <a key={index} href={link.href} target='_blank' rel='noreferrer'>
            {link.button}
          </a>
        ))}
      </ButtonsCodeContainerS>
    </div>
  );
};