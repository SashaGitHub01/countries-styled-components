import styled from 'styled-components';
import { css } from 'styled-components';

export const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: var(--radius);
   background-color: var(--colors-ui-base);
   text-align: center;
   box-shadow: var(--shadow);
   color: var(--colors-text);

   ${({ size }) => size === 'large'
      ? css`
      padding:0 2rem;
      min-height: 32px;
      font-size: var(--fs-md);
   `
      : css`
      min-height: 26px;
      font-size: var(--fs-sm);
      padding:0 1.5rem;
   ` }
`