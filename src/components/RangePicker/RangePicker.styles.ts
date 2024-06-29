import styled from 'styled-components';

export const Field = styled.div`
  z-index: 3;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__close-icon::after {
    background-color: var(--primary);
  }

  .react-datepicker__day {
    &--selected {
      background-color: var(--primary);
    }

    &--keyboard-selected {
      background-color: var(--primary);
      color: var(--onPrimary);

      &:hover {
        background-color: var(--hoverPrimary);
      }
    }

    &--in-selecting-range {
      &:not(.react-datepicker__day--in-range) {
        background-color: var(--primary);
      }
    }

    &--in-range {
      background-color: var(--primary);

      &:hover {
        background-color: var(--hoverPrimary);
      }
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 0;
  height: var(--control-height);
`;
