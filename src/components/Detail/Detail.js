import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";
import { useEffect } from "react";
import { useParams } from "react-router";

import { useState } from "react";
import { PageNotFound } from "../PageNotFound";
import { Container } from "../Container";
import styled from "styled-components";
import { LoaderPage } from "../Loader";
import { mainColor, mainWeight, moSize } from "../../style/GlobalStyled";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 60px;
  }
`;

const CoverImg = styled.div`
  width: 50%;
  height: 80vh;
  background-size: cover;
  background-position: top;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 70vh;
  }
`;

const ConWrap = styled.div`
  width: 50%;
  margin-left: 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    font-size: 36px;
  }
`;

const Info = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const Desc = styled.div`
  line-height: 2.2rem;
  font-size: 20px;
  opacity: 0.7;
  margin-top: 50px;
  font-weight: 300;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const Button = styled.button`
  all: unset;
  padding: 20px 50px;
  border: 1px solid #fff;
  font-weight: ${mainWeight.titleWeight};
  margin-top: 30px;
  cursor: pointer;
  transition: 0.2s;
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
    padding: 15px 40px;
  }
`;

const VideoWrap = styled.div`
  height: 100vh;
  padding: 200px 0;
  @media screen and (max-width: 500px) {
    padding: 80px 0;
  }
`;

const Video = styled.iframe`
  width: 100%;
  height: 80vh;
`;

export const Detail = () => {
  // const location = useLocation();
  // console.log(location);
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();
  const [loading, setLoading] = useState(true);

  const [errorPage, setErrorPage] = useState(false);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        // console.log(await movieApi.detail(370172));
        const { data } = await movieApi.detail(id);
        setMovieData(data);

        // console.log(await movieApi.video(id));
        const {
          data: { results },
        } = await movieApi.video(id);
        setVideoData(results[0]);
        // console.log(results[0].key);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrorPage(true);
      }
    };
    movieDetail();
  }, [id]);

  const onClickVideo = () => {
    const videoWrapTop = document.querySelector(".video_wrap").offsetTop;
    // console.log(videoWrapTop);

    window.scrollTo({
      top: videoWrapTop,
      left: 0,
      behavior: "smooth",
    });
  };

  // console.log(movieData);
  // console.log(videoData);

  return (
    <div>
      {errorPage ? (
        <PageNotFound />
      ) : (
        <>
          {loading ? (
            <LoaderPage />
          ) : (
            <div>
              {movieData && (
                <>
                  <PageTitle title="영화리뷰" />
                  <Container>
                    <Wrap>
                      <CoverImg
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.poster_path})`,
                        }}
                      />
                      <ConWrap>
                        <Title>{movieData.title}</Title>
                        <Info>{movieData.release_date}</Info>
                        <Info>
                          {movieData.genres.map((genre) => genre.name + ", ")}
                        </Info>
                        <Info>{movieData.runtime} 분</Info>
                        <Desc>{movieData.overview}</Desc>
                        <Button onClick={onClickVideo}>
                          예고편 보기 <span>&rarr;</span>
                        </Button>
                      </ConWrap>
                    </Wrap>
                  </Container>
                </>
              )}

              {videoData && (
                <Container>
                  <VideoWrap className="video_wrap">
                    <Video
                      src={`https://www.youtube.com/embed/${videoData.key}`}
                    />
                  </VideoWrap>
                </Container>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
