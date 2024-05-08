function formatToTargetLengthDigits(str, length) {
    // 如果字符串长度超过16位，则截断
    if (str.length > length) {
        return str.slice(0, length);
    }

    // 如果字符串长度不足16位，则在后面补0
    return str.padEnd(length, '0');
}

export const // 时间戳：1637244864707
    /* 时间戳转换为时间 */
    timestampToJsTimeStr = (timestamp) => {
        if (timestamp === '0') {
            return 'unknown'
        }
        // 历史遗留问题 将timestamp调节到13位 多删少补
        timestamp = formatToTargetLengthDigits(timestamp, 13)

        timestamp = Number(timestamp)

        let date = new Date(timestamp);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    }
