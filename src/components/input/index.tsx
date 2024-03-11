import { FC } from "react"
import InputStyled from "./styled"

type InputProps = {
    placeholder: string;
    type: string;
    name: string;
    register: any;
}

const Input: FC<InputProps> = (props) => {
    return (
        <InputStyled {...props.register(props.name)} {...props} />
    )
}

export default Input