import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { sendStatuses } from './sendStatus';

const timeSendEmail = 'timeSendEmail';

export const useSendEmail = () => {
  const [sendStatus, setSendStatus] = useState({ status: sendStatuses.idle });
  const formRef = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();
    console.time(timeSendEmail)
    setSendStatus({ status: sendStatuses.pending });

    emailjs.sendForm('service_94lfa8d', 'template_w7fklnm', formRef.current, 'fj6CPfC8yMk9P1cUv')
      .then((result) => {
        console.log(result.text);
        setSendStatus({ status: sendStatuses.success });
        console.timeEnd(timeSendEmail)
      }, (error) => {
        console.log(error.text);
        setSendStatus({ status: sendStatuses.error, message: error.text });
        console.timeEnd(timeSendEmail)
      });
  }

  return { formRef, sendEmail, sendStatus };

}