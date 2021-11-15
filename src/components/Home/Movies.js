import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styled from "styled-components";
import { mainWeight } from "../../style/GlobalStyled";
import "../../style/swiper.css";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 35px;
  font-weight: ${mainWeight.titleWeight};
  margin: 80px 0 30px 0;
`;

const CoverImg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
`;

export const Movies = ({ movieData, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Swiper
        module={[Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        navigation
      >
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to="#">
              <CoverImg
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${play.backdrop_path})`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
