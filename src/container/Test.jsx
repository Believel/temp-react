import React, { useState, useRef, useImperativeHandle, useEffect } from 'react';

import { get, set } from "lodash";
import { Button} from "antd";

const Child =React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        aa: () => {
            console.log('调用了子级组件中的aa方法啦');
        }
    }))
    return (
        <div>child</div>
    )
})
export default () => {
    const [current, setCurrent] = useState(0);
    const parRef = useRef(null)
    const handleCurrent = () => {
        setCurrent(current + 1);
        // !这此处调用子组件中的方法是不行的！因为此时子组件的DOM还没有渲染
        // parRef.current.aa();
        
    }
    // !练习lodash方法
    const test = () => {
        let object = {a: [{b: {c: 3}}]};
        set(object, "a[0].b.c", 4);
        console.log(get(object, "a"))
    }
    useEffect(() => {
        if (current !== 0) {
            parRef.current.aa()
        }
        test();
    }, [current])
    return (
        <div>
            <Button onClick={handleCurrent} type="default">改变current的值</Button>
            {
                current === 0 ?
                (<p>哈哈哈哈current{current}</p>):
                <Child ref={parRef}/>
            }
        </div>
    )
}