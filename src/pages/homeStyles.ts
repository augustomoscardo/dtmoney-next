import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  span {
    font-size: 32px;
    color: var(--blue-light);

    margin: 2rem 0;
  }

  @media (max-width: 380px) {
    span {
      font-size: 24px;
      text-align: center;

      margin: 2rem auto;
    }
  }
`;
