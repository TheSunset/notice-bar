import React from "react";
import { render } from "react-dom";

// npm 包
import NoticeBar from "@ximu/notice-bar";
import "@ximu/notice-bar/dist/index.esm.css";

// 源文件
// import NoticeBar from "./src/NoticeBar";

// 测试打包后的组件
// import NoticeBar from "./dist/index.esm.js";
// import "./dist/index.esm.css";
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
