import React from 'react';
import { projectPostTypes } from 'ui/helpers/constants';
import { AS } from 'ui/styledComponents/AStyled';
import { ParagraphS } from '../styledComponents/paragraphStyled';
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
  const MyLink = getLinkType(projectPostType, { postLocation, deploymentUrl });
  return (
    <ProjectItemContainerS reverse={reverse}>
      <ProjectThumbnailContainerS>
        <MyLink>
          <ProjectThumbnailS
            src={require(`images/thumbnails/${thumbnail}`)}
            alt={name}
          />
        </MyLink>
      </ProjectThumbnailContainerS>
      <ProjectItemSideS>
        <MyLink>
          <SubTitleS>{name}</SubTitleS>
        </MyLink>
        {DescriptionComponent ? (
          <DescriptionComponent {...descriptionComponentProps} />
        ) : (
          <ParagraphS>{descriptionText}</ParagraphS>
        )}
      </ProjectItemSideS>
    </ProjectItemContainerS >
  );
};

const getLinkType = (projectPostType, { postLocation, deploymentUrl }) => {
  if (projectPostType === projectPostTypes.post) {
    const MyLink = ({ children }) => (
      <LinkS target="_blank" to={postLocation}>
        {children}
      </LinkS>
    )
    return MyLink;
  }
  if (projectPostType === projectPostTypes.deployment) {
    const MyLink = ({ children }) => (
      <AS href={deploymentUrl}>
        {children}
      </AS>
    )
    return MyLink;
  }
  return null;
}