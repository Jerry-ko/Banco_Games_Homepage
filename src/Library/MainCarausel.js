import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  min-width: 1200px;
`;

const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    cursor: auto;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 0;
  }

  .slick-dots {
    bottom: 230px;
  }

  .slick-dots li.slick-active button:before {
    opacity: #0bb3fb;
    color: #0bb3fb;
  }

  .slick-dots li button:before {
    font-size: 16px;
    color: white;
    opacity: 1;
  }
`;

const Banner = styled.div`
  .bg_container {
    height: 923px;
    position: relative;

    .character_img {
      position: absolute;
      z-index: 7;
      bottom: 10px;
      left: 220px;
    }

    .blur {
      position: absolute;
      z-index: 5;
      width: 100%;
      height: 415px;
      bottom: 8px;
      background: linear-gradient(
        0.01deg,
        #121010 27.71%,
        rgba(0, 0, 0, 0) 85.95%
      );
    }

    .contents {
      position: absolute;
      color: white;
      top: 140px;
      left: 130px;
      z-index: 10;
      font-weight: 700;

      .title {
        font-size: 80px;
        margin-bottom: 42px;
        letter-spacing: -0.1em;
      }
      .text {
        font-size: 14px;
        line-height: 1.5em;
        letter-spacing: -0.08em;
      }
    }

    .button {
      position: absolute;
      z-index: 20;
      top: 440px;
      left: 140px;
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

export default class MainSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <Container>
        <StyledSlider ref={(slider) => (this.slider = slider)} {...settings}>
          <Banner>
            <div className="bg_container">
              <img src="/assets/img/main/bg.jpg" className="bg_img" alt="" />
              <div className="blur"></div>
              <img
                src="/assets/img/main/character.png"
                className="character_img"
                alt=""
              />
              <div className="contents">
                <div className="title">액션골프</div>
                <div className="text">
                  3축 자이로 센서 부착으로 스윙속도 및<br />
                  스윙궤적과 팔로우 각도, 골프스윙의 모션을
                  <br />
                  분석인지해 플레이하는 인터렉티브 골프게임입니다.
                  <br />
                  <br />
                  실내에서 즐기는 가벼운 운동과 자세교정등의
                  <br />
                  효과가 탁월한 게임입니다.
                  <br />
                </div>
              </div>

              <div className="button">
                <input type="button" value="지금 플레이하기"></input>
              </div>
            </div>
          </Banner>
          <Banner>
            <div className="bg_gradient">
              <img src="/assets/img/main/bg.jpg" alt="" />
              <div className="blur"></div>
            </div>
          </Banner>
          <Banner>
            <div className="bg_gradient">
              <img src="/assets/img/main/bg.jpg" alt="" />
              <div className="blur"></div>
            </div>
          </Banner>
          <Banner>
            <div className="bg_gradient">
              <img src="/assets/img/main/bg.jpg" alt="" />
              <div className="blur"></div>
            </div>
          </Banner>
          <Banner>
            <div className="bg_gradient">
              <img src="/assets/img/main/bg.jpg" alt="" />
              <div className="blur"></div>
            </div>
          </Banner>
        </StyledSlider>
      </Container>
    );
  }
}
