/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

export interface TextProps {
  children: React.ReactNode;
  size: number;
  color?: string;
  weight?: number;
  lineHeight?: number;
  cursor?: string;
  textAlign?: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
}

export const Text: React.FC<TextProps> = ({
  children,
  size,
  color,
  weight,
  onClick,
  lineHeight,
  textAlign,
  cursor,
}) => {
  return (
    <p
      onClick={onClick}
      css={css`
        font-size: ${size}rem;
        color: ${color ? color : '#000'};
        font-weight: ${weight ? weight : 500};
        line-height: ${lineHeight ? lineHeight : 1.5};
        text-align: ${textAlign ? textAlign : 'left'};
        cursor: ${cursor ? cursor : 'default'};
      `}
    >
      {children}
    </p>
  );
};
