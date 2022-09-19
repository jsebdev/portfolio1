import React from 'react';
import { Link } from 'react-router-dom';
import { MainButtonS } from 'ui/styledComponents/ButtonsStyled';
import { BigMessageS, NotFoundContainerS } from 'ui/styledComponents/NotFoundPage';
import { ParagraphS } from 'ui/styledComponents/paragraphStyled';
import { SeparatorS } from 'ui/styledComponents/Separator';

export const NotFound = () => {
  return (
    <NotFoundContainerS>
      <BigMessageS>Oops!</BigMessageS>
      <ParagraphS>Look like this page does not exists :(</ParagraphS>
      <SeparatorS height='3rem' />
      <Link to='/'>
        <MainButtonS>Go to main page</MainButtonS>
      </Link>
    </NotFoundContainerS>
  )
};
