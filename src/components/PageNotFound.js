import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-top: 200px;
    font-size: 50px;
    font-weight: 600;
    color: crimson;
  }
  h4 {
    margin: 30px 0 30px 0;
    font-size: 20px;
  }
  a {
    color: skyblue;
    text-decoration: underline;
    &:hover {
      color: crimson;
    }
  }
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <h3>4🤔4 ERR🤔R</h3>
      <h4>페이지를 찾을수 없습니다..!</h4>
      <p>
        <Link to="/">홈으로 가기</Link>
      </p>
    </Wrap>
  );
};
