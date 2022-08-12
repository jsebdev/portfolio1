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
import { ContactForm } from '../ContactForm';

export const ContactSection = () => {
  return (
    <TitledSectionS>
      <SectionHeaderS>
        <SectionTitleS message='sectionTitle'>Contact</SectionTitleS>
      </SectionHeaderS>
      <ContactContentS>
        <ContactImageContainerS>
          <ContactImageS src='images/about0.jpg' alt='' />
        </ContactImageContainerS>
        <ContactForm />
      </ContactContentS>
    </TitledSectionS>
  );
};
