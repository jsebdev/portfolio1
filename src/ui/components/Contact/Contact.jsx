import React from 'react';
import {
  AreaInputFormS,
  ContactFormContainerS,
  ContactFormS,
  FormButtonS,
  InputFormS,
} from 'ui/styledComponents/ContactContentStyled';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';
import { useSendEmail } from './useSendEmail';
import { PlainLinkS } from 'ui/styledComponents/PlainLinkStyled';
import { SpanDescriptorS } from 'ui/styledComponents/imageDescriptorStyled';
import {
  ContactImageContainerS,
  ContactImageS,
} from '../../styledComponents/ContactContentStyled';
import { sendStatuses } from './sendStatus';
import { EMAIL, errors } from 'ui/helpers/constants';
import { Spinner } from 'ui/components/Spinner';
import { ErrorContainerS } from 'ui/styledComponents/ErrorContainerStyled';
import { AS } from 'ui/styledComponents/AStyled';

export const Contact = () => {

  const { formRef, sendEmail, sendStatus, userEmail } = useSendEmail()

  return (
    <ContactFormContainerS>
      <ContactImageContainerS>
        <ContactImageS src={require('images/pencil.png')} alt='' />
        <SpanDescriptorS size='0.7rem'>
          image from <PlainLinkS href="https://www.freepik.es/vector-gratis/ilustracion-icono-dibujos-animados-lapiz-papel-concepto-icono-objeto-educacion-aislado-estilo-dibujos-animados-plana_10848245.htm#query=write&position=2&from_view=search" target='_blank'>catalyststuff</PlainLinkS>
        </SpanDescriptorS>
      </ContactImageContainerS>
      <div>
        <ParagraphS>You can always reach me, I’ll be happy to answer.</ParagraphS>
        <ParagraphS>And you <AS href='https://nohello.club/' textDecoration='underline'> don’t have to say Hello</AS>. 😉</ParagraphS>
        <ContactFormS onSubmit={sendEmail} ref={formRef}>
          <InputFormS type='text' placeholder='Name' name='user_name' />
          <InputFormS type='text' placeholder='Email' name='user_email' />
          {sendStatus.error === errors.invalidEmail && (
            <ParagraphS color='red'>Looks like that is not a valid email</ParagraphS>
          )}
          <AreaInputFormS
            name='message'
            id='message-area'
            cols='30'
            rows='8'
            placeholder='Message'
          ></AreaInputFormS>
          <FormButtonS />
          {sendStatus.status === sendStatuses.success && (
            <>
              <ParagraphS color='green' centered>Message sent successfully!</ParagraphS>
              <ParagraphS color='green' centered>You should have received a copy to {userEmail}</ParagraphS>
            </>
          )}
          {sendStatus.error === errors.unkonwnError && (
            <ErrorContainerS>
              <ParagraphS centered color='red'>Sorry! there was a problem sending the message.</ParagraphS>
              <ParagraphS centered>😔</ParagraphS>
              <ParagraphS centered >Please send it directly to: {EMAIL}</ParagraphS>
            </ErrorContainerS>
          )}
          {sendStatus.status === sendStatuses.pending && (
            <Spinner></Spinner>
          )}
        </ContactFormS>
      </div>
    </ContactFormContainerS>
  );
};