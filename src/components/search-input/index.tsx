import { FC } from "react";
import { SearchInputStyled } from "./styled"

type Props = {
    placeholder: string;
}

const SearchInput: FC<Props> = (props) => {
    return (
        <SearchInputStyled placeholder={props.placeholder} />
    )
}

export default SearchInput