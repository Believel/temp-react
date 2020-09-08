// import _ from "lodash";


class MyObj {
    static instance: MyObj;
    public static getInstance() {
        console.log(MyObj.instance)
    }
}

export default MyObj.getInstance()
