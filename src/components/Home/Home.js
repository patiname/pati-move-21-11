import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";

import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";

const Wrap = styled.div``;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [upComming, setUpComming] = useState();
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

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재 상영 영화", nowPlay);
  // console.log("개봉 예정 영화", upComming);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Wrap>{nowPlay && <MainBanner data={nowPlay} num={movieNum} />}</Wrap>
      )}
    </>
  );
};
