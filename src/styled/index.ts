import styled from "styled-components"

type rowProps = {
    gap: string;
    position: string | null;
    items: string
    direction: string;
    top: string;
}

export const Row = styled.div<rowProps>`
    display: flex;
    gap: ${(props) => (props.gap)};
    justify-content: ${(props) => (props.position)};
    align-items: ${(props) => (props.items)};
    flex-direction: ${(props) => (props.direction)};
    margin-top: ${(props) => (props.top)};
`

type flexibleInputProps = {
    border: string,
    fontsize: string,
    color: string,
    left: string,
    right: string,
    width: string,
    height: string,
    borderRadius: string,
}

export const FlexibleInput = styled.input<flexibleInputProps>`
    outline: none;
    width: ${(props) => (props.width)};
    height: ${(props) => (props.height)};
    border-radius: ${(props) => (props.borderRadius)};
    border: ${(props) => (props.border)};
    font-size: ${(props) => (props.fontsize)};
    color: ${(props) => (props.color)};
    padding-left: ${(props) => (props.left)};
    padding-right: ${(props) => (props.right)};
    &::placeholder{
        font-size: 10px;
        color: #969799;
    }
`

type flexibleButtonProps = {
    backgroundColor: string;
    color: string;
    width: string,
    height: string,
    borderRadius: string,
}

export const FlexibleButton = styled.button<flexibleButtonProps>`
    color: ${(props) => (props.color)};
    background-color: ${(props) => (props.backgroundColor)};
    width: ${(props) => (props.width)};
    height: ${(props) => (props.height)};
    border-radius: ${(props) => (props.borderRadius)};
    border: 0;
    padding-bottom: 3px;
    outline: 0;
    &:hover{
        background-color: #5282d1;
    }
`

type flexibleTextAreaProps = {
    width: string;
    height: string;
    fontSize: string;
}

export const FlexibleTextArea = styled.textarea<flexibleTextAreaProps>`
    width: ${(props) => (props.width)};
    height: ${(props) => (props.height)};
    font-size: ${(props) => (props.fontSize)};
    outline: 0;
    padding: 4px 1px 4px 4px;
    border: 1px #bec0c2 solid;
    &::placeholder{
        font-size: 10px;
        color: #969799;
    }
`