import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;

    @media (max-width: 380px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
  }

  span {
    width: 100%;
    color: var(--text-title);
    font-weight: 500;
    font-size: 1rem;

    display: inline-block;
    margin: 0 auto;

    @media (max-width: 380px) {
      font-size: 0.825rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--red);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 2rem;
    font-weight: 600;

    transition: filter 0.2s;

    @media (max-width: 380px) {
      height: 2.5rem;
      font-size: 0.825rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
