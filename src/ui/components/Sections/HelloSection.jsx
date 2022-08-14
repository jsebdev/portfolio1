import React from 'react';

import { TitleS, BigNameS } from '../../styledComponents/TitleStyled';
import {
  HelloSectionS,
  HiMessagesS,
  ProfileImageContainerS,
  ProfileImageS,
} from '../../../ui/styledComponents/HelloSectionStyled';
import { ParagraphS } from '../../../ui/styledComponents/paragraphStyled';

export const HelloSection = () => {
  return (
    <HelloSectionS>
      <HiMessagesS>
        <TitleS message='hiMessage'>Hey Hi!!</TitleS>
        <TitleS>
          My name is <BigNameS>Sebastian Caicedo</BigNameS>
        </TitleS>
        <ParagraphS>
          Curious and ever learning Full-Stack Software developer from Colombia
        </ParagraphS>
      </HiMessagesS>
      <ProfileImageContainerS>
        <ProfileImageS src='/images/perfil.jpg' alt='' />
      </ProfileImageContainerS>
    </HelloSectionS>
  );
};
