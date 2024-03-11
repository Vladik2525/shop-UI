import { useEffect, useState } from "react"
import Profile from "../../components/profile"
import { sendRequest } from "../../utils"
import { Row } from "../../styled";
import { Link } from "react-router-dom";

type user = {
    username: any;
}

const MainPage = () => {

    const [userData, setUserData] = useState<user>()

    useEffect(() => {
        const getUser = async () => {
            const { data } = await sendRequest('/user/userInfo', {
                method: 'GET'
            })
            setUserData(data)
        }
        getUser()
    }, [])

    return (
        <div>
            <Row gap="100px" position={null} items="none" direction="none" top='0'>
                <Profile username={userData?.username} />
                <Link to='/MainPage/shop'><span>Shop</span></Link>
                <Link to='/MainPage/new-product'><span>New-Product</span></Link>
                <Link to='/MainPage/my-products'><span>My-Products</span></Link>
            </Row>
        </div>
    )
}
export default MainPage