import React from 'react';
import { projectPostTypes } from 'ui/helpers/constants';
import { AS } from 'ui/styledComponents/AStyled';
import { ParagraphS } from '../styledComponents/paragraphStyled';
import { Link } from 'react-router-dom';
import {
  ProjectItemContainerS,
  ProjectItemSideS,
  ProjectThumbnailContainerS,
  ProjectThumbnailS,
} from '../styledComponents/ProjectsSectionStyled';
import { SubTitleS } from '../styledComponents/TitleStyled';
import { LinkS } from 'ui/styledComponents/LinkStyled';

export const ProjectItem = ({
  name,
  descriptionText,
  DescriptionComponent,
  descriptionComponentProps,
  thumbnail,
  reverse = false,
  deploymentUrl,
  projectPostType,
  postLocation
}) => {
  return (
    <ProjectItemContainerS reverse={reverse}>
      <ProjectThumbnailContainerS>
        {
          projectPostType === projectPostTypes.post && (
            <Link to={postLocation}>
              <ProjectThumbnailS
                src={require(`images/thumbnails/${thumbnail}`)}
                alt={name}
              />
            </Link>
          )
        }
        {
          projectPostType === projectPostTypes.deployment && (
            <AS href={deploymentUrl}>
              <ProjectThumbnailS
                src={require(`images/thumbnails/${thumbnail}`)}
                alt={name}
              />
            </AS>
          )
        }
      </ProjectThumbnailContainerS>
      <ProjectItemSideS>
        {
          projectPostType === projectPostTypes.deployment && (
            <AS href={deploymentUrl}>
              <SubTitleS>{name}</SubTitleS>
            </AS>
          )
        }
        {
          projectPostType === projectPostTypes.post && (
            <LinkS to={postLocation}>
              <SubTitleS>{name}</SubTitleS>
            </LinkS>
          )
        }
        {DescriptionComponent ? (
          <DescriptionComponent {...descriptionComponentProps} />
        ) : (
          <ParagraphS>{descriptionText}</ParagraphS>
        )}
      </ProjectItemSideS>
    </ProjectItemContainerS >
  );
};
