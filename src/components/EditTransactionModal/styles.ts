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

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    @media (max-width: 380px) {
      height: 2.5rem;
      font-size: 0.825rem;
    }

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
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

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.2s;

  @media (max-width: 380px) {
    height: 2.5rem;
    font-size: 0.825rem;
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;

    @media (max-width: 380px) {
      width: 10px;
      height: 10px;
    }
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);

    @media (max-width: 380px) {
      margin-left: 0.625rem;
      font-size: 0.825rem;
    }
  }
`;
