import React from 'react';
import { AS } from 'ui/styledComponents/AStyled';
import { ParagraphS } from '../styledComponents/paragraphStyled';
import {
  ProjectItemContainerS,
  ProjectItemSideS,
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
      <ProjectItemSideS>
        <AS href={deploymentUrl}>
          <SubTitleS>{name}</SubTitleS>
        </AS>
        {DescriptionComponent ? (
          <DescriptionComponent {...descriptionComponentProps} />
        ) : (
          <ParagraphS>{descriptionText}</ParagraphS>
        )}
      </ProjectItemSideS>
    </ProjectItemContainerS>
  );
};
