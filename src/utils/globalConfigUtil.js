// 从 window 对象获取配置
// 因为动态配置挂载在 window 的 admin.config 属性
export function _window(key) {
    if (window.hasOwnProperty('globalConfig')) {
        return window.globalConfig[key]
    }
    return null
}

// 获取 base_url
export function getBaseUrl() {
    // 如果动态配置存在并且 BASE_URL 有值，则从动态配置获取
    // 否则从 env 配置获取
    return _window('VITE_BASE_URL') ? _window('VITE_BASE_URL') : import.meta.env.VITE_BASE_URL
}