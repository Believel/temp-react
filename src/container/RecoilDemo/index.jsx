import React from "react";
import {
    RecoilRoot,
    useRecoilState, // 可以取到antom中的值，以及setter
    useRecoilValue, // 只获取状态
    useSetRecoilState // 只获取setter函数，如果只使用了这个函数，状态变化不会导致组件重新渲染
} from "recoil";
import { nameState, lengthState } from "./store";
import CharacterCount from "./component/CharacterCount";
// useRecoilState
const NameInput = () => {
    const [name, setName] = useRecoilState(nameState);
    const onChange = (event) => {
     setName(event.target.value);
    };
    return <>
     <input type="text" value={name} onChange={onChange} />
     <div>Name: {name}</div>
    </>;
  }
  
  // useRecoilValue
  const SomeOtherComponentWithName = () => {
    const name = useRecoilValue(nameState);
    return <div>{name}</div>;
  }
  
  // useSetRecoilState  
  const SomeOtherComponentThatSetsName = () => {
    const setName = useSetRecoilState(nameState);
    return <button onClick={() => setName('Jon Doe')}>Set Name</button>;
  }

export default () => {
    return (
        <div>
            <h1>React内部状态管理库 - Recoil</h1>
            <RecoilRoot>
                <CharacterCount/>
                <NameInput/>
                <SomeOtherComponentWithName/>
                <SomeOtherComponentThatSetsName/>
            </RecoilRoot>
        </div>
    )
}