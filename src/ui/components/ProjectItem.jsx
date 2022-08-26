import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ParagraphS } from '../styledComponents/paragraphStyled';
import {
  ProjectItemContainerS,
  ProjectItemTextS,
  ProjectThumbnailContainerS,
  ProjectThumbnailS,
} from '../styledComponents/ProjectsSectionStyled';
import { SubTitleS } from '../styledComponents/TitleStyled';

export const ProjectItem = ({
  id,
  name,
  description,
  thumbnail,
  reverse = false,
}) => {
  const navigate = useNavigate();
  return (
    <ProjectItemContainerS reverse={reverse} onClick={() => navigate(id)}>
      <ProjectThumbnailContainerS>
        <ProjectThumbnailS src={`images/thumbnails/${thumbnail}`} alt={name} />
      </ProjectThumbnailContainerS>
      <ProjectItemTextS>
        <SubTitleS>{name}</SubTitleS>
        <ParagraphS>{description}</ParagraphS>
      </ProjectItemTextS>
    </ProjectItemContainerS>
  );
};
