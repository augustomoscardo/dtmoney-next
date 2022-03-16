import styled from "styled-components";

export const Container = styled.form`
  background: var(--blue-light);
  padding: 2rem 4rem;
  max-width: 600px;
  width: 100%;

  border-radius: 0.5rem;

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0%.25rem;
    margin-top: 2rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 1rem;

    a {
      text-decoration: none;
      color: var(--text-body);

      transition: 200ms;

      &:hover {
        color: var(--shape);
      }
    }
  }
`;
