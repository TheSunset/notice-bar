import React, { useEffect, useRef, useState } from "react";
import { CSSProperties } from "styled-components";
import style from "./NoticeBar.module.scss";

interface IProps {
	message: string[];
	duration?: number;
  newLine?: boolean;
}

const ellipsis1 = {
	whiteSpace: "normal" as WhiteSpace,
	overflow: "hidden",
	textOverflow: "ellipsis"
};
function NoticeBar(props: IProps): JSX.Element {
	const noticeMessageRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const len = props.message.length;
		const wrapNode = noticeMessageRef.current;
		const distance = wrapNode!.offsetHeight - 30;
		noticeMessageRef.current!.style.transitionDuration = `${props.duration || len}s`;
		noticeMessageRef.current!.style.transform = `translateY(${-distance}px)`;
	}, []);
	const noticeTransitionEndHandler = () => {
		const len = props.message.length;
		const wrapNode = noticeMessageRef.current;
		const distance = wrapNode!.offsetHeight - 30;
		noticeMessageRef.current!.style.transitionDuration = "0s";
		noticeMessageRef.current!.style.transform = `translateY(0)`;
		setTimeout(() => {
			noticeMessageRef.current!.style.transitionDuration = `${props.duration || len}s`;
			noticeMessageRef.current!.style.transform = `translateY(${-distance}px)`;
		}, 0);
	};

	return (
		<div className={style["notice-bar"]}>
			<img src={require("./notice.png").default} alt="" />
			<div className={style["tip-content"]}>
				<ul
					className={style["tip"]}
					ref={noticeMessageRef}
					onTransitionEnd={noticeTransitionEndHandler}
				>
					{props.message.map<JSX.Element>((item: string, index: number) => {
						return (
							<li style={ellipsis1} key={index}>
								{item}
							</li>
						);
					})}
					{props.message.length ? <li>{props.message[0]}</li> : null}
				</ul>
			</div>
		</div>
	);
}
export default NoticeBar;
