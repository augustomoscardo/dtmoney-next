import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  margin-top: 2rem;

  strong {
    color: var(--text-body);
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 6px;
`;

export const Button = styled.button`
  text-decoration: none;
  color: var(--shape);
  border: none;
  border-radius: 0.25rem;
  padding: 0 0.625rem;
  width: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: gray;
    cursor: default;
  }

  background: var(--blue-light);
  &:hover {
    background: var(--blue);
  }
`;
