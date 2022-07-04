import React from "react";
import { render } from "react-dom";

// 源文件
// import NoticeBar from "./src/NoticeBar";

// 测试打包后的组件
import NoticeBar from "./dist/index.esm.js";
import "./dist/index.esm.css";

const App = () => <NoticeBar />;
render(<App />, document.getElementById("root"));
