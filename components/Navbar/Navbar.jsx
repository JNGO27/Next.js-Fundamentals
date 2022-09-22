import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  width: 100%;
  height: 80px;
  margin-bottom: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aqua;
`;

const NavLinkWrapper = styled.nav`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const RedLink = styled.a`
  text-decoration: none;
  color: red;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLinkWrapper>
        <Link href="/" passHref>
          <RedLink>Home</RedLink>
        </Link>
        <Link href="/HomeTwo" passHref>
          <RedLink>Home Two</RedLink>
        </Link>
      </NavLinkWrapper>
    </NavWrapper>
  );
};

export default Navbar;
