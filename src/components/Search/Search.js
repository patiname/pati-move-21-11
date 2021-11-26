import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Container } from "../Container";
import { LoaderPage } from "../Loader";
import { PageNotFound } from "../PageNotFound";
import { PageTitle } from "../PageTitle";

const Form = styled.form`
  margin-top: 120px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  height: 60px;
  border: 1px solid #555;
  box-sizing: border-box;
  padding: 10px 20px;
  &::placeholder {
    font-size: 18px;
  }
  font-size: 18px;
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 30px;
  column-gap: 30px;
  margin-top: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Con = styled.div``;

const ConBg = styled.div`
  height: 180px;
`;

const Title = styled.h3`
  margin-top: 10px;
`;

export const Search = () => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);
  const [noSearch, setNoSearch] = useState("");

  const { register, getValues, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async () => {
    const { term } = getValues();
    setLoading(true);

    try {
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setNoSearch("검색 결과가 없서용....!🤪");
      } else {
        setNoSearch("");
        setSearch(results);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  console.log(search);

  return (
    <div>
      <PageTitle title="영화검색" />

      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("term", {
              required: true,
            })}
            type="text"
            placeholder="검색..."
          />
        </Form>

        {error ? (
          <PageNotFound />
        ) : (
          <div>
            {loading ? (
              <LoaderPage />
            ) : (
              <ConWrap>
                {noSearch === "" && search ? (
                  search.map((searchData) => (
                    <Link key={searchData.id} to={`/detail/${searchData.id}`}>
                      <Con>
                        <ConBg
                          style={{
                            background: `url(${
                              searchData.backdrop_path
                                ? `https://image.tmdb.org/t/p/original${searchData.backdrop_path}`
                                : "https://blog.jounsaram.net/wp-content/themes/easymag/images/no-image.png"
                            }) center / cover`,
                          }}
                        />
                        <Title>{searchData.title}</Title>
                      </Con>
                    </Link>
                  ))
                ) : (
                  <h3>{noSearch}</h3>
                )}
              </ConWrap>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};
