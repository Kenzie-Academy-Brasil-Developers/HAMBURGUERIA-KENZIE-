import styled from "styled-components";

export const StyledProductList = styled.ul`
  display: flex;
  overflow-x: scroll;
  margin-top: 1rem;
  gap: 1rem;

  @media (min-width: 1041px) {
    flex-wrap: wrap;
    overflow: unset;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;
