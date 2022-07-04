import React, { useEffect, useRef, useMemo } from "react";
import { Property } from "csstype";
import style from "./NoticeBar.module.scss";

interface IProps {
	message: string[];
	duration?: number;
  newLine?: boolean;
}

const ellipsis = {
	whiteSpace: "nowrap" as Property.WhiteSpace,
	overflow: "hidden",
	textOverflow: "ellipsis"
};
function NoticeBar(props: IProps): JSX.Element {
	const noticeMessageRef = useRef<HTMLUListElement>(null);
	const list = useMemo(() => {
		return props.message.length ? props.message.concat(props.message[0]) : []
	}, [])
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
					{list.map<JSX.Element>((item: string, index: number) => {
						return (
							<li style={!props.newLine ? ellipsis : null} key={index}>
								{item}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default NoticeBar;
