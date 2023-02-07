import styled from "styled-components";

export const StyledTotalValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  width: 100%;
  height: 122px;

  padding-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1.3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  border-top: 3px solid #e0e0e0;
  background: #f5f5f5;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #333333;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    color: #828282;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;

    width: 100%;
    height: 60px;

    background: #e0e0e0;

    border: 2px solid #e0e0e0;
    border-radius: 8px;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #828282;
  }
`;
