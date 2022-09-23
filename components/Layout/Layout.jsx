import Navbar from '../Navbar/Navbar';
import styled from 'styled-components';

const MainWrapper = styled.main`
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </div>
  );
};

export default Layout;
