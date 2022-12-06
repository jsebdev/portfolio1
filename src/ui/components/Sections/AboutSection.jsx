import React, { useMemo } from 'react';
import {
  SectionHeaderS,
  TitledSectionS,
} from '../../styledComponents/SectionStyled';
import { SectionTitleS } from '../../styledComponents/TitleStyled';
import {
  AboutContentS,
  AboutImageS,
  AboutImageContainerS,
  AboutText,
} from '../../styledComponents/aboutStyled';
import { ParagraphS } from '../../styledComponents/paragraphStyled';
import { SpanDescriptorS } from '../../styledComponents/imageDescriptorStyled';
import { aboutImages } from '../../../Data/aboutImages';
import { bioParagraphs } from 'Data/bio';

export const AboutSection = () => {
  const image = useMemo(
    () => aboutImages[Math.floor(Math.random() * aboutImages.length)],
    [],
  );

  return (
    <TitledSectionS>
      <SectionHeaderS>
        <SectionTitleS themeColor='sectionTitle'>About</SectionTitleS>{' '}
      </SectionHeaderS>
      <AboutContentS {...image}>
        <AboutText changeToRow={image.changeToRow}>
          {bioParagraphs.map((paragraph, index) => (
            <ParagraphS key={index}>{paragraph}</ParagraphS>
          ))}
          <ParagraphS>
            Please don't hesitate to contact me. I'm always open to having a chat.
          </ParagraphS>
        </AboutText>
        <AboutImageContainerS changeToRow={image.changeToRow}>
          <AboutImageS {...image} src={require(`images/about/${image.image}`)} alt='' />
          <SpanDescriptorS>{image.description}</SpanDescriptorS>
        </AboutImageContainerS>
      </AboutContentS>
    </TitledSectionS>
  );
};
