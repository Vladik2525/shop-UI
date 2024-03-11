import styled from "styled-components"

type Props = {
    top: string;
}

const Error = styled.div<Props>`
    font-size: 9px;
    color: red;
    position: absolute;
    margin-top: 32px;
    top: ${(props) => props.top}
`
export default Error