import React, { useEffect, useRef, useState } from "react";
import style from "./NoticeBar.module.scss";

function NoticeBar(props: any): JSX.Element {
	const [message] = useState(["12121", "wewqewqeqw", "fdsfdsfsdf", "hhgfhgfhgfhgf", "12121"]);
	const noticeMessageRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const wrapNode = noticeMessageRef.current;
		const distance = wrapNode!.offsetHeight - 30;
		noticeMessageRef.current!.style.transitionDuration = `5s`;
		noticeMessageRef.current!.style.transform = `translateY(${-distance}px)`;
	}, []);
	const noticeTransitionEndHandler = () => {
		const wrapNode = noticeMessageRef.current;
		const distance = wrapNode!.offsetHeight - 30;
		noticeMessageRef.current!.style.transitionDuration = "0s";
		noticeMessageRef.current!.style.transform = `translateY(0)`;
		setTimeout(() => {
			noticeMessageRef.current!.style.transitionDuration = `5s`;
			noticeMessageRef.current!.style.transform = `translateY(${-distance}px)`;
		}, 0);
	};

	return (
		<div className={style["notice-bar"]}>
			<div className={style["notice-wrap"]}>
				<img src={require("./notice.png").default} alt="" />
				<div className={style["tip-content"]}>
					<ul
						className={style["tip"]}
						ref={noticeMessageRef}
						onTransitionEnd={noticeTransitionEndHandler}
					>
						{message.map<JSX.Element>((item: string, index: number) => {
							return <li key={index}>{item}</li>;
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
export default NoticeBar;
