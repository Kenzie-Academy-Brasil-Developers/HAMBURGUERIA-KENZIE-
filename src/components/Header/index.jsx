import { StyledHeader } from "./style";
import logo from "../../assets/Mask Group.svg";
import { Button } from "../Button";
import { SearchForm } from "../SearchForm";
import { StyledContainer } from "../../styles/container";

export const Header = ({ setSearch }) => {
  return (
    <StyledHeader>
      <nav>
        <img src={logo} alt="Logo" />
        <SearchForm setSearch={setSearch} />
      </nav>
    </StyledHeader>
  );
};
