import React, { useEffect, useState } from 'react'
import Order from './Components/Order';
import db, {storage, auth, provider} from './Firebase'
import './Orders.css'
import { useStateProvider } from './StateProvider'
function Orders() {
    const [{basket,user},dispatch]=useStateProvider();
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        if(user){
            db.collection("users").doc(user?.email).collection("orders").orderBy("created", "desc").onSnapshot((snapshot)=>{
                setOrders(snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data()
                }
                )))
            })
        }else{
            setOrders([]);
        }
    },[user])
    return (
        <div className="orders">
            <h2>Your Orders</h2>
            <div>
            {
                orders.map(order=>(
                    <Order order={order} />
                ))
            }
            </div>
        </div>
    )
}
export default Orders
