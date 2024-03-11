import { FC, createContext, PropsWithChildren, useState } from "react";
import Tooltip from "../components/tooltip";

export const CopiedModalContext = createContext({
    copyText: (c: string) => { }
})

const CopiedContextProvider: FC<PropsWithChildren> = (props) => {
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const copyText = (content: string) => {
        navigator.clipboard.writeText(content)
        setIsOpened(true)

        setTimeout(() => {
            setIsOpened(false)
        }, 500)
    }
    return (
        <CopiedModalContext.Provider value={{ copyText }}>
            {props.children}
            <Tooltip isOpen={isOpened} />
        </CopiedModalContext.Provider>
    )
}

export default CopiedContextProvider;