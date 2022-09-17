import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const useSendEmail = () => {

  const formRef = useRef(null);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_94lfa8d', 'template_w7fklnm', formRef.current, 'fj6CPfC8yMk9P1cUv')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return { formRef, sendEmail }

}