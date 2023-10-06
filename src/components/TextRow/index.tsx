/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

export interface TextRowProps {
  children: React.ReactNode;
  gap?: number;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const TextRow: React.FC<TextRowProps> = ({
  children,
  gap,
  flexDirection,
  alignItems,
  justifyContent,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      css={css`
        display: flex;
        flex-direction: ${flexDirection ? flexDirection : 'row'};
        align-items: ${alignItems ? alignItems : 'center'};
        justify-content: ${justifyContent ? justifyContent : 'center'};
        column-gap: ${gap ? gap : 0.5}rem;
      `}
    >
      {children}
    </div>
  );
};
