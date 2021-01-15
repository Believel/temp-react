import React from "react";
import "./style.css";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const Cart = () => {
  const handleDragEnd = (result) => {
    console.log("拖拽结束", result);
  };
  const handleDragStart = (result) => {
    console.log("拖拽开始", result);
  };
  return (
    <div className="cart-container">
      {/* <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className="left">
          <Droppable droppableId="left-title-container">
          </Droppable>
        </div>
      </DragDropContext> */}
    </div>
  )
};

export default Cart;

const arr = [1, 2, 3];
console.log(...arr)