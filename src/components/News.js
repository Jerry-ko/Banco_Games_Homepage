import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin-bottom: 100px;
  width: 100%;
  min-width: 1200px;
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
`;

const Contents = styled.div`
  display: flex;
  margin: 40px 0;

  .item {
    position: relative;
    margin-right: 24px;

    &:nth-child(1) {
      width: 320px;

      img {
        width: 320px;
      }
    }

    &:nth-child(2) {
      width: 269px;
    }

    &:nth-child(3) {
      width: 566px;
      img {
        &:nth-child(1) {
          width: 566px;
        }

        &:nth-child(2) {
          width: 272px;
          position: absolute;
          left: 0px;
        }
      }
    }

    .column_item {
      &:nth-child(1) {
        margin-bottom: 10.7px;
      }
    }

    .item_column_container {
      position: relative;

      img {
        &:nth-child(1) {
          width: 269px;
        }
      }

      .text_box {
        &:nth-child(1) {
          padding: 6px 22px 27px;
        }
      }
    }

    .notice {
      position: absolute;
      top: -20px;
      left: 12px;
      width: 140px;
      height: 48px;
      padding: 14px 33px;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 700;
      background-color: #0bb3fb;
    }

    .text_box {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 3;
      padding: 14px 22px 27px;
      width: 100%;
      bottom: 0px;
      font-weight: 700;
      line-height: 20px;

      .text_box_title {
        border: 2px solid white;
        border-radius: 30px;
        width: 60px;
        padding: 3px 11px;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
`;

const Table = styled.table`
  width: 100%;

  td {
    padding-bottom: 10px;
    cursor: pointer;
    align-items: center;

    &:nth-child(1) {
      padding-left: 10px;
    }

    &:nth-child(2) {
      opacity: 50%;
    }
  }
`;

const News = () => {
  return (
    <Container>
      <div className="title">주요 소식</div>
      <div className="arrow_info">
        <input type="button" value="더보기"></input>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <Contents>
        <div className="item">
          <img src="/assets/img/news/actiongolf_playingImg.png" alt="" />
          <div className="text_box">
            <div className="text_box_title">HOT</div>
            <div className="text_box_desc">
              [액션골프 시연영상]
              <br />
              소소한 공략 Tip!까지 확인해보세요!
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item_column_container">
            <div className="column_item">
              <img src="/assets/img/news\kindom_playingScreen.png" alt="" />
              <div className="text_box">
                <div className="text_box_desc">
                  좀비킹덤
                  <br />
                  업그레이드 된 스킬!
                </div>
              </div>
            </div>
          </div>
          <div className="column_item">
            <img src="/assets/img/news/actionboard.png" alt="" />
            <div className="text_box">
              <div className="text_box_title">NEW</div>
              <div className="text_box_desc">
                새로운 게임 출시
                <br />
                스피드를 실내에서 안전하게...{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="/assets/img/news/freedraw_playingImg.png" alt="" />
          <img src="/assets/img/news/freeDown_logo.png" alt="" />
          <div className="text_box">
            <div className="text_box_title">NEW</div>
            <div className="text_box_desc">
              새로운 게임 출시
              <br />
              쉽게 3D로 표현하고 모델링 해보세요!
            </div>
          </div>
          <div className="notice">사전예약</div>
        </div>
      </Contents>
      <Table>
        <tbody>
          <tr className="table_item">
            <td>[액션골프] 캐릭터 ‘보라’ 추가 업데이트!</td>
            <td>인벤</td>
          </tr>

          <tr className="table_item">
            <td>
              [프리드로우] - 컬러 팔레트 업데이트 예정, 스팀 출시 기념 20만 유저
              대상 이벤트 진행
            </td>
            <td>인벤</td>
          </tr>

          <tr className="table_item">
            <td>
              [액션보드] 실내에서 보드를 타는거 실화인지!, 보드게임 ‘액션보드’
              공개
            </td>
            <td>인벤</td>
          </tr>

          <tr className="table_item">
            <td>[좀비킹덤] 리뉴얼 새로운 환경에서 게임을 실행하세요!</td>
            <td>인벤</td>
          </tr>

          <tr className="table_item">
            <td>
              [메카실험실] 리그오브레전드 - 통과할 수 있는 벽인데 통과 못한다고?
            </td>
            <td>인벤</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default News;
