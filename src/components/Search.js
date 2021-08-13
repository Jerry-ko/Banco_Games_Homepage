import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 100px;
  width: 100%;
  min-width: 1200px;
  position: relative;

  img {
    margin-top: 40px;
    width: 100%;
    width: 100%;
  }

  .search_text {
    position: absolute;
    bottom: 0;
    padding: 64px 37px 44px;
    width: 100%;

    .search_text_title {
      font-size: 40px;
      margin-bottom: 36px;
    }
    .search_text_desc {
      font-size: 28px;
      margin-bottom: 36px;
    }
    .button {
      input {
        width: 200px;
        height: 60px;
        background-color: #0bb3fb;
        color: white;
        font-size: 18px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        font-weight: 700;
      }
    }
  }
`;

const Search = () => {
  return (
    <Container>
      <img src="/assets/img/search/search_bg.png" alt="" />
      <div className="search_text">
        <div className="search_text_title">찾아보기</div>
        <div className="search_text_desc">
          뱅코게임즈 카탈로그에서 플레이 하실 게임을 찾아보세요!
        </div>
        <div className="button">
          <input type="button" value="지금 찾아보기"></input>
        </div>
      </div>
    </Container>
  );
};
export default Search;
