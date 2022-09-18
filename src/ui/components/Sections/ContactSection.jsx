import React from 'react';
import { LINKEDIN_LINK, TWITTER_LINK } from 'ui/helpers/constants';
import {
  SocialDivS,
  SocialLinkContactS,
  SocialLinksContactContainerS,
  SocialNameS,
} from 'ui/styledComponents/ContactContentStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';
import { getUserAt } from 'ui/helpers/helpers';
import { PlainLinkS } from 'ui/styledComponents/PlainLinkStyled';
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
        <SocialDivS>
          <ParagraphS centered={true}>Or you can reach me directly in my socials</ParagraphS>
          <SocialLinksContactContainerS>
            <SocialLinkContactS
              href={LINKEDIN_LINK}
              rel='noreferrer'
              target='_blank'
            >
              <SocialNameS>LinkedIn:</SocialNameS> @{getUserAt(LINKEDIN_LINK)}
            </SocialLinkContactS>
            <SocialLinkContactS
              href={TWITTER_LINK}
              rel='noreferrer'
              target='_blank'
            >
              <SocialNameS>Twitter:</SocialNameS> @{getUserAt(TWITTER_LINK)}
            </SocialLinkContactS>
          </SocialLinksContactContainerS>
        </SocialDivS>
      </ContactContentS>
    </TitledSectionS>
  );
};
