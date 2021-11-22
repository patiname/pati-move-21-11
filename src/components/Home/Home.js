import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../Container";
import { LoaderPage } from "../Loader";
import { PageTitle } from "../PageTitle";
import { MainBanner } from "./MainBanner";
import { Movies } from "./Movies";

const Wrap = styled.div``;

const Section = styled.section`
  width: 100%;
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [upComming, setUpComming] = useState();
  const [topRate, setTopRate] = useState();
  const [loading, setLoading] = useState(true);
  const movieNum = 1;

  useEffect(() => {
    const movieData = async () => {
      try {
        //   console.log(await movieApi.nowPlaying());
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        setNowPlay(nowPlaying);

        const {
          data: { results: upComming },
        } = await movieApi.upComming();
        setUpComming(upComming);

        const {
          data: { results: topRated },
        } = await movieApi.topRated();
        setTopRate(topRated);

        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재 상영 영화", nowPlay);
  // console.log("개봉 예정 영화", upComming);

  return (
    <div>
      <PageTitle title="홈" />

      {loading ? (
        <LoaderPage />
      ) : (
        <>
          {nowPlay && (
            <Wrap>
              <MainBanner data={nowPlay} num={movieNum} />

              <Section>
                <Container>
                  <Movies movieData={nowPlay} title="현재 상영 영화" />
                  <Movies movieData={upComming} title="개봉 예정 영화" />
                  <Movies movieData={topRate} title="인기 영화" />
                </Container>
              </Section>
            </Wrap>
          )}
        </>
      )}
    </div>
  );
};
