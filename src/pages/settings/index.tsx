import { useEffect, useState } from "react";
import { sendRequest } from "../../utils";
import { SettingsContentStyled } from "../../components/settings-content/styled";
import SettingItem from "../../components/setting-item";
import { Row } from "../../styled";

type User = {
    username: string;
    id: number;
}

const Settings = () => {
    const [userData, setUserData] = useState<User>();

    useEffect(() => {
        const getUser = async () => {
            const { data } = await sendRequest('/user/userInfo', {
                method: 'GET'
            });
            setUserData(data);
        };
        getUser();
    }, []);

    return (
        <Row gap="100px" position={'center'}>
            <div>
                <h3>Settings</h3>
                <SettingsContentStyled>
                    <SettingItem property="id" content={JSON.stringify(userData?.id)} />
                    <SettingItem property="username" content={userData?.username || ''} />
                </SettingsContentStyled>
            </div>
        </Row>
    );
};

export default Settings;
