import React from 'react';
import {
  GithubIconS,
  LinkedInIconS,
  SocialButtonsFooterContainerS,
  TwitterIconS,
} from 'ui/styledComponents/FooterStyled';

export const SocialButtonsFooter = () => {
  return (
    <SocialButtonsFooterContainerS>
      <GithubIconS />
      <LinkedInIconS />
      <TwitterIconS />
    </SocialButtonsFooterContainerS>
  );
};
