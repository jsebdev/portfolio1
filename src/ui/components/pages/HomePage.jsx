import React from 'react';
import { HelloSection } from '../Sections/HelloSection';
import { ProjectsSection } from '../Sections/ProjectsSection';

export const Home = () => {
  return (
    <>
      <HelloSection />
      <ProjectsSection featured={true} />
    </>
  );
};
