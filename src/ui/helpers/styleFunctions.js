export const headerHovers = (props) => `
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    transition: 0.3s;
    background: ${props.theme.hoverLinksColor};
  }
`;

export const titleColor = (props) =>
  props.themeColor && props.theme[props.themeColor]
    ? props.theme[props.themeColor]
    : 'inherit';

export const titleShadowColor = (props) =>
  props.themeColor && props.theme[props.themeColor]
    ? props.theme[props.themeColor + 'Shadow']
    : 'inherit';

/**
 * shadowText sets a shadow of the same color as the text
 */
export const shadowText = (props) => (textColor) =>
  `text-shadow: ${props.theme.shadowTextPosition} ${textColor};`;

export const dropDownMenuTransition = 'transition: all 0.3s ease-in-out;';
