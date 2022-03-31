import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width: 380px) {
    margin-top: 2rem;
  }

  .noRegister {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: var(--text-title);
    span {
      font-size: 1.5rem;
    }
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem; // spacing between items of table

    @media (max-width: 380px) {
      /* width: 80%; */

      thead,
      th:nth-child(4),
      td:nth-child(4) {
        display: none;
      }

      td {
        font-size: 0.625rem;
      }
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      @media (max-width: 380px) {
        padding: 1rem 0;
      }
    }

    tr {
      border-radius: 0.25rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      /* border-radius: 0.25rem; */

      @media (max-width: 380px) {
        padding: 1rem 0.625rem;

        &:first-child {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 90px;
        }
      }

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }

    .editDeleteButtons {
      div {
        display: flex;
        gap: 1rem;
      }

      button + button {
        margin-left: 2rem;
      }

      @media (max-width: 380px) {
        display: flex;
        align-items: center;
        justify-content: center;

        button + button {
          margin-left: 1rem;
        }
      }
    }

    button {
      border: none;
      text-decoration: none;
      background-color: transparent;

      width: 20px;
      height: 20px;

      &:first-child {
        color: var(--blue-light);
      }

      & + button {
        color: var(--red);
      }

      svg {
        width: 20px;
        height: 20px;

        @media (max-width: 380px) {
          width: 10px;
          height: 10px;
        }

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
