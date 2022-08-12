import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogoNameS } from '../../../styledComponents/LogoNameStyled';
export const LogoName = () => {
  const navigate = useNavigate();
  return (
    <LogoNameS onClick={() => navigate('/')}>
      <span>Sebastian Caicedo</span>
    </LogoNameS>
  );
};
