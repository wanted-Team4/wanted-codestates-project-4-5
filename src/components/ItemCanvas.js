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

const Canvas = styled.canvas`
  width: 680px;
  height: 760px;
  background-size: 680px 760px;
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
  const [data, , setData] = useInput({ x: 0, y: 0, width: 0, height: 0 });
  const [text, setText] = useState("");

  const [startXY, setStartXY] = useState([0, 0]);
  let endXY = [0, 0];

  const [painting, setPainting] = useState(false);
  const pixelData = useSelector((state) => state.Coordinate.coordinate);
  const dispatch = useDispatch();

  const canvasRef = useRef(null);
  let ctx = useRef(null);
  if (canvasRef.current) {
    ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.5;
  }
  useEffect(() => {
    if (painting) ctx.beginPath();
    if (!(data.width <= 30 || data.height <= 30))
      dispatch(addCoordinateAction(data));
    setText(text);
  }, [data, painting]);

  const startPainting = ({ nativeEvent }) => {
    setPainting(true);
    setStartXY([nativeEvent.offsetX, nativeEvent.offsetY]);
  };

  const stopPainting = ({ nativeEvent }) => {
    setPainting(false);
    endXY = [nativeEvent.offsetX, nativeEvent.offsetY];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.closePath();
    setData({
      x: startXY[0],
      y: startXY[1],
      width: endXY[0] - startXY[0],
      height: endXY[1] - startXY[1],
    });
    let confirmText = prompt();
    return setText(confirmText);
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
  };
  const onRemove = (type) => {
    if (type === "Toggle") {
      dispatch(deleteCoordinateAction());
    }
  };

  return (
    <section>
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
      {pixelData.map((element, index) => (
        <ItemBox
          key={index}
          name={element.text}
          x={element.x}
          y={element.y}
          w={element.width}
          h={element.height}
          onRemove={onRemove}
        ></ItemBox>
      ))}
    </section>
  );
};

export default ItemCanvas;
