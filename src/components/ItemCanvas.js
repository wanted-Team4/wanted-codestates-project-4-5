import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ItemBox from "./ItemBox";
import { useSelector, useDispatch } from "react-redux";
import {
  addCoordinateAction,
  deleteCoordinateAction,
} from "../actions/coordinate";
import useInput from "../hooks/useInput";
import { bindActionCreators } from "redux";
import Background from "../images/fashion-unsplash.jpg";
import shortid from "shortid";

const Section = styled.section`
  /* display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; */
`;

const Canvas = styled.canvas`
  width: 680px;
  height: 760px;
  background-size: 680px 760px;
  background-image: url(${Background});
  border: 1px solid black;
`;

const Bord = styled.div`
  position: absolute;
  top: 0;
  width: auto;
  height: auto;
  background-color: #dcdde1;
  button {
    margin-left: auto;
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
  let endXY = [0, 0]; // 그리기 종료 지점
  const [painting, setPainting] = useState(false); // 그리기 여부 판단
  const pixelData = useSelector((state) => state.Coordinate.coordinate);
  const dispatch = useDispatch();

  // canvas 도화지 선언
  const canvasRef = useRef(null);
  let ctx = useRef(null);
  // 도형그리기 펜 설정
  if (canvasRef.current) {
    ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = color; // 윤곽선 색
    ctx.fillStyle = color; //  채우기 색
    ctx.lineWidth = 2.5; // 선 두께
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

  const startPainting = ({ nativeEvent }) => {
    setPainting(true);
    setStartXY([nativeEvent.offsetX, nativeEvent.offsetY]);
  };

  const stopPainting = ({ nativeEvent }) => {
    if (!painting) return;

    setPainting(false);
    endXY = [nativeEvent.offsetX, nativeEvent.offsetY];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    let confirmText = prompt("영역의 이름은 무엇인가요?");

    setData({
      x: startXY[0] + 9,
      y: startXY[1] + 9,
      width: endXY[0] - startXY[0] - 5,
      height: endXY[1] - startXY[1],
      id: shortid.generate(),
      text: confirmText,
    });
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;

    if (!painting) {
      return;
    } else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillRect(startXY[0], startXY[1], x - startXY[0], y - startXY[1]);
      ctx.stroke();
    }

    // width, height 초과 시
    if (x >= 672 || y >= 752) {
      setPainting(false);
      endXY = [nativeEvent.offsetX, nativeEvent.offsetY];
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.closePath();
      let confirmText = prompt("영역의 이름은 무엇인가요?");
      setData({
        x: startXY[0] + 9,
        y: startXY[1] + 9,
        width: x >= 672 ? 676 - startXY[0] : endXY[0] - startXY[0],
        height: x >= 672 ? endXY[1] - startXY[1] : 760 - startXY[1],
        id: shortid.generate(),
        text: confirmText,
      });
    }
  };
  const onRemove = (type) => {
    if (type === "Toggle") {
      dispatch(deleteCoordinateAction());
    }
  };

  return (
    <Section>
      {pixelData.map((element, index) => (
        <ItemBox
          key={index}
          id={element.id}
          name={element.text}
          x={element.x}
          y={element.y}
          w={element.width}
          h={element.height}
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
      <Bord>
        {pixelData.map((element) => {
          return (
            <ul key={element.id}>
              <li>
                {element.text}
                <button>x</button>
              </li>
            </ul>
          );
        })}
      </Bord>
    </Section>
  );
};

export default ItemCanvas;
