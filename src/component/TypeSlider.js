import Slider from "react-slick";
import "../style/slick.css";
import "../style/slick-theme.css";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react"; // useRef 추가
import RestaruantList from "./RestaruantList";

const Wrapper = styled.div`
  margin: 0 auto;
  padding-top: 15vh;
  padding-left: 10vw;
  padding-right: 10vw;
  font-size: 2vh;
`;

const Title = styled.div`
  color: #c35050;
  font-weight: bold;
`;

const Category = styled.h4`
  color: #000;

  &.active {
    color: #c35050;
    font-weight: bold;
  }
`;
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function TypeSlider() {
  const [category, setCategory] = useState("전체");
  const sliderRef = useRef(null); // useRef 추가

  const settings = {
    className: "center",
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    slidesToScroll: 1, // 한번에 스크롤되는 슬라이드의 수를 지정하는 속성 
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current) => {
      // 변경: 슬라이드가 변경될 때 실행되는 콜백 추가
      const categoryList = ["전체", "한식", "일식", "중식", "양식", "디저트"];
      setCategory(categoryList[current]); // 현재 슬라이드의 카테고리 선택
    },
  };

  const onCategory = (category) => {
    setCategory(category);
    let index;
    if (category === "전체") {
      index = 0; // 전체 카테고리 선택 시 첫 번째 슬라이드로 이동
    } else {
      index = ["한식", "일식", "중식", "양식", "디저트"].indexOf(category) + 1; // 선택한 카테고리의 인덱스 + 1 (첫 번째는 전체이므로)
    }
    sliderRef.current.slickGoTo(index); // 해당 카테고리가 중앙에 오도록 슬라이드 이동
  };

  return (
    <Wrapper>
      <Title>카테고리</Title>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}> {/* sliderRef 추가 */}
          <div onClick={() => onCategory("전체")}>
            <Category className={category === "전체" ? "active" : ""}>
              전체
            </Category>
          </div>
          <div onClick={() => onCategory("한식")}>
            <Category className={category === "한식" ? "active" : ""}>
              한식
            </Category>
          </div>
          <div onClick={() => onCategory("일식")}>
            <Category className={category === "일식" ? "active" : ""}>
              일식
            </Category>
          </div>
          <div onClick={() => onCategory("중식")}>
            <Category className={category === "중식" ? "active" : ""}>
              중식
            </Category>
          </div>
          <div onClick={() => onCategory("양식")}>
            <Category className={category === "양식" ? "active" : ""}>
              양식
            </Category>
          </div>
          <div onClick={() => onCategory("디저트")}>
            <Category className={category === "디저트" ? "active" : ""}>
              디저트
            </Category>
          </div>
        </Slider>
      </div>
      <div>
        {category && <RestaruantList key={category} type={category} />}
      </div>
    </Wrapper>
  );
}

export default TypeSlider;
