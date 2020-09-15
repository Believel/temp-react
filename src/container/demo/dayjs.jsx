import React from "react";
import { DatePicker, TimePicker, Space } from "antd";
import dayjs from "dayjs";
import "./dayjs.js";
import "./lodash.ts";
const { RangePicker } = DatePicker;
const Demo = () => {
    const handleDateChange = (date, dateString) => {
        console.log("date", date);
        console.log("dateString", dateString);

    }
    const handleTimeChange = (time, timeString) => {
        console.log("time", time);
        console.log("timeString", timeString);
        // 开始时间，结束时间
        const [start, end] = time;
        const x = dayjs(start);
        const y = dayjs(end);
        const diff = dayjs.duration(y.diff(x));
        console.log(diff.asMinutes())
        
    }
    return <div style={{margin: "100px"}}>
        <Space direction="vertical">
            <RangePicker onChange={ handleDateChange}/>
            <TimePicker.RangePicker onChange={handleTimeChange} format="HH:mm"/>
        </Space>
    </div>
}
export default Demo;