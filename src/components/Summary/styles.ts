import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: -5rem;
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    @media (max-width: 380px) {
      padding: 1rem 1rem;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 380px) {
        p {
          font-size: 0.8rem;
        }
      }
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;

      @media (max-width: 380px) {
        margin-top: 0.625rem;
        font-size: 1rem;
      }
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
