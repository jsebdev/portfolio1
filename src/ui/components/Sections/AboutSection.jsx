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
import { LinkS } from 'ui/styledComponents/LinkStyled';

export const AboutSection = () => {
  const image = useMemo(() => {
    const images = Object.values(aboutImages);
    return images[Math.floor(Math.random() * images.length)]
  }, []);

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
            Please don't hesitate to <LinkS to='/contact'><u>contact me</u></LinkS>. I'm always open to having a chat.
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
