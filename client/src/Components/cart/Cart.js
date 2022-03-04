import React, { useContext, useEffect, useState } from 'react'
import "./cart.css";
import { products } from '../home/productdata';
import { Divider } from '@mui/material';
import { useHistory, useParams } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import { Logincontext } from "../context/Contextprovider";

const Cart = () => {

    const { account, setAccount } = useContext(Logincontext);
    // console.log(account);



    const { id } = useParams("");
    // console.log(id);

    const history = useHistory();

    const [inddata, setIndedata] = useState("");

    // console.log([inddata]);

    const getinddata = async () => {
        const res = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            alert("no data available")
        } else {
            // console.log("ind mila hain");
            setIndedata(data);
        }
    };

    useEffect(() => {
        setTimeout(getinddata, 1000)
    }, [id]);

    const addtocart = async (id) => {
        console.log(id);
        const check = await fetch(`/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inddata
            }),
            credentials: "include"
        });
        // console.log(check);
        const data1 = await check.json();
        // console.log(data1 +  'ok');

        if (check.status !== 201) {
            alert("no data available")
        } else {
            // console.log("cart add ho gya hain");
            setAccount(data1)
            history.push("/buynow");
        }
    }


    return (

        <div className="cart_section">
            {inddata && Object.keys(inddata).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.detailUrl} alt="cart" />
                        <div className="cart_btn">
                            <button className="cart_btn1" onClick={() => addtocart(inddata.id)}>Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>

                    </div>
                    <div className="right_cart">
                        <h3>{inddata.title.shortTitle}</h3>
                        <h4>{inddata.title.longTitle}</h4>
                        <Divider />
                        <p className="mrp">M.R.P. : <del>₹{inddata.price.mrp}</del></p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹{inddata.price.cost}.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ₹{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
                    </div>
                </div>
            }



            {!inddata ? <div className="circle">
                <CircularProgress />
                <h2> Loading....</h2>
            </div> : ""}
        </div>
    )
}

export default Cart
