import React from 'react';
import {
  ButtonsContainerS,
  SecondaryButtonS,
} from 'ui/styledComponents/ButtonsStyled';
import { CenteredSpanS } from 'ui/styledComponents/helpComponentsStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';

export const DescriptionDeploymentFullStack = ({
  descriptionText,
  frontUrl,
  backUrl,
}) => {
  return (
    <div>
      <ParagraphS>{descriptionText}</ParagraphS>
      <ButtonsContainerS>
        <CenteredSpanS>
          <b>Code:</b>
        </CenteredSpanS>
        <a href={frontUrl} target='_blank' rel='noreferrer'>
          <SecondaryButtonS>Front</SecondaryButtonS>
        </a>
        <a href={backUrl} target='_blank' rel='noreferrer'>
          <SecondaryButtonS>Back</SecondaryButtonS>
        </a>
      </ButtonsContainerS>
    </div>
  );
};
