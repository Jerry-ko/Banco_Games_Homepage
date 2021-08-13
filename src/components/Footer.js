import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding-bottom: 44px;
  min-width: 1200px;
  margin: 0 auto;

  img {
    width: 104px;
  }

  .info_container {
    width: 100%;
    line-height: 44px;
    display: flex;
    .info_items {
      width: 100%;
      display: flex;

      p {
        font-size: 14px;
        padding: 0 69px;

        &:nth-child(1) {
          padding-left: 163px;
        }
      }
    }

    .method {
      padding-right: 40px;

      img {
        width: 37px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <img src="/assets/img/common/bancogames_logo_white.png" alt="logo" />
      <div className="info_container">
        <div className="info_items">
          <p>개인정보처리방침</p>
          <p>이용약관</p>
          <p>사이트맵</p>
        </div>
        <div className="method">
          <img src="/assets/img/footer/youtube_logo.png" alt="yotube_logo" />
        </div>
      </div>
    </Container>
  );
};
export default Footer;
