import styled from "styled-components";

export const StyledProduct = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 300px;
  min-width: 300px;
  height: 346px;

  border: 2px solid #e0e0e0;
  border-radius: 5px;
  background: #ffffff;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    height: 150px;
    width: 100%;
  }

  img {
    width: 177px;
    height: 177px;
  }

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    margin-top: 1rem;
    padding-left: 1rem;

    color: #333333;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-top: 1rem;
    padding-left: 1rem;

    color: #828282;
  }

  span {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    margin-top: 1rem;
    padding-left: 1rem;

    color: #27ae60;
  }

  button {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;
