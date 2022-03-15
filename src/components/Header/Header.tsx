import { Button } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ContainerLinksStyled,
  ImageStyled,
  NavContainerStyled,
  NavStyled,
} from "./Header.styled";

const SKYDROPX_URL =
  "https://www.skydropx.com/assets/landing5/skydropx_logo-4fb27c0601c3bccddd15cad09e612eb0d777dcdbcebae56c0382a8fe2978dfa9.svg";

const Header = ({ ...props }) => {
  return (
    <NavContainerStyled {...props}>
      <NavStyled>
        <ImageStyled src={SKYDROPX_URL} height={40} />
      </NavStyled>
    </NavContainerStyled>
  );
};
export default Header;
