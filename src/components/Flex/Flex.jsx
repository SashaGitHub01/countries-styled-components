import styled from 'styled-components';

export const Flex = styled.div`
   display: flex;
   align-items: ${({ ai }) => ai || 'start'};
   justify-content: ${({ jf }) => jf || 'flex-start'};
   flex-direction: ${({ direction }) => direction || 'row'};
   gap: ${({ gap }) => gap || 0};
`