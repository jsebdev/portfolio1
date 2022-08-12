import React from 'react';
import { MainContainerS } from '../../styledComponents/MainContainerStyled';
import { PageS } from '../../styledComponents/PageStyled';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { SectionsContainerS } from '../../styledComponents/SectionsContainerStyled';

export const Page = () => {
  return (
    <MainContainerS>
      <PageS>
        <Header />
        <SectionsContainerS>
          <Outlet />
        </SectionsContainerS>
        {/* <Footer /> */}
      </PageS>
    </MainContainerS>
  );
};
