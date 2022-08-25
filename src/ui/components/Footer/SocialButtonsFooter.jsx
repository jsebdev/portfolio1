import React from 'react';
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from 'ui/helpers/constants';
import {
  GithubIconS,
  LinkedInIconS,
  SocialButtonsFooterContainerS,
  TwitterIconS,
} from 'ui/styledComponents/FooterStyled';

export const SocialButtonsFooter = () => {
  return (
    <SocialButtonsFooterContainerS>
      <a href={GITHUB_LINK} rel='noreferrer' target='_blank'>
        <GithubIconS />
      </a>
      <a href={LINKEDIN_LINK} rel='noreferrer' target='_blank'>
        <LinkedInIconS />
      </a>
      <a href={TWITTER_LINK} rel='noreferrer' target='_blank'>
        <TwitterIconS />
      </a>
    </SocialButtonsFooterContainerS>
  );
};
