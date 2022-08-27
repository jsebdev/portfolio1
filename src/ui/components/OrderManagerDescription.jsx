import React from 'react';
import {
  ButtonsCodeContainerS,
  SecondaryButtonS,
} from 'ui/styledComponents/ButtonsStyled';
import { CenteredSpanS } from 'ui/styledComponents/helpComponentsStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';

export const OrderManagerDescription = ({
  descriptionText,
  frontUrl,
  backUrl,
}) => {
  return (
    <div>
      <ParagraphS>{descriptionText}</ParagraphS>
      <ButtonsCodeContainerS>
        <CenteredSpanS>
          <b>Code:</b>
        </CenteredSpanS>
        <a href={frontUrl} target='_blank' rel='noreferrer'>
          <SecondaryButtonS>Front</SecondaryButtonS>
        </a>
        <a href={backUrl} target='_blank' rel='noreferrer'>
          <SecondaryButtonS>Back</SecondaryButtonS>
        </a>
      </ButtonsCodeContainerS>
    </div>
  );
};
