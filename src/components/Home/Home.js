import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";

const Wrap = styled.div`
  height: 400vh;
`;

export const Home = () => {
  //   *과제
  //   =>useState를 이용하여 results 저장하고,
  //   useEffect밖으로 변수 호출할수 있도록 만들기
  //   =>upComming도 콘솔로 찍어보기

  const [re, setRe] = useState();

  useEffect(() => {
    const movieData = async () => {
      //   console.log(await movieApi.nowPlaying());
      const {
        data: { results },
      } = await movieApi.nowPlaying();
      //   console.log(results);
      setRe(results);
    };
    movieData();
  }, []);

  console.log("현재 상영 영화", re);

  return <Wrap></Wrap>;
};
