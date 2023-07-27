import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import theme from "../../lib/styles/theme";
import { Input } from "../common";
import { useNavigate } from "react-router-dom";
import { useSearchItemQuery } from "../../hooks/apis/useItemsQuery";

const Search = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
  };
  return (
    <StyledSearch>
      <form onSubmit={handleSubmit}>
        <Input
          w={"250px"}
          h={"40px"}
          value={text}
          placeholder={"상품검색"}
          onChange={onChangeText}
          onKeyDown={handleKeyDown}
        />
        <p className="searchIcon">
          <CiSearch />
        </p>
      </form>
    </StyledSearch>
  );
};

export default Search;

const StyledSearch = styled.div`
  .searchIcon {
    position: absolute;
    top: 10px;
    left: 13px;
    font-size: 1.5rem;
    color: ${theme.mediumGrayColor};
  }
`;
