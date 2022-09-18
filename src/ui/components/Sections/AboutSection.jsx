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
import { aboutImages } from '../../../Data/images';

export const AboutSection = () => {
  const image = useMemo(
    () => aboutImages[Math.floor(Math.random() * aboutImages.length)],
    [],
  );
  // const image = aboutImages.filter((img) =>
  //   img.description.includes('Awesome'),
  // )[0];
  // const image = aboutImages[8];

  return (
    <TitledSectionS>
      <SectionHeaderS>
        <SectionTitleS message='sectionTitle'>About</SectionTitleS>{' '}
      </SectionHeaderS>
      <AboutContentS {...image}>
        <AboutText changeToRow={image.changeToRow}>
          <ParagraphS>
            Hi! I'm Sebastian Caicedo, a curious and ever-learning software
            developer from Colombia. 👋
          </ParagraphS>
          <ParagraphS>
            I'm passionate about developing good quality software and finding
            the most optime solutions to all kinds of problems.
          </ParagraphS>
          <ParagraphS>
            I'm currently working as a developer in Encora where I'm helping
            develop software tools for the pharmaceutical industry. 💉
          </ParagraphS>
          <ParagraphS>
            Lately, I've been obsessed with learning front-end development, like
            CSS and particularly javascript frameworks like React. 💻
          </ParagraphS>
          <ParagraphS>
            Before Encora I worked as a full-stack developer in Nufi in the
            marvelous world of identity verification for the fintech business,
            developing graphical features, APIs, WhatsApp chatbots, and web
            scraping. 📈
          </ParagraphS>
          <ParagraphS>
            I consider myself a black hole of information &lt;I mean, I like learning
            new things a lot&gt;, so when I'm not working I'm usually watching
            videos or tutorials, learning a new language, or working on a side
            project to expand my skills. Also now and then I do virtual math
            lessons. 🤓
          </ParagraphS>
          <ParagraphS>
            Oh Right! I was born in Cali! So I sure love to dance salsa and move
            the body! 💃🏼
          </ParagraphS>
          <ParagraphS>
            Please don't hesitate on contacting me. I'm always open to having a
            chat
          </ParagraphS>
        </AboutText>
        <AboutImageContainerS changeToRow={image.changeToRow}>
          <AboutImageS {...image} src={`images/about/${image.image}`} alt='' />
          <SpanDescriptorS>{image.description}</SpanDescriptorS>
        </AboutImageContainerS>
      </AboutContentS>
    </TitledSectionS>
  );
};
