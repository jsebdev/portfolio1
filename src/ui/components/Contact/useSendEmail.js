import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { sendStatuses } from './sendStatus';

const timeSendEmail = 'timeSendEmail';

export const useSendEmail = () => {
  const [sendStatus, setSendStatus] = useState({ status: sendStatuses.idle });
  const formRef = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    setSendStatus({ status: sendStatuses.pending });

    emailjs.sendForm('service_94lfa8d', 'template_w7fklnm', formRef.current, 'fj6CPfC8yMk9P1cUv')
      .then((result) => {
        console.log(result.text);
        setSendStatus({ status: sendStatuses.success });
        formRef.current.reset();
      }, (error) => {
        console.log(error.text);
        setSendStatus({ status: sendStatuses.error, message: error.text });
      });
  }

  return { formRef, sendEmail, sendStatus };
}