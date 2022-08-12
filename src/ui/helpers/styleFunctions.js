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
  props.message && props.theme[props.message]
    ? props.theme[props.message]
    : 'inherit';

export const titleShadowColor = (props) =>
  props.message && props.theme[props.message]
    ? props.theme[props.message + 'Shadow']
    : 'inherit';

/**
 * shadowText sets a shadow of the same color as the text
 */
export const shadowText = (props) => (textColor) =>
  `
  text-shadow: ${
    props.shadowColor || props.shadowColor === undefined
      ? `${props.theme.shadowTextPosition} ${textColor}`
      : 'inherit'
  };
`;

export const dropDownMenuTransition = 'transition: all 0.3s ease-in-out;';
