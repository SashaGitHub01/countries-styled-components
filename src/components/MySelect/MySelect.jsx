import React from "react";
import styled from 'styled-components';
import Select from 'react-select';

export const MySelect = styled(Select).attrs({
   styles: {
      control: (provided, state) => ({
         ...provided,
         backgroundColor: 'var(--colors-ui-base)',
         color: 'var(--colors-text)',
         outline: '0',
         borderRadius: 'var(--radius)',
         height: '100%',
      }),

      option: (provided, state) => ({
         ...provided,
         backgroundColor: state.isSelected
            ? 'var(--colors-bg)'
            : 'var(--colors-ui-base)',
         color: 'var(--colors-text)',
         cursor: 'pointer',
         padding: '1.5rem 1rem',

         ":hover": {
            backgroundColor: 'var(--colors-bg)',
         },
      }),

      placeholder: (provided, state) => ({
         ...provided,
         color: 'var(--colors-text)',
      }),

      menu: (provider, state) => ({
         ...provider,
         backgroundColor: 'var(--colors-ui-base)',
      }),

      singleValue: (provider, state) => ({
         ...provider,
         color: 'var(--colors-text)',
      })
   }
})`
  width:200px;
  font-size: var(--fs-sm);
  color: var(--colors-text),
`;
