import { FC } from "react";
import { SettingsImg } from "./styled";
import { Link } from "react-router-dom";

type Props = {
    src: string;
    username: string
}

const SettingsIcon: FC<Props> = (props) => {
    return <div><span>{props.username}</span><Link to='/MainPage/settings'><SettingsImg src={props.src} /></Link></div>;
}

export default SettingsIcon