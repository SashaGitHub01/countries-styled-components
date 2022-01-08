import styled from 'styled-components';

export const Typography = styled.span`
   color: ${({ color }) => color || `var(--colors-text)`};
   font-size: ${({ fz }) => fz || `var(--fs-sm)`};
   font-weight: ${({ fw }) => fw || `var(--fw-light)`};
`