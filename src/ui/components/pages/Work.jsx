import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { WORK } from 'ui/helpers/constants';
import { ProjectsSection } from '../Sections/ProjectsSection';

export const Work = () => {
  const pathname = useLocation().pathname;
  const pathNodes = pathname.split('/');
  const workPosition = pathNodes.indexOf(WORK);
  return (
    <>
      {workPosition === pathNodes.length - 1 ? <ProjectsSection /> : <Outlet />}
    </>
  );
};
