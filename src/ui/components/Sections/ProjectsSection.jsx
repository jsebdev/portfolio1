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

export const ProjectsSection = () => {
  return (
    <TitledSectionS>
      <SectionHeaderS>
        <SectionTitleS message='sectionTitle'>Featured Projects</SectionTitleS>
        <Link to='work'>
          <MainButtonS>See All</MainButtonS>
        </Link>
      </SectionHeaderS>
      <ProjectsContainerS>
        {projectList.slice(0, 2).map((project, index) => (
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
