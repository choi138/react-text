/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

export interface TextContainerProps {
  children: React.ReactNode;
  columnGap?: React.CSSProperties['columnGap'];
  rowGap?: React.CSSProperties['rowGap'];
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  justifyContent?: React.CSSProperties['justifyContent'];
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const TextContainer: React.FC<TextContainerProps> = ({
  children,
  columnGap = 0,
  rowGap = 0,
  flexDirection = 'auto',
  alignItems = 'auto',
  justifyContent = 'auto',
  style,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      css={css`
        display: flex;
        flex-direction: ${flexDirection};
        align-items: ${alignItems};
        justify-content: ${justifyContent};
        column-gap: ${columnGap}rem;
        row-gap: ${rowGap}rem;
      `}
      style={style}
    >
      {children}
    </div>
  );
};
