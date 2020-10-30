import { useState, useEffect} from "react";
// 自定义 Hook 的特点：
// 1. 命名格式为    `useXXX`的函数
// 2. 本质上： 内部通过使用 React 自带的一些 Hook (例如 useState 和 useEffect) 来实现某些通用的逻辑
// 3. 哪些地方会用到：DOM副作用修改/监听、动画、请求、表单操作、数据存储等等
function useBodyScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(null);
    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [])

    return scrollPosition;
}

export default useBodyScrollPosition