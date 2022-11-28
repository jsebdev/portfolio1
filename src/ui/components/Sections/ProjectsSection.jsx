import React from 'react';
import { Link } from 'react-router-dom';

import {
  SectionHeaderS,
  TitledSectionS,
} from '../../styledComponents/SectionStyled';
import { SectionTitleS } from '../../styledComponents/TitleStyled';
import { projectList } from '../../../Data/projects';
import { ProjectItem } from '../ProjectItem';
import { ProjectsContainerS } from '../../styledComponents/ProjectsSectionStyled';
import { MainButtonS } from '../../styledComponents/ButtonsStyled';

export const ProjectsSection = ({ featured = false }) => {
  const projectsToShow = featured ? projectList.filter(project => project.featured) : projectList;
  return (
    <TitledSectionS>
      <SectionHeaderS bottomMargin='1.5rem'>
        <SectionTitleS themeColor='sectionTitle'>
          {featured ? 'Featured Projects' : 'Projects'}
        </SectionTitleS>
        {featured && (
          <Link to='work'>
            <MainButtonS>See All</MainButtonS>
          </Link>
        )}
      </SectionHeaderS>
      <ProjectsContainerS>
        {projectsToShow.map((project, index) => (
          <ProjectItem
            {...project}
            key={project.name}
            reverse={index % 2}
          ></ProjectItem>
        ))}
      </ProjectsContainerS>
    </TitledSectionS>
  );
};
