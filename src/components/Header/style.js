import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #f5f5f5;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.75rem;
  padding-bottom: 0.75rem;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 1.2rem;
    width: 100%;
    max-width: 1440px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 auto;
  }

  img {
    width: 158.94px;
    height: 36.83px;
  }

  form {
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    padding: 0px 1px 0px 1px;
    gap: 115px;

    width: 100%;

    height: 60px;

    background: #ffffff;

    border: 2px solid #e0e0e0;
    border-radius: 8px;
  }

  form:focus-within {
    border: 2px solid #333333;
  }

  input {
    flex: 1;
    height: 55px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding-left: 1rem;
    padding-right: 1rem;

    color: #e0e0e0;
    border: none;
    outline: none;
    border-radius: 8px;
  }

  button {
    position: absolute;
    right: 0.5rem;
  }

  @media (min-width: 1041px) {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    nav {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }

    form {
      max-width: 365px;
    }

    div {
      max-width: 365px;
    }
  }

  @media (min-width: 1470px) {
    nav {
      padding-right: 2rem;
    }
  }
`;
