import { FC } from "react";
import SettingsIcon from "../settings-icon";
import { ProfileStyle } from "./styled";

type User = {
    username: string;
}

const Profile: FC<User> = (props) => {
    return (
        <ProfileStyle>
            <SettingsIcon src="https://cdn-icons-png.flaticon.com/128/126/126472.png" username={props.username} />
        </ProfileStyle>
    )
}

export default Profile