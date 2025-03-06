declare namespace T {
    class Geocoder {
        /** 创建一个地址解析器的实例 */
        constructor();

        /** 对指定的坐标点进行反地址解析。 */
        getLocation(point: LngLat, callback: (result: GeocoderLocationResult) => void): void;

        /** 根据名称进行地址解析 */
        getPoint(loction: string, callback: (result: GeocoderPointResult) => void): void;
    }

    interface GeocoderPointResult {
        location: {
            lat: number;
            lon: number;
            keyWord: string;
            level: string;
            score: number;
        };

        /** 返回解析状态 */
        getStatus(): number;

        /** 返回响应信息 */
        getMsg(): string;

        /** 获取此点坐标 */
        getLocationPoint(): LngLat;

        /** 获取此点类别 */
        getLocationLevel(): string;
    }

    interface GeocoderLocationResult {
        addressComponent?: AddressComponent['addressComponent'];
        formatted_address?: string | null;
        location: {
            lon: number;
            lat: number;
        }

        /** 返回解析状态 */
        getStatus(): number;

        /** 返回响应信息 */
        getMsg(): string;

        /** 获取此点坐标 */
        getLocationPoint(): LngLat;

        /** 获取详细信息 */
        getAddress(): string | null;

        /** 获取此点的详细信息 */
        getAddressComponent(): AddressComponent;
    }

    /** 地址解析结果的层次化地址信息 */
    interface AddressComponent {
        addressComponent: {
            address: string;
            address_distance: number;
            address_position: string;
            city: string;
            city_code: string;
            county: string;
            county_code: string;
            nation: string;
            poi: string;
            poi_distance: number;
            poi_position: string;
            province: string;
            province_code: string;
            road: string;
            road_distance: number;
            town: string;
            town_code: string;
        }
        /** 此点最近地点信息 */
        address: string;
        /** 此点距离最近地点信息距离 */
        address_distance: number;
        /** 此点在最近地点信息方向 */
        address_position: string;
        /** 此点所在国家或城市或区县 */
        city: string;
        /** 距离此点最近poi点 */
        poi: string;
        /** 距离此点最近poi点的距离 */
        poi_distance: number;
        /** 此点在最近poi点的方向 */
        poi_position: string;
        /** 距离此点最近的路 */
        road: string;
        /** 此点距离此路的距离 */
        road_distance: number;
    }
}
