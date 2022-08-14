import React from 'react';
import {
  ContactContentS,
  ContactImageContainerS,
  ContactImageS,
} from '../../styledComponents/ContactContentStyled';
import {
  SectionHeaderS,
  TitledSectionS,
} from '../../styledComponents/SectionStyled';
import { SectionTitleS } from '../../styledComponents/TitleStyled';
import { Contact } from '../Contact';

export const ContactSection = () => {
  return (
    <TitledSectionS>
      <SectionHeaderS>
        <SectionTitleS message='sectionTitle'>Contact</SectionTitleS>
      </SectionHeaderS>
      <ContactContentS>
        <Contact />
        <ContactImageContainerS>
          <ContactImageS src='images/about0.jpg' alt='' />
        </ContactImageContainerS>
      </ContactContentS>
    </TitledSectionS>
  );
};
