import styled from "styled-components"

type ButtonProps = {
    width?: string;
    height?: string;
}

const Button = styled.button<ButtonProps>`
    background-color: black;
    width: ${(props) => (props.width)};
    height: ${(props) => (props.height)};;
    color: white;   
    border-radius: 20px;
    border: 0;
    margin-top: 11px;
    padding-bottom: 4px;
    box-shadow: rgba(0, 30, 43, 0.3) 1px 4px 10px 4px;
    outline: hidden;
    &:hover {
        background-color: #343436;
    }
`
export default Button