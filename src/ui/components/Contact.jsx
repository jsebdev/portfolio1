import React from 'react';
import {
  AreaInputFormS,
  ContactFormS,
  FormButtonS,
  InputFormS,
  SocialDivS,
  SocialLinkContactS,
  SocialLinksContactContainerS,
  SocialNameS,
} from 'ui/styledComponents/ContactContentStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';

export const Contact = () => {
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
          placeholder='Message'
        ></AreaInputFormS>
        <FormButtonS width='fit-content'> Send </FormButtonS>
      </ContactFormS>
      <SocialDivS>
        <ParagraphS>Or you can reach me directly in my socials</ParagraphS>
        <SocialLinksContactContainerS>
          <SocialLinkContactS
            href='https://www.linkedin.com/in/sebscaicedo/'
            rel='noreferrer'
            target='_blank'
          >
            <SocialNameS>LinkedIn:</SocialNameS> @sebscaicedo
          </SocialLinkContactS>
          <SocialLinkContactS
            href='https://twitter.com/Sebas93cay'
            rel='noreferrer'
            target='_blank'
          >
            <SocialNameS>Twitter:</SocialNameS> @Sebas93cay
          </SocialLinkContactS>
        </SocialLinksContactContainerS>
      </SocialDivS>
    </div>
  );
};
