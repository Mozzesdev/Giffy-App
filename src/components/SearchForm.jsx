import React, { memo, useState } from "react";
import styled from "styled-components";
import { useLocation } from "wouter";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <FormularioDeBusqueda onSubmit={handleSubmit}>
      <SearchButton type="submit">Buscar</SearchButton>
      <InputForm
        type="text"
        placeholder="Search a gif here..."
        value={keyword}
        onChange={handleChange}
      />
    </FormularioDeBusqueda>
  );
};

export default memo(SearchForm);

const FormularioDeBusqueda = styled.form`
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 40px 0;
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
  border-top-left-radius: 2px;
  cursor: pointer;
  border-bottom-left-radius: 2px;
  color: #fff;
  font-size: 13px;
  padding: 0 10px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #8827f1;
  margin-right: 2px;
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
  border: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  font-size: 13px;
  color: #3d3d3d;
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    font-size: 14px;
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
