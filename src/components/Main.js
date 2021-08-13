import styled from "styled-components";
import MainSlider from "../Library/MainCarausel";

const Container = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

const Nav = styled.div`
  display: flex;
  margin: 25px 0;
  min-width: 1200px;

  img {
    width: 104px;
  }

  .menu {
    display: flex;
    align-items: center;
    width: 100%;

    p {
      font-size: 16px;
      padding-left: 72px;
      cursor: pointer;
    }
  }

  .lang {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
      background-color: black;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const Main = () => {
  return (
    <Container>
      <Nav>
        <img src="/assets/img/common/bancogames_logo_white.png" alt="logo" />
        <div className="menu">
          <p>게임</p>
          <p>홍보</p>
        </div>
        <div className="lang">
          <input type="button" value="한국어" />
        </div>
      </Nav>

      <MainSlider></MainSlider>
    </Container>
  );
};
export default Main;
