import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 380px) {
    padding: 2rem 1rem 6rem;

    /* div {
      position: relative;

      img {
        width: 80px;
      }
    } */
  }

  .buttons {
    button {
      font-size: 1rem;
      border: 0;
      border-radius: 0.25rem;
      height: 3rem;
      color: #fff;
      padding: 0 2rem;

      @media (max-width: 380px) {
        font-size: 0.625rem;
        height: 1.5rem;
        padding: 0 0.625rem;
      }
    }

    .signInButton {
      width: 100%;
      font-weight: 600;
      letter-spacing: 1px;

      background: var(--green);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      @media (max-width: 380px) {
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
      }
    }

    .signedIn {
      display: flex;
      gap: 1rem;

      @media (max-width: 380px) {
        gap: 0.5rem;
      }

      button {
        background: var(--blue);

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }

      button + button {
        background: var(--red);
      }
    }
  }
`;
