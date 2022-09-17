import React from 'react';
import { LINKEDIN_LINK, TWITTER_LINK } from 'ui/helpers/constants';
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
import { useSendEmail } from './useSendEmail';

export const Contact = () => {

  const { formRef, sendEmail } = useSendEmail()

  return (
    <div>
      <ParagraphS>You can always reach me, I’ll be happy to answer</ParagraphS>
      <ParagraphS>you don’t have to say Hello 😉</ParagraphS>
      <ContactFormS onSubmit={sendEmail} ref={formRef}>
        <InputFormS type='text' placeholder='Name' name='user_name' />
        <InputFormS type='text' placeholder='Email' name='user_email' />
        <AreaInputFormS
          name='message'
          id='message-area'
          cols='30'
          rows='8'
          placeholder='Message'
        ></AreaInputFormS>
        <FormButtonS />
      </ContactFormS>
      <SocialDivS>
        <ParagraphS>Or you can reach me directly in my socials</ParagraphS>
        <SocialLinksContactContainerS>
          <SocialLinkContactS
            href={LINKEDIN_LINK}
            rel='noreferrer'
            target='_blank'
          >
            <SocialNameS>LinkedIn:</SocialNameS> @sebscaicedo
          </SocialLinkContactS>
          <SocialLinkContactS
            href={TWITTER_LINK}
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
