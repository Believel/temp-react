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
console.log(dayjs())