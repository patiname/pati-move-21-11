// import styled, { keyframes } from "styled-components";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const loadingAni = keyframes`
//     100%{
//         transform:rotate(360deg)
//     }
// `;

// const Loading = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 10px solid gold;
//   border-radius: 50%;
//   border-color: gold transparent transparent transparent;
//   animation: ${loadingAni} 1s infinite;
// `;

export const LoaderPage = () => {
  return (
    <Wrap>
      {/* <Loading></Loading> */}
      <Loader type="ThreeDots" color="gold" height={100} width={100} />
    </Wrap>
  );
};
