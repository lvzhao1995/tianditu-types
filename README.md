# tianditu-types

- 天地图接口类型声明文件

## 安装

```sh
npm i tianditu-types -D
```

## 使用

`tsconfig.json`中增加`types`配置。

```json
{
  "compilerOptions": {
    "types": ["tianditu-types"]
  }
}
```

## 类型声明列表

- [x] 地图主类
- [x] 图层类
- [x] 控件类
- [x] 覆盖物类
- [x] 工具类
- [x] 组件类
- [x] 右键菜单类
- [x] 实体类

#### 服务类

- [x] 搜索
- [x] 公交
- [x] 驾车
- [x] 逆地理编码
- [x] H5定位
- [ ] IP定位（实测API不可用，暂不处理）
- [ ] 行政区划（实测API不可用，暂不处理）
- [ ] 数据来源

#### 符号标绘

- [ ] 符号覆盖物
- [ ] 符号标绘工具
- [ ] 符号标绘控件

