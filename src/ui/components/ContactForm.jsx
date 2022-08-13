import React from 'react';
import { MainButtonS } from 'ui/styledComponents/ButtonsStyled';
import {
  AreaInputFormS,
  ContactFormS,
  FormButtonS,
  InputFormS,
  SocialDivS,
  SocialLinkS,
  SocialLinksContainerS,
  SocialNameS,
} from 'ui/styledComponents/ContactContentStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';

export const ContactForm = () => {
  return (
    <div>
      <ParagraphS>You can always reach me, I’ll be happy to answer</ParagraphS>
      <ParagraphS>you don’t have to say Hello 😉</ParagraphS>
      <ContactFormS action=''>
        <InputFormS type='text' placeholder='Name' />
        <InputFormS type='text' placeholder='Email' />
        <AreaInputFormS
          name=''
          id=''
          cols='30'
          rows='8'
          placeholder='message'
        ></AreaInputFormS>
        <FormButtonS width='fit-content'> Send </FormButtonS>
      </ContactFormS>
      <SocialDivS>
        <ParagraphS>Or you can reach me directly in my socials</ParagraphS>
        <SocialLinksContainerS>
          <SocialLinkS
            href='https://www.linkedin.com/in/sebscaicedo/'
            rel='noreferrer'
            target='_blank'
          >
            <SocialNameS>LinkedIn:</SocialNameS> @sebscaicedo
          </SocialLinkS>
          <SocialLinkS
            href='https://www.linkedin.com/in/sebscaicedo/'
            rel='noreferrer'
            target='_blank'
          >
            <SocialNameS>Twitter:</SocialNameS> @Sebas93cay
          </SocialLinkS>
        </SocialLinksContainerS>
      </SocialDivS>
    </div>
  );
};
