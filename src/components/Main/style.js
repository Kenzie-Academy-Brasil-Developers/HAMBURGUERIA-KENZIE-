import styled from "styled-components";

export const StyledMain = styled.main`
  @media (min-width: 1041px) {
    display: flex;
    justify-content: space-between;

    aside {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      margin-right: 1rem;
    }
  }
`;

export const StyledSearched = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  align-items: center;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;

    color: #333333;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;

    color: #828282;
  }

  button {
    min-width: 107px;
    margin-right: 0.5rem;
  }

  @media (min-width: 1041px) {
    button {
      margin-right: 4.5rem;
    }
  }
`;
