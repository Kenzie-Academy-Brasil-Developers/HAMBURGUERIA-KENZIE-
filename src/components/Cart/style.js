import styled from "styled-components";

export const StyledCart = styled.div`
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

  @media (min-width: 1041px) {
    min-width: 385px;
    max-width: 385px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 300px;
  background: #f5f5f5;
  gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
