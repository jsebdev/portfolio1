import React from 'react';
import { SpinnerBackgroundS, SpinnerInside1S, SpinnerInside2S, SpinnerS } from 'ui/styledComponents/SpinnerStyled';

export const Spinner = ({ position = null }) => {
  return (
    <SpinnerBackgroundS position={position}>
      <SpinnerS>
        <SpinnerInside1S />
        <SpinnerInside2S />
      </SpinnerS>
    </SpinnerBackgroundS>
  );
}
