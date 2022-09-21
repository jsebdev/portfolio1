import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { sendStatuses } from './sendStatus';
import { errors } from 'ui/helpers/constants';

export const useSendEmail = () => {
  const [sendStatus, setSendStatus] = useState({ status: sendStatuses.idle });
  const formRef = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();

    const email = formRef.current.user_email.value;
    const emailRe = /^\S+@\S+\.\S+$/;
    if (!emailRe.test(email)) {
      setSendStatus({ status: sendStatuses.error, error: errors.invalidEmail, message: 'invalid email' });
      return;
    }

    setSendStatus({ status: sendStatuses.pending });
    emailjs.sendForm('service_94lfa8d', 'template_w7fklnm', formRef.current, 'fj6CPfC8yMk9P1cUv')
      .then((result) => {
        console.log(result.text);
        setSendStatus({ status: sendStatuses.success });
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        setSendStatus({ status: sendStatuses.error, error: errors.unkonwnError, message: error.text });
      });
  }

  return { formRef, sendEmail, sendStatus };
}