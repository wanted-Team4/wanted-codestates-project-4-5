import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ItemBox from './ItemBox';
import { useSelector, useDispatch  } from 'react-redux';
import { addCoordinateAction } from '../actions/coordinate';
import useInput from '../hooks/useInput';
import Background from '../images/fashion-unsplash.jpg'

const Canvas = styled.canvas`
  width: 680px;
  height: 760px;
  background-size: 680px 760px; 
  background-image: url(${Background});
  border: 1px solid black;
`;

const ItemCanvas = () => {
  const [color, setColor] = useState('rgba(238, 75, 43, 0.2)');
  const [data,, setData] = useInput({x:0, y:0, width:0, height:0});
  const [startXY, setStartXY] = useState([0, 0]);
  let endXY = [0, 0];
  const [painting, setPainting] = useState(false);
  const pixelData = useSelector((state) => state.Coordinate.coordinate);
  const dispatch = useDispatch();

  const canvasRef = useRef(null);
  let ctx = useRef(null);
  if(canvasRef.current){
    ctx = canvasRef.current.getContext('2d');
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.5;
  }
  
  useEffect(() => {
    if(painting)
      ctx.beginPath();
    if(!(data.width <= 30 || data.height <= 30))
      dispatch(addCoordinateAction(data));
  }, [data, painting]);

  const startPainting = ({ nativeEvent }) => {
    setPainting(true);
    setStartXY([nativeEvent.offsetX, nativeEvent.offsetY]);
  };

  const stopPainting = ({ nativeEvent }) => {
    if(!painting) return;

    setPainting(false);
    endXY = [nativeEvent.offsetX, nativeEvent.offsetY];
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.closePath();
    setData({
      x: startXY[0] + 9 , 
      y: startXY[1] + 9 , 
      width: endXY[0] - startXY[0] - 5, 
      height: endXY[1] - startXY[1],
    })
  };

  const onMouseMove = ({ nativeEvent }) => {
    const x = nativeEvent.offsetX;
    const y = nativeEvent.offsetY;
    if (!painting) {
      return;
    } else {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fillRect(startXY[0], startXY[1], x-startXY[0], y-startXY[1]);
      ctx.stroke();
    }

    // width, height 초과 시
    if (x >= 672 || y >= 752) {
      setPainting(false);
      endXY = [nativeEvent.offsetX, nativeEvent.offsetY];
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.closePath();
      setData({
        x: startXY[0] + 9, 
        y: startXY[1] + 9 , 
        width: x >= 672 ? 676 - startXY[0] : endXY[0] - startXY[0], 
        height: x >= 672 ? endXY[1] - startXY[1] : 760 - startXY[1],
      })
    }    
  };

  return (
    <>
      {pixelData.map((element, index) => 
        <ItemBox key={index} name="watch" x={element.x} y={element.y} w={element.width} h={element.height}></ItemBox>
      )} 
      <Canvas
        ref={canvasRef}
        width={680}
        height={760}
        onMouseMove={onMouseMove}
        onMouseDown={startPainting}
        onMouseUp={stopPainting}
      >
      </Canvas>
    </>
  );
};

export default ItemCanvas;