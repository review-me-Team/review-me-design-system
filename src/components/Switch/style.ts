import styled from 'styled-components';

import { theme } from '@styles/theme';

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;

  ${theme.font.body.default}

  [type='checkbox'] {
    appearance: none;
    position: relative;
    width: 2.25em;
    height: 1.25em;

    border: max(0.125rem, 0.1em) solid ${theme.palette.gray500};
    border-radius: 1.25em;

    cursor: pointer;
  }

  /* thumb style */
  [type='checkbox']::before {
    content: '';
    position: absolute;
    left: 0;
    width: 1em;
    height: 1em;

    border-radius: 50%;
    background-color: ${theme.palette.gray500};

    transform: scale(0.8);
    transition: left 250ms linear;
  }

  [type='checkbox']:checked::before {
    background-color: white;
    left: 1em;
  }
  [type='checkbox']:checked {
    background-color: ${theme.palette.green500};
    border-color: ${theme.palette.green500};
  }

  [type='checkbox']:focus-visible {
    outline-offset: max(0.125rem, 0.1em);
    outline: max(0.125rem, 0.1em) solid ${theme.palette.green500};
  }
`;

export { SwitchLabel };
