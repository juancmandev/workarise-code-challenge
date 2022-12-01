import Sidebar from '../components/Sidebar';
import { SPAContainer, MainContainer } from '../styles/styledComponents';

const Main = ({ children }) => {
  return (
    <>
      <SPAContainer>
        <Sidebar />
        <MainContainer>{children}</MainContainer>
      </SPAContainer>
    </>
  );
};

export default Main;
