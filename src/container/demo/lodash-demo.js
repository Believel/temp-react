import { without } from "lodash";

// 返回一个过滤后没有的值组成的数组
let res = without([2,1,2,3], 1, 2); // [3]
console.log(res);
