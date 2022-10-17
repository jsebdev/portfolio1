import React from 'react';
import { Outlet, useOutlet } from 'react-router-dom';
import { ProjectsSection } from '../Sections/ProjectsSection';

export const Work = () => {
  const outlet = useOutlet()
  return (
    <>
      {outlet ? <Outlet /> : <ProjectsSection />}
    </>
  );
};
