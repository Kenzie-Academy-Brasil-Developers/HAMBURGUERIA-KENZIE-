import styled from "styled-components";

export const StyledMain = styled.main`
  section {
    width: 100%;
  }

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
  position: relative;

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
    position: unset;
    min-width: 110px;
  }

  @media (min-width: 1041px) {
    button {
      display: flex;
      position: absolute;
      right: 4.6rem;
      top: 1px;
      width: 100%;
      max-width: 137px;

      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      text-align: center;

      color: #ffffff;
    }
  }
`;
