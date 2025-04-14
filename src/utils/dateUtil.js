/**
 * 将毫秒级时间戳转换为格式化的时间字符串
 * @param {string|number} timestamp 毫秒级时间戳
 * @returns {string} 格式化的时间字符串
 */
export const timestampToJsTimeStr = (timestamp) => {
    if (timestamp === '0') {
        return 'unknown';
    }

    // 确保时间戳是13位的数字
    let normalizedTimestamp = String(timestamp);
    if (normalizedTimestamp.length > 13) {
        normalizedTimestamp = normalizedTimestamp.slice(0, 13);
    } else if (normalizedTimestamp.length < 13) {
        normalizedTimestamp = normalizedTimestamp.padEnd(13, '0');
    }

    const date = new Date(Number(normalizedTimestamp));

    // 使用内置的格式化方法
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
};

/**
 * 将Date对象转换为毫秒级时间戳
 * @param {Date} date Date对象，不传则使用当前时间
 * @returns {number} 毫秒级时间戳
 */
export const dateToTimestamp = (date = new Date()) => {
    return date.getTime();
};
