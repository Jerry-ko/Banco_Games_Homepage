import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin-bottom: 100px;
  width: 100%;
  min-width: 1220px;
  .title {
    font-size: 36px;
  }

  .arrow_info {
    display: flex;
    align-items: center;
    cursor: pointer;

    input {
      background-color: black;
      color: #0bb3fb;
      border: none;
      font-size: 18px;
      font-weight: 700;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      cursor: pointer;
      padding-right: 10px;
      cursor: pointer;
    }

    svg {
      color: #0bb3fb;
    }
  }

  img {
    margin-top: 40px;
    width: 100%;
  }
`;

const Video = () => {
  return (
    <Container>
      <div className="title">게임 관련 영상</div>
      <div className="arrow_info">
        <input type="button" value="더보기"></input>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <img src="/assets/img/video/videoAr.png" alt="" />
    </Container>
  );
};
export default Video;
