import SearchButton from "../../components/search-button"
import SearchInput from "../../components/search-input"
import { Row } from "../../styled"

const Shop = () => {

    return (
        <div>
            <Row gap="15px" position={'center'}>
                <SearchInput placeholder={'Find any products'} />
                <SearchButton />
            </Row>
        </div>
    )
}
export default Shop