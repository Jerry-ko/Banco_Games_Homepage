import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin-bottom: 100px;
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
      padding-right: 10px;
      cursor: pointer;
    }
    svg {
      color: #0bb3fb;
    }
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;

  button {
    z-index: 10;
  }

  .slick-list {
    padding-top: 50px;
  }

  .slick-prev:before {
    font-size: 80px;
    position: absolute;
    left: -18px;
    top: 0px;
    opacity: 1;
    content: url("/assets/img/game/arrow_prev_before.png");
  }

  .slick-prev:hover:before {
    content: url("/assets/img/game/arrow_prev_after.png");
  }

  .slick-next:before {
    position: absolute;
    right: -18px;
    top: 0px;
    opacity: 1;
    content: url("/assets/img/game/arrow_next_before.png");
  }

  .slick-next:hover:before {
    content: url("/assets/img/game/arrow_next_after.png");
  }

  .slick-dots li.slick-active button:before {
    opacity: #0bb3fb;
    color: #0bb3fb;
  }

  .slick-dots li button:before {
    font-size: 14px;
    color: white;
    opacity: 1;
  }
`;

const Item = styled.div`
  position: relative;
  width: 30%;

  img {
    height: 560px;
  }
  .robo_img {
    position: absolute;
    top: -64px;
    left: 150px;
    height: 590px;
    z-index: 20;
  }

  .ar_img {
    position: absolute;
    height: 500px;
    top: 34px;
    left: 15px;
  }

  p {
    position: absolute;
    top: 303px;
    left: 100px;
    z-index: 20;
    font-size: 25px;
    letter-spacing: -1.8px;
    line-height: 42px;
    font-weight: 700;
  }
  .robo_text {
    left: 175px;
  }
`;

export default class Game extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Container>
        <div className="title">게임</div>
        <div className="arrow_info">
          <input type="button" value="전체보기"></input>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <StyledSlider ref={(slider) => (this.slider = slider)} {...settings}>
          <Item>
            <img
              src="/assets/img/game/kindom.png"
              className="kindom_img"
              alt=""
            />
          </Item>
          <Item>
            <img src="/assets/img/game/robo.png" className="robo_img" alt="" />
            <div className="desc">
              <p className="robo_text">
                우당탕탕 젤리맨들의
                <br />
                숨막히는 결투
              </p>
            </div>
          </Item>
          <Item>
            <img src="/assets/img/game/ar.png" className="ar_img" alt="" />
            <div className="desc">
              <p>
                한국적인 도시,
                <br />
                전라북도로 같이 떠나요!
              </p>
            </div>
          </Item>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </StyledSlider>
      </Container>
    );
  }
}
