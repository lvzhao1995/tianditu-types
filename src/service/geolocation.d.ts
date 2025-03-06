declare namespace T {
    class Geolocation {
        /** 获取用户当前位置 */
        getCurrentPosition(callback: (result: LocalCityResult) => void, options?: GeolocationOptions): void

        /** 返回状态码 */
        getStatus(): number;
    }

    interface GeolocationOptions {
        /** 要求浏览器获取最佳结果 */
        enableHighAccuracy: boolean;
        /** 允许返回指定时间内的缓存结果。如果此值为0，则浏览器将立即获取新定位结果 */
        maximumAge: number;
        /** 超时时间 */
        timeout: number;
    }

    interface LocalCityResult {
        /** 定位返回的坐标点 */
        lnglat: LngLat;
        /** 定位精确程度，单位为米 */
        accuracyNumber: number;
    }
}
