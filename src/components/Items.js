import React, { useState } from "react";
import styled from "styled-components";

const Items = ({ item }) => {
  const { attributes, image_url, category_names } = item
  const category = category_names[0].slice(3).toUpperCase()
  console.log(attributes[0].style)

  const Link = styled.a`
    text-decoration: none;
    color: black;
    
    :visited{
        color: black;
    }
`;

  return (
    <Link href={image_url} target="_blank">
      <ItemsContainer>
        <ItemsBoxOne>
          <ItemsBoxImg src={image_url}></ItemsBoxImg>
          <ItemsSpan>ITEMS</ItemsSpan>
          <ItemsCategoryTitle>{category}</ItemsCategoryTitle>
        </ItemsBoxOne>
        <ItemsSpan>ATTRIBUTES</ItemsSpan>
        <ItemsBoxTwo>
          <ItemsApiDiv>
            <ItemsValueOne>{`#${attributes[0].style}`}</ItemsValueOne>
            <ItemsValueOne>{`#${attributes[1].season}`}</ItemsValueOne>
            <ItemsValueOne>{`#${attributes[2].occasion}`}</ItemsValueOne>
          </ItemsApiDiv>
          <ItemsNoApiDiv>
            <ItemsNoValueOne>style</ItemsNoValueOne>
            <ItemsNoValueOne>season</ItemsNoValueOne>
            <ItemsNoValueOne>occasion</ItemsNoValueOne>
          </ItemsNoApiDiv>
          <ItemsApiDiv>
            <ItemsValueTwo>{`#${attributes[3].fabric}`}</ItemsValueTwo>
            <ItemsValueTwo>{`#${attributes[4].sense}`}</ItemsValueTwo>
            <ItemsValueTwo>{`#${attributes[5].pattern}`}</ItemsValueTwo>
          </ItemsApiDiv>
          <ItemsNoApiDiv>
            <ItemsNoValueTwo>fabric</ItemsNoValueTwo>
            <ItemsNoValueTwo>sense</ItemsNoValueTwo>
            <ItemsNoValueTwo>pattern</ItemsNoValueTwo>
          </ItemsNoApiDiv>
        </ItemsBoxTwo>
      </ItemsContainer>
    </Link>
  );
};
const ItemsContainer = styled.div`
  // 메인 아이템 스타일 코드
  width: 19vw;
  height: 46vw;
  /* border: 1px solid black; */
  margin-right: 2em;
  margin-top: 0.5em;
`;
const ItemsBoxOne = styled.div`
  // items 1번쨰 박스 코드
  position: relative;
  border-bottom: 1px gray solid;
  width: 100%;
  height: 30.5vw;
`;
const ItemsBoxImg = styled.img`
  //items img 코드
  width: 100%;
  height: 25vw;
`;
const ItemsSpan = styled.div`
  // items span 코드
  font-weight: bold;
  margin: 0.8em;
  font-size: 0.9em;
`;
const ItemsCategoryTitle = styled.div`
  // items 카테고리 네임
  width: 5em;
  height: 20px;
  margin-left: 0.5em;
  color: white;
  text-align: center;
  padding: 0.2em;
  background-color: #8A39E1;
  font-size: 0.9em;
`;
const ItemsBoxTwo = styled.div`
  // items 1번쨰 박스 코드
  position: relative;

  width: 23vw;
  margin: 15px;
  height: 50vw;
`;
const ItemsApiDiv = styled.div`
  // item span 감싸줄 div

  padding: 20px 30px 10px 30px;
`;
const ItemsValueOne = styled.div`
  // item api 값들어갈 div
  color: #d070fb;
  width: 6vw;
  display: inline-block;
`;
const ItemsNoApiDiv = styled.div`
  // item api 아닌 span 감싸는곳
  padding: 20px 30px 10px 30px;
`;
const ItemsNoValueOne = styled.div`
  // item api 아닌값들어갈 div
  width: 6vw;
  display: inline-block;
`;
const ItemsValueTwo = styled.div`
  // item api 값들어갈 div
  color: #d070fb;
  width: 8vw;
  display: inline-block;
`;
const ItemsNoValueTwo = styled.div`
  // item api 아닌값들어갈 div
  width: 8vw;
  display: inline-block;
`;

export default Items;
