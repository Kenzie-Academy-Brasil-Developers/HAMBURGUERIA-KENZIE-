import styled from "styled-components";

export const StyledEmptyListTitle = styled.div`
  display: flex;
  margin-top: 1rem;
  border-radius: 5px 5px 0px 0px;
  align-items: center;
  padding-left: 1rem;

  width: 100%;
  height: 65px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  background: #27ae60;
  color: #ffffff;
`;

export const StyledEmptyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;

  width: 100%;

  background: #f5f5f5;
  border-radius: 0px 0px 5px 5px;

  margin-bottom: 1rem;

  h3 {
    margin-top: 1rem;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
  }

  p {
    display: flex;
    margin-top: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: #828282;
  }

  @media (min-width: 1041px) {
    min-width: 385px;
    max-width: 385px;
  }
`;
