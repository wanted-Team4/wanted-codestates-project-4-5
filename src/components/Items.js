import React, { useState } from "react";
import styled from "styled-components";

const Items = () => {
  const [loding, setLoding] = useState(false);

  return (
    <div>
      {loding === false ? (
        <Skeleton></Skeleton>
      ) : (
        <ItemsContainer>
          <ItemsBoxOne>
            <ItemsBoxImg src="https://static.pxl.ai/problem/images/OP-019.jpg"></ItemsBoxImg>
            <ItemsSpan>ITEMS</ItemsSpan>
            <ItemsCategoryTitle>카테고리</ItemsCategoryTitle>
          </ItemsBoxOne>
          <ItemsSpan>ATTRIBUTES</ItemsSpan>
          <ItemsBoxTwo>
            <ItemsApiDiv>
              <ItemsValueOne>API값</ItemsValueOne>
              <ItemsValueOne>API값</ItemsValueOne>
              <ItemsValueOne>API값</ItemsValueOne>
            </ItemsApiDiv>
            <ItemsNoApiDiv>
              <ItemsNoValueOne>api값아님</ItemsNoValueOne>
              <ItemsNoValueOne>api값아님</ItemsNoValueOne>
              <ItemsNoValueOne>api값아님</ItemsNoValueOne>
            </ItemsNoApiDiv>
            <ItemsApiDiv>
              <ItemsValueTwo>API값</ItemsValueTwo>
              <ItemsValueTwo>API값</ItemsValueTwo>
            </ItemsApiDiv>
            <ItemsNoApiDiv>
              <ItemsNoValueTwo>api값아님</ItemsNoValueTwo>
              <ItemsNoValueTwo>api값아님</ItemsNoValueTwo>
            </ItemsNoApiDiv>
          </ItemsBoxTwo>
        </ItemsContainer>
      )}
    </div>
  );
};
const ItemsContainer = styled.div`
  // 메인 아이템 스타일 코드
  width: 25vw;
  height: 100vw;
`;
const ItemsBoxOne = styled.div`
  // items 1번쨰 박스 코드
  position: relative;
  border-bottom: 1px gray solid;
  width: 23vw;
  margin: 15px;
  height: 43vw;
`;
const ItemsBoxImg = styled.img`
  //items img 코드
  width: 20vw;
  margin: 25px;
  height: 35vw;
`;
const ItemsSpan = styled.span`
  // items span 코드
  font-weight: bold;
  margin-left: 10px;
`;
const ItemsCategoryTitle = styled.div`
  // items 카테고리 네임
  width: 5vw;
  height: 20px;
  color: white;
  text-align: center;
  margin-top: 30px;
  padding: 5px;
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

const Skeleton = styled.div`
//스켈레톤 ui
  width: 300px;
  height: 500px;
  
  background-image:
    linear-gradient( 90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0) 70% ), /* highlight */
    linear-gradient(lightgrey 15px, transparent 0),
    linear-gradient(lightgrey 15px, transparent 0),
    linear-gradient(lightgrey 15px, transparent 0);
  
  background-repeat: repeat-X;
  
  background-position:
    5px 10px,
    5px 10px,
    5px 30px,
    5px 50px;
  
  background-size:
    100px 100px,
    150px 100px,
    150px 100px, 
    150px 100px;    
  animation: shine 1s infinite;
}

@keyframes shine {
  to {
    background-position:
      100% 10px,
      5px 10px,
      5px 30px,
      5px 50px;
  }`;

export default Items;
