import { FC } from "react";
import { CopyTooltip } from "./styled";

type Props = {
    isOpen: boolean | undefined;
}

const Tooltip: FC<Props> = (props) => {
    return (
        <div style={props.isOpen ? { display: 'block' } : { display: 'none' }}>
            <CopyTooltip>Copied</CopyTooltip>
        </div>
    )
}

export default Tooltip
