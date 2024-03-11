import { FC, useContext } from "react"
import { SettingsItemStyled } from "./styled";
import { CopiedModalContext } from "../../contexts/copied-modal-provider";

type Props = {
    content: string;
    property: string;
}

const SettingItem: FC<Props> = (props) => {

    const { copyText } = useContext(CopiedModalContext)

    return (
        <SettingsItemStyled>
            <div onClick={() => copyText(props.content)}>{props.property}: {props.content}</div>
        </SettingsItemStyled>
    )
}

export default SettingItem