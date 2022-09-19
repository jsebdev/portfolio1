import React from 'react';
import { ParagraphS } from '../styledComponents/paragraphStyled';
import {
  ProjectItemContainerS,
  ProjectItemTextS,
  ProjectThumbnailContainerS,
  ProjectThumbnailS,
} from '../styledComponents/ProjectsSectionStyled';
import { SubTitleS } from '../styledComponents/TitleStyled';

export const ProjectItem = ({
  name,
  descriptionText,
  DescriptionComponent,
  descriptionComponentProps,
  thumbnail,
  reverse = false,
  deploymentUrl,
}) => {
  return (
    <ProjectItemContainerS reverse={reverse}>
      <ProjectThumbnailContainerS>
        <a href={deploymentUrl} target='_blank' rel='noreferrer'>
          <ProjectThumbnailS
            src={`images/thumbnails/${thumbnail}`}
            alt={name}
          />
        </a>
      </ProjectThumbnailContainerS>
      <ProjectItemTextS href={deploymentUrl} target='_blank' rel='noreferrer'>
        <SubTitleS>{name}</SubTitleS>
        {DescriptionComponent ? (
          <DescriptionComponent {...descriptionComponentProps} />
        ) : (
          <ParagraphS>{descriptionText}</ParagraphS>
        )}
      </ProjectItemTextS>
    </ProjectItemContainerS>
  );
};
