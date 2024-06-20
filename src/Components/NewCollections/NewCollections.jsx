import React, { useEffect, useState } from "react";
import './NewCollections.css'
import Item from '../Item/Item'
import Loading from "../Loading/Loading";

const NewCollections = () => {
    const [new_collection,setNew_collection] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch('https://e-commercebackend-si06.onrender.com/newcollections')
        .then((response)=>response.json())
        .then((data)=>{
            setNew_collection(data)
            setLoading(false);
        })
    },[])
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            {loading && (
        <div className="w-full h-full flex sticky bottom-0 justify-center items-center">
          <Loading />
        </div>
      )}
            <div className="collections">
                {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>            
        </div>
    )
}

export default NewCollections