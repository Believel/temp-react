import React, { useState, useRef, useEffect } from 'react';
import { Button} from "antd";
// hooks的坑
export default () => {
  const [count, setCount] = useState(0);
  // 使用ref 保存
  const ref = useRef(null);
  // 每次渲染后更新下值
  useEffect(() => {
    ref.current = count
  }, [count])
  const handleClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(ref.current) // 3, 3, 3
    }, 2000)
  }
  return (
  <div>
    <div>count: {count}</div>
    <Button onClick={handleClick}>点击</Button>
  </div>
  )
}