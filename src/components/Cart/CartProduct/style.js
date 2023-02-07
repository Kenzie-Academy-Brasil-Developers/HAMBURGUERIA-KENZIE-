import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  position: relative;

  width: 100%;
  height: 80px;

  img {
    background: #e0e0e0;
    border-radius: 5px;
    width: 80px;
    height: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-left: 0.5rem;
    margin-top: 0.4rem;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #828282;
  }

  button {
    border: none;
    background: none;
    height: 0;
    width: 0;

    position: absolute;
    top: 17.5px;
    right: 0.5rem;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #bdbdbd;
  }
`;
