import React from 'react';

import { TitleS, BigNameS } from '../../styledComponents/TitleStyled';
import {
  HelloSectionS,
  HiMessagesS,
  ProfileImageContainerS,
  ProfileImageS,
} from '../../../ui/styledComponents/HelloSectionStyled';
import { ParagraphS } from '../../../ui/styledComponents/paragraphStyled';

import profileImg from 'images/profile.jpg'

export const HelloSection = () => {
  return (
    <HelloSectionS>
      <HiMessagesS>
        <TitleS themeColor='hiMessage'>Hey Hi!!</TitleS>
        <TitleS>
          My name is <BigNameS>Sebastian Caicedo</BigNameS>
        </TitleS>
        <ParagraphS>
          Curious and creative Data Analyst and Machine Learning Developer from Colombia.
        </ParagraphS>
      </HiMessagesS>
      <ProfileImageContainerS>
        <ProfileImageS src={profileImg} alt='Juan Sebastian Caicedo Alfonso' />
      </ProfileImageContainerS>
    </HelloSectionS>
  );
};
