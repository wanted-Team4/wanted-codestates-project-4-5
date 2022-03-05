import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ItemBox from "./ItemBox";
import { useSelector, useDispatch } from "react-redux";
import {
  addCoordinateAction,
  deleteCoordinateAction,
  updateCoordinateAction,
} from "../actions/coordinate";
import useInput from "../hooks/useInput";
import { bindActionCreators } from "redux";
import Background from "../images/fashion-unsplash.jpg";
import shortid from "shortid";

const Wrraper = styled.section`
  display: flex;
  width: 100vw;
  min-height 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Canvas = styled.canvas`
  width: 680px;
  height: 760px;
  background-size: 680px 760px;
  background-image: url(${Background});
  border: none;
`;

const Bord = styled.ul`
  align-self: flex-start;
  list-style: none;
  text-align: center;
  margin-top: 59px;
  background-color: #dcdde1;
  padding: 5px 0px 10px 0px;
  width: 150px;
  height: auto;
  li {
    padding-top: 10px;
  }
  button {
    border: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const ItemCanvas = () => {
  const [color, setColor] = useState("rgba(238, 75, 43, 0.2)");
  const [data, , setData] = useInput({}); // Box생성 데이터
  const [startXY, setStartXY] = useState([0, 0]); // 그리기 시작 지점
  const [painting, setPainting] = useState(false); // 그리기 여부 판단
  let endXY = [0, 0]; // 그리기 종료 지점
  let offsetLeft = 0; // Canvas left 위치
  let offsetTop = 0; // Canvas Top 위치

  const [, setUpdate] = useState();
  const forceUpdate = useCallback(() => setUpdate({}, []));

  const pixelData = useSelector((state) => state.Coordinate.coordinate);
  const dispatch = useDispatch();
  console.log(pixelData);
  // 브라우저 화면 크기
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 브라우저 화면 크기 조정
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // 브라우저 화면크기변화 감지
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // canvas 도화지 선언
  const canvasRef = useRef(null);
  let ctx = useRef(null);
  // 도형그리기 펜 설정
  if (canvasRef.current) {
    ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = color; // 윤곽선 색
    ctx.fillStyle = color; //  채우기 색
    ctx.lineWidth = 115; // 선 두께
    ctx.lineCap = "round";
    offsetLeft = canvasRef.current.offsetLeft;
    offsetTop = canvasRef.current.offsetTop;
  }

  useEffect(() => {
    if (!data.id) return;
    if (painting) ctx.beginPath(); // 그리기 시작지점 초기화
    // 박스가 특정크기 이상이면 생성
    if (!(data.width <= 30 || data.height <= 30)) {
      dispatch(addCoordinateAction(data));
    }
    setData({});
  }, [data, painting]);

  // 그리기 시작함수
  const startPainting = ({ nativeEvent }) => {
    setPainting(true);
    // 시작점 저장
    setStartXY([nativeEvent.offsetX, nativeEvent.offsetY]);
  };

  // 그리기 종료함수
  const stopPainting = ({ nativeEvent }) => {
    if (!painting) return;

    setPainting(false);
    endXY = [nativeEvent.offsetX, nativeEvent.offsetY];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let confirmText = prompt("영역의 이름은 무엇인가요?");

    setData({
      x: startXY[0],
      y: startXY[1],
      width: endXY[0] - startXY[0] - 5,
      height: endXY[1] - startXY[1],
      id: shortid.generate(),
      text: confirmText,
    });
  };

  // 그리기 함수
  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!painting) {
      return;
    } else {
      // 그리는 중일 때
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillRect(startXY[0], startXY[1], x - startXY[0], y - startXY[1]); // 사각형 생성(x, y, w, h)
      ctx.stroke(); // 그리기
    }

    // width, height 초과 시 그리기 종료
    if (x >= 672 || y >= 752) {
      setPainting(false);
      endXY = [nativeEvent.offsetX, nativeEvent.offsetY];
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.closePath();

      let confirmText = prompt("영역의 이름은 무엇인가요?");
      setData({
        x: startXY[0],
        y: startXY[1],
        width: x >= 672 ? 676 - startXY[0] : endXY[0] - startXY[0],
        height: x >= 672 ? endXY[1] - startXY[1] : 760 - startXY[1],
        id: shortid.generate(),
        text: confirmText,
      });
    }
  };

  const deleteItem = (itemId) => {
    dispatch(deleteCoordinateAction(itemId));
    forceUpdate(); // 강제 랜더링
  };

  const updateItemNamve = (itemId) => {
    let confirmText = prompt("수정할 이름이 무엇인가요?");
    dispatch(updateCoordinateAction(itemId, confirmText));
    forceUpdate(); // 강제 랜더링
  };

  return (
    <Wrraper>
      <Bord>
        <span>Items</span>
        {pixelData.map((element) => {
          return (
            <li>
              {element.text}
              <button onClick={() => updateItemNamve(element.id)}>✂️</button>
              <button onClick={() => deleteItem(element.id)}>🗑️</button>
            </li>
          );
        })}
      </Bord>
      {pixelData.map((element, index) => (
        <ItemBox
          key={index}
          id={element.id}
          name={element.text}
          x={element.x}
          y={element.y}
          w={element.width}
          h={element.height}
          offsetLeft={offsetLeft}
          offsetTop={offsetTop}
        ></ItemBox>
      ))}
      <Canvas
        ref={canvasRef}
        width={680}
        height={760}
        onMouseMove={onMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
      ></Canvas>
    </Wrraper>
  );
};

export default ItemCanvas;
