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
          <ItemsInnerBox>
            <ItemsApiDiv>
              <ItemsValueOne>{`#${attributes[0].style}`}</ItemsValueOne>
              <ItemsNoValueOne>style</ItemsNoValueOne>
            </ItemsApiDiv>
            <ItemsApiDiv>
              <ItemsValueOne>{`#${attributes[1].season}`}</ItemsValueOne>
              <ItemsNoValueOne>season</ItemsNoValueOne>
            </ItemsApiDiv>
            <ItemsApiDiv>
              <ItemsValueOne>{`#${attributes[2].occasion}`}</ItemsValueOne>
              <ItemsNoValueOne>occasion</ItemsNoValueOne>
            </ItemsApiDiv>
          </ItemsInnerBox>
          <ItemsInnerBox>
            <ItemsApiDiv>
              <ItemsValueTwo>{`#${attributes[3].fabric}`}</ItemsValueTwo>
              <ItemsNoValueTwo>fabric</ItemsNoValueTwo>
            </ItemsApiDiv>
            <ItemsApiDiv>
              <ItemsValueTwo>{`#${attributes[4].sense}`}</ItemsValueTwo>
              <ItemsNoValueTwo>sense</ItemsNoValueTwo>
            </ItemsApiDiv>
            <ItemsApiDiv>
              <ItemsValueTwo>{`#${attributes[5].pattern}`}</ItemsValueTwo>
              <ItemsNoValueTwo>pattern</ItemsNoValueTwo>
            </ItemsApiDiv>
          </ItemsInnerBox>
        </ItemsBoxTwo>
      </ItemsContainer>
    </Link>
  );
};
const ItemsContainer = styled.div`
  // 메인 아이템 스타일 코드
  width: 18vw;
  height: 46vw;
  margin-right: 2em;
  margin-top: 0.5em;
  position: absolute;
  box-shadow: 5px 5px 7px 0px rgba(217, 217, 217, 1);
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
  margin: 0;
  width: 18vw;
  height: 12vw;
  padding: 1em;
  box-sizing: border-box;
`;
const ItemsApiDiv = styled.div`
  // item span 감싸줄 div
`;
const ItemsInnerBox = styled.div`
  // item span 감싸줄 div
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5em;
`;
const ItemsValueOne = styled.div`
  // item api 값들어갈 div
  color: #d070fb;
  display: flex;
  font-weight: bold;
  font-size: 1.1em;
`;
const ItemsNoValueOne = styled.div`
  // item api 아닌값들어갈 div
`;
const ItemsValueTwo = styled.div`
  // item api 값들어갈 div
  color: #d070fb;
  font-weight: bold;
  font-size: 1.1em;
`;
const ItemsNoValueTwo = styled.div`
  // item api 아닌값들어갈 div
`;

export default Items;
