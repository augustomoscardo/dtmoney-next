import styled from "styled-components";

export const Container = styled.div`
  background: var(--background);
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    font-size: 32px;
    color: var(--blue-light);

    margin: 2rem 0;
  }
`;
