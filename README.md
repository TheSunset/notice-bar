
# simple-carousel

![npm](https://img.shields.io/npm/v/@ximu/simple-carousel)
![npm bundle size](https://img.shields.io/bundlephobia/min/@ximu/simple-carousel?color=red)
![npm](https://img.shields.io/npm/dt/@ximu/simple-carousel)

基于 react 的 轮播图, [在线 demo](https://thesunset.github.io/simple-carousel/)

## Installation

```bash
npm install @ximu/simple-carousel --save
```

## Usage

```javascript
import React from "react";
import { render } from "react-dom";

import MyComponent from "@ximu/simple-carousel";
import "@ximu/simple-carousel/dist/index.css";

const airpods = require("@ximu/simple-carousel/examples/assets/airpods.png");
const iphone = require("@ximu/simple-carousel/examples/assets/iphone.png");
const tablet = require("@ximu/simple-carousel/examples/assets/tablet.png");
const data = [
	{
		title: ["Buy a Tablet or xPhone for college.", "Get airPods."],
		desc: [],
		style: {
			color: "#212121",
			backgroundImage: airpods,
		},
	},
	{
		title: ["xPhone"],
		desc: ["Lots to love. Less to spend.", "Starting at $399"],
		style: {
			color: "#fff",
			backgroundImage: iphone,
		},
	},
	{
		title: ["Tablet"],
		desc: ["Just the right amount of everything"],
		style: {
			color: "#212121",
			backgroundImage: tablet,
		},
	},
];
const App = () => <MyComponent data={data} width={700} height={400} delay={3000} speed={500} />;
render(<App />, document.getElementById("root"));
```

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
