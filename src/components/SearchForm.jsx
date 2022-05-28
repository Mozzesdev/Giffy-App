import React, { memo, useState } from "react";
import styled from "styled-components";
import { useLocation } from "wouter";
import { useGif } from "../context/gifContext";
import getAutoComplete from "../utils/getAutoComplete";
import AutoComplete from "./AutoComplete";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const { autoComplete, setAutoComplete } = useGif()

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
    setKeyword("");
    setAutoComplete([]);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
    if (keyword.length > 0) {
      setAutoComplete([{ name: e.target.value }]);
      getAutoComplete(e.target.value).then((data) => {
        setAutoComplete([...data.data]);
      });
    } else {
      setAutoComplete([]);
    }
  };

  return (
    <>
      <Container onClick={(e) => e.stopPropagation()}>
        <FormularioDeBusqueda onSubmit={handleSubmit}>
          <InputForm
            onFocus={handleChange}
            type="text"
            placeholder="Search a gif here..."
            value={keyword}
            onChange={handleChange}
          />
          <SearchButton type="submit">Search</SearchButton>
        </FormularioDeBusqueda>
        {autoComplete && (
          <AutoComplete
            item={autoComplete}
            to={pushLocation}
            setAutoComplete={setAutoComplete}
            setKeyword={setKeyword}
          />
        )}
      </Container>
    </>
  );
};

export default memo(SearchForm);

const FormularioDeBusqueda = styled.form`
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 800px) {
    height: 30px;
  }
  @media (max-width: 350px) {
    height: 28px;
    font-size: 12px;
  }
`;
const SearchButton = styled.button`
  border: none;
  height: 100%;
  border-top-right-radius: 2px;
  cursor: pointer;
  border-bottom-right-radius: 2px;
  color: #fff;
  font-family: "Cascadia Code", sans-serif;
  font-size: 13px;
  padding: 0 10px;
  text-transform: uppercase;
  background-color: #8827f1;
  margin-left: 2px;
  transition: ease all 0.3s;
  :hover {
    background-color: #741dd1;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 350px) {
    width: 70px;
    font-size: 12px;
    padding: 0 2px;
  }
`;

const InputForm = styled.input`
  height: 100%;
  padding: 0 0 0 10px;
  background-color: #fcfcfc;
  font-family: "Cascadia Code", sans-serif;
  border: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  font-size: 13px;
  color: #3d3d3d;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    font-size: 13px;
    color: #3d3d3d;
    @media (max-width: 350px) {
      font-size: 13px;
    }
  }
  @media (max-width: 350px) {
    width: 130px;
    font-size: 12px;
    padding-left: 7px;
  }
`;

const Container = styled.div`
  max-width: 300px;
  margin: 40px auto;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
`;
