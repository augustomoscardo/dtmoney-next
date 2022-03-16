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

  .buttons {
    button {
      font-size: 1rem;
      border: 0;
      border-radius: 0.25rem;
      height: 3rem;
      color: #fff;
      padding: 0 1.5rem;
    }

    .signInButton {
      /* width: 200px; */
      width: 100%;
      font-weight: 600;
      letter-spacing: 1px;

      background: var(--green);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.2s;

      svg {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
      }

      &:hover {
        filter: brightness(0.9);
      }
    }

    .signedIn {
      display: flex;
      gap: 1rem;

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
