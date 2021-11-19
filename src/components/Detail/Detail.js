import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";
import { useEffect } from "react";
import { useParams } from "react-router";

import { useState } from "react";
import { PageNotFound } from "../PageNotFound";
import { Container } from "../Container";
import styled from "styled-components";
import { Loader } from "../Loader";

const Wrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
`;

const CoverImg = styled.div`
  width: 50%;
  height: 80vh;
  background-size: cover;
  background-position: top;
`;

const ConWrap = styled.div`
  width: 50%;
  margin-left: 50px;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Info = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const Desc = styled.div`
  line-height: 2.2rem;
  font-size: 20px;
  opacity: 0.7;
  margin-top: 50px;
  font-weight: 300;
`;

export const Detail = () => {
  // const location = useLocation();
  // console.log(location);
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const [loading, setLoading] = useState(true);

  const [errorPage, setErrorPage] = useState(false);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        // console.log(await movieApi.detail(370172));
        const { data } = await movieApi.detail(id);
        setMovieData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setErrorPage(true);
      }
    };
    movieDetail();
  }, []);

  console.log(movieData);

  return (
    <div>
      {errorPage ? (
        <PageNotFound />
      ) : (
        <>
          {loading ? (
            <Loader />
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
                      </ConWrap>
                    </Wrap>
                  </Container>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
