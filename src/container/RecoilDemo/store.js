import {
    atom,
    selector
} from "recoil";
export const nameState = atom({
    key: 'nameState',
    default: 'ConardLi'
});
export const lengthState = selector({
    key: "lengthState",
    get: ({get}) => {
        const text = get(nameState);
        return text.length;
    }
})