import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainColor, mainWeight, moSize } from "../../style/GlobalStyled";

const SMainBanner = styled.section`
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 220px 80px;
  @media screen and (max-width: 500px) {
    padding: 220px 20px;
  }
  position: relative;
`;

const Title = styled.h3`
  max-width: 550px;
  width: 100%;
  font-size: 80px;
  font-weight: ${mainWeight.titleWeight};
  line-height: 1.2em;
  margin-bottom: 25px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {
    font-size: 45px;
    margin-bottom: 15px;
    margin-top: 100px;
  }
`;

const Desc = styled.p`
  max-width: 600px;
  width: 100%;
  font-size: 20px;
  opacity: 0.9;
  line-height: 1.4em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 60vh;
  position: absolute;
  left: 0;
  bottom: 0;
  background: linear-gradient(0deg, black, transparent);
`;

const Button = styled.button`
  all: unset;
  padding: 20px 50px;
  border: 1px solid #fff;
  font-weight: ${mainWeight.titleWeight};
  margin-top: 30px;
  cursor: pointer;
  transition: 0.2s;
  position: relative;
  z-index: 9;
  span {
    transition: 0.2s;
  }
  &:hover {
    background-color: ${mainColor.fontColor};
    color: ${mainColor.bgColor};
    span {
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MoreBanner = styled.section`
  height: ${(props) => props.height};
  background-color: #111;
  margin-top: 100px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ConWrap = styled.div`
  width: 30%;
`;

const MoreTitle = styled.div`
  font-size: 80px;
  font-weight: ${mainWeight.titleWeight};
  line-height: 1.2em;
  margin: 50px 0 30px 0;
`;

const MoreDese = styled.div`
  font-size: 20px;
  opacity: 0.8;
  line-height: 2em;
`;

const CoverBg = styled.div`
  width: 65%;
  background-size: cover;
  background-position: top;
  div {
    padding: 50px;
    float: right;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const MainBanner = ({ data, num }) => {
  const [more, setMore] = useState(0);
  const [moreNum, setMoreNum] = useState(0);

  const onClickMore = () => {
    if (moreNum === 0) {
      setMore("80vh");
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
      setMoreNum(moreNum + 1);
    } else if (moreNum === 1) {
      setMore("0");
      setMoreNum(moreNum - 1);
    }
  };

  const onClickClose = () => {
    setMore("0");
    setMoreNum(moreNum - 1);
  };

  return (
    <div>
      <SMainBanner
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            data[`${num}`].backdrop_path
          })`,
        }}
      >
        <Title>{data[`${num}`].title}</Title>
        <Desc>{data[`${num}`].overview.slice(0, 70) + "..."}</Desc>
        <BlackBg />
        <Button onClick={onClickMore}>더 보기 +</Button>
      </SMainBanner>

      <MoreBanner height={more}>
        <ConWrap>
          <MoreTitle>{data[`${num}`].title}</MoreTitle>
          <MoreDese>{data[`${num}`].overview.slice(0, 250) + "..."}</MoreDese>
        </ConWrap>
        <CoverBg
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              data[`${num}`].backdrop_path
            })`,
          }}
        >
          <div onClick={onClickClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </CoverBg>
      </MoreBanner>
    </div>
  );
};
