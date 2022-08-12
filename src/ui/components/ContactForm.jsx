import React from 'react';
import { store } from 'store';
// import { ParagraphS } from 'ui/styledComponents/paragraphStyled';

export const ContactForm = () => {
  return (
    <>
      {/* <ParagraphS>No se</ParagraphS> */}
      {store ? 'si' : 'no'}
    </>
  );
};
