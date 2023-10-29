import React from 'react'
import { useSelector} from 'react-redux';
import ProductList from '../../components/ProductList'
import "../../styles/AllProducts.css"

const AllProducts = () => {

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    return (
        <div className="admin-orders-page-container">
            <div className="header-sec">
                <h2>Hello {userInfo.name}!</h2>
            </div>
            
            <ProductList/>
        </div>
    )
}

export default AllProducts
