import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { router } from "../router";
import { mainWeight } from "../style/GlobalStyled";

const SHeader = styled.header`
  width: 100%;
  height: 60px;
  position: ${(props) => props.fixed};
  top: 0;
  left: 0;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: 0.5s;
`;

const Logo = styled.h3`
  font-size: 25px;
  font-weight: 600;
  a {
    color: gold;
  }
`;

const MenuWrap = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  &:nth-child(1) {
    margin-right: 50px;
  }
  font-weight: ${mainWeight.titleWeight};
`;

export const Header = () => {
  const [bg, setBg] = useState();
  const [fix, setfix] = useState();

  const handleScroll = () => {
    const sct = window.pageYOffset;
    if (sct >= 400) {
      setBg("rgba(0,0,0,0.7)");
      setfix("fixed");
    } else {
      setBg("transparent");
      setfix("absoulte");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader bgColor={bg} fixed={fix}>
      <Logo>
        <Link to={router.home}>PATI</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to={router.home}>홈</Link>
        </Menu>
        <Menu>
          <Link to={router.search}>영화검색</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
