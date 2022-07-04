
# notice-bar

![npm](https://img.shields.io/npm/v/@ximu/notice-bar)
![npm bundle size](https://img.shields.io/bundlephobia/min/@ximu/notice-bar?color=red)
![npm](https://img.shields.io/npm/dt/@ximu/notice-bar)

基于 react 的 通知栏, [在线 demo](https://thesunset.github.io/notice-bar/)

## Installation

```bash
npm install @ximu/notice-bar --save
```
```bash
yarn add @ximu/notice-bar
```
## Usage

```javascript
import React from "react";
import { render } from "react-dom";

import NoticeBar from "@ximu/notice-bar";
import "@ximu/notice-bar/dist/index.esm.css";

const list: string[] = [
  "谁念西风独自凉",
  "萧萧黄叶闭疏窗",
  "沉思往事立残阳",
  "被酒莫惊春睡重",
  "赌书消得泼茶香",
  "当时只道是寻常",
];
const App = () => <NoticeBar message={list} duration={10} newLine={false} />;
render(<App />, document.getElementById("root"));
```

## Props
| props    | type     | tip                                         |
| -------- | -------- | ------------------------------------------- |
| message  | string[] | 数据，字符串数组                            |
| duration | number   | 滚动完所有数据的时间，单位是秒              |
| newLine  | boolean  | 如果文本过长是否换行，true换行，false不换行 |



## License
MIT
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
