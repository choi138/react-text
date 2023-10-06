/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

export interface TextProps {
  children: React.ReactNode;
  size?: number;
  color?: string;
  weight?: number;
  lineHeight?: number;
  cursor?: React.CSSProperties['cursor'];
  textAlign?: React.CSSProperties['textAlign'];
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
}

export const Text: React.FC<TextProps> = ({
  children,
  size = 1.1,
  color = '#000',
  weight = 500,
  lineHeight = 'auto',
  textAlign = 'left',
  cursor = 'auto',
  style,
  onClick,
}) => {
  return (
    <p
      onClick={onClick}
      css={css`
        font-size: ${size}rem;
        color: ${color};
        font-weight: ${weight};
        line-height: ${lineHeight};
        text-align: ${textAlign};
        cursor: ${cursor};
      `}
      style={style}
    >
      {children}
    </p>
  );
};
