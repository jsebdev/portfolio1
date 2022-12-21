import React from 'react';
import {
  ButtonsCodeContainerS,
  SecondaryButtonS,
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
        {Object.keys(customLinks).map(key => (
          <a href={customLinks[key]} target='_blank' rel='noreferrer'>
            <SecondaryButtonS>{key}</SecondaryButtonS>
          </a>
        ))}
      </ButtonsCodeContainerS>
    </div>
  );
};
