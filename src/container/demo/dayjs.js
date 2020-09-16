import dayjs from "dayjs"; // dayjs库引入
import duration from "dayjs/plugin/duration"; // 引入插件 - 时长
import weekday from "dayjs/plugin/weekday"
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(duration);
dayjs.extend(weekday);
dayjs.extend(relativeTime);

// !1. 当前时间 dayjs()
// !2. 30天前的那天
dayjs().subtract(30, "days");
// !3. 检验当前Day.js对象是否是一个有效的时间
dayjs().isValid();
// !4. 获取或设置秒
// dayjs().second();
// dayjs().minute();
// dayjs().hour();
// dayjs().date();
// dayjs().day();
// dayjs().weekday(7);
// dayjs().year();
// dayjs().get("year"); // 2020
// dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString()
// ! 5. add 返回增加一定时间的复制的Day.js对象 
dayjs().add(7, "day");
// ! 6. subtract 返回减去一定时间的复制的Day.js对象
dayjs().subtract(7, "year");
// ! 7. startOf 返回复制的Day.js对象，并设置到一个时间的开始 
dayjs().startOf("minute");
// ! 8. 显示
// dayjs().format("YYYY-MM-DD")
// const a = dayjs()
// const b = dayjs("1990-09-07");
// a.from(b)
// !9. 获取当前月份包含的天数
dayjs().daysInMonth();
// !10. 查询功能
dayjs().isBefore('2020=08-09')
dayjs().isAfter('2019-09-01', "year");
// console.log(dayjs())


const mappingTime = {
    day: ["9:00", "18:00"],
    night: ["14:00", "23:00"],
    morning: ["8:00", "17:00"]
  };
const getMinutes = (end, start) => {
    return dayjs.duration(end.diff(start)).asMinutes();
}
const compare = (mystart, myend, start, end) => {
    // 起始在区间前面
    if (mystart.isBefore(start)) {
        if (myend.isBefore(start) || myend.isSame(start)) {
            return 0;
        } else if (myend.isAfter(start) && (myend.isBefore(end) || myend.isSame(end))) {
            // 时间在此节点内： 显示这个班
            return getMinutes(myend, start)
        } else {
            return 0;
        }
    // 起始在区间内部
    } else if(mystart.isSame(start) || mystart.isAfter(start)) {
        if (myend.isBefore(end) || myend.isSame(end)) {
            return getMinutes(myend, mystart);
        } else {
            return getMinutes(end, mystart);
        }
    // 起始在区间外部
    } else {
        return 0;
    }
}
const diffTime = (time = "13:00-20:00") => {
    const [mystartTime, myendTime] = time.split("-");
    const [mystartHour, mystartMinute] = mystartTime.split(':')
    const [myendHour, myendMinute] = myendTime.split(':');
    // 我的开始时间
    const mystart = dayjs().hour(Number(mystartHour)).minute(Number(mystartMinute));
    // 我的结束时间
    const myend = dayjs().hour(Number(myendHour)).minute(Number(myendMinute));
    let result = [];
    Object.keys(mappingTime).forEach(key => {
        const [startTime, endTime] = mappingTime[key];
        const [startHour, startMinute] = startTime.split(":");
        const [endHour, endMinute] = endTime.split(":");
        const start = dayjs().hour(Number(startHour)).minute(Number(startMinute));
        const end = dayjs().hour(Number(endHour)).minute(Number(endMinute));
       result.push(compare(mystart, myend, start, end))
    });
    return result;
};
const getClasssName = (result) => {
    const max = Math.max(...result);
    const maxIndex = result.findIndex(item => item === max);
    let cls = '';
    Object.keys(mappingTime).some((key, index) => {
        if (index === maxIndex) {
            cls = key;
            return true
        }
    })
    return cls;
}
  diffTime();