/// <reference types="react" />
interface IProps {
    message: string[];
    duration?: number;
    newLine?: boolean;
}
declare function NoticeBar(props: IProps): JSX.Element;
export default NoticeBar;
