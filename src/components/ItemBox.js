import { useEffect, useState } from "react";
import styled from "styled-components";import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  configCoordinateAction,
} from "../actions/coordinate";
import useInput from "../hooks/useInput";

const Itemdiv = styled.div`
  top: ${(props) => props.y + props.offsetTop}px;
  left: ${(props) => props.x + props.offsetLeft}px;
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: rgba(0, 128, 0, 0.3);
  position: fixed;
  padding-left: 5px;
  display: flex;
`;

const Draggable = styled.div`
  width: 90%;
  height: 90%;
`

const Resizable = styled.div`
  background: rgba(1, 1, 1, 0.5);
  cursor: nw-resize;
  height: 10px;
  width: 10px;
  margin-top: auto;
  margin-left: auto; 
`;

function ItemBox(props) {
  const [isConfig, setIsConfig] = useState(false); // 드래그 여부 판단
  const [startXY, setStartXY] = useState([0, 0]); // 드래그 시작 지점
  const [initialPos, setInitialPos] = useState([0, 0]);
  const [initialSize, setInitialSize] = useState([0, 0]);
  const [data, , setData] = useInput({
    x: props.x,
    y: props.y,
    width: props.w,
    height: props.h,
    id: props.id,
    text: props.name,
  }); // Box생성 데이터
  const dispatch = useDispatch();
  const itemRef = useRef();
  const resizeRef = useRef();
  const startMove = (event) => {
    event.stopPropagation();
    setStartXY([event.pageX, event.pageY]);
  }

  const itemMove = (event) => {
    
  }

  const stopMove = (event) => {
    setIsConfig(true);
    const moveX = (event.pageX - startXY[0]) + itemRef.current.offsetLeft;
    const moveY = (event.pageY - startXY[1]) + itemRef.current.offsetTop;
    itemRef.current.style.left = `${moveX}px`;
    itemRef.current.style.top = `${moveY}px`;
    setData({...data, x: moveX, y: moveY});
  }
  
  const initial = (e) => {
    setIsConfig(true);
    setInitialPos([e.pageX, e.pageY]);
    setInitialSize([itemRef.current.offsetWidth, itemRef.current.offsetTop]);
  }

  const resize = (e) => {
    const moveX = (e.pageX - initialPos[0]) + initialSize[0];
    const moveY = (e.pageY - initialPos[1]) + initialSize[1];
    itemRef.current.style.width = `${moveX}px`;
    itemRef.current.style.height = `${moveY}px`;
  }
  
  const stopResize = (e) => {
    setData({...data, width: itemRef.current.style.width, height: itemRef.current.style.height});
  } 

  useEffect(() => {
    if(isConfig){
      dispatch(configCoordinateAction(data));
    }
  }, [data]);

  return (
    <>
      <Itemdiv 
        ref={itemRef}
        offsetLeft={props.offsetLeft} 
        offsetTop={props.offsetTop} 
        x={props.x} 
        y={props.y} 
        w={props.w} 
        h={props.h}
      >
        <Draggable
          draggable={true}
          onDragStart={startMove}
          onDragOver={itemMove}
          onDragEnd={stopMove}
        >{props.name}</Draggable>
        <Resizable
        ref={resizeRef} 
        draggable = 'true' 
        onDrag = {resize} 
        onDragStart = {initial}
        onDragEnd = {stopResize} 
        offsetLeft={props.offsetLeft} 
        offsetTop={props.offsetTop} 
        x={props.x} 
        y={props.y} 
        w={props.w} 
        h={props.h}
      />
      </Itemdiv>
      
    </>
  );
}
export default ItemBox;

const Itemdiv = styled.div`
  top: ${(props) => props.y + props.offsetTop}px;
  left: ${(props) => props.x + props.offsetLeft}px;
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  background-color: rgba(0, 128, 0, 0.3);
  position: fixed;
  padding-left: 5px;
  display: flex;
`;

function ItemBox(props) {
  return (
    <>
      <Itemdiv 
        offsetLeft={props.offsetLeft} 
        offsetTop={props.offsetTop} 
        x={props.x} 
        y={props.y} 
        w={props.w} 
        h={props.h}
      >
        {props.name}
      </Itemdiv>
    </>
  );
}
export default ItemBox;
