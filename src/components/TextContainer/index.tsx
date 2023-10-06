/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';

export interface TextContainerProps {
  children: React.ReactNode;
  columnGap?: number;
  rowGap?: number;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const TextContainer: React.FC<TextContainerProps> = ({
  children,
  columnGap,
  rowGap,
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
        column-gap: ${columnGap ? columnGap : 0}rem;
        row-gap: ${rowGap ? rowGap : 0}rem;
      `}
    >
      {children}
    </div>
  );
};
