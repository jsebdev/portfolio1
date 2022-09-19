import React from 'react';
import { MainContainerS, PageS } from '../styledComponents/PageStyled';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { SectionsContainerS } from '../styledComponents/SectionsContainerStyled';
import { Footer } from 'ui/components/Footer/Footer';

export const Page = () => {
  return (
    <MainContainerS>
      <PageS>
        <Header />
        <SectionsContainerS>
          <Outlet />
        </SectionsContainerS>
        <Footer />
      </PageS>
    </MainContainerS>
  );
};
