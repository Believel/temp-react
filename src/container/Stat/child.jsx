import React, { memo } from "react";

const Child = ( { count, handleClick}) => {
  return <div onClick={handleClick}>{count}</div>
};
// 通过浅比较props的形式props相同的情况下不会触发重新渲染
export default memo(Child);