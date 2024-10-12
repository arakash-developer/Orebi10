import React, { useEffect, useState } from 'react'
import close from '../../../public/close.png'
const SearchCartItem = ({data}) => {
    let { productId, quantity } = data;
    let [detail, setDetail] = useState([])
    useEffect(() => {
        let getData = async () => {
            let response = await fetch("https://dummyjson.com/products")
            let data = await response.json()
            let newdata = data.products
            let finddetails = newdata.filter(item => item.id === productId)[0];
            setDetail(finddetails)
        }
        getData();
    }, [productId])
    // console.log(detail);
    return (
        <div className=" bg-[#F5F5F3] h-[120px] flex justify-center items-center">
            <div className="h-[80px] flex gap-x-5">
                <img src={detail.thumbnail} alt="" />
                <div className="flex items-center gap-x-[80px]">
                    <div className="">
                        <h3 className='font-bold text-sm text-[#262626] font-dm'>{detail.title}</h3>
                        <h3 className='font-bold text-sm text-[#262626] font-dm'>{detail.price * quantity}</h3>
                    </div>
                    <img src={close} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchCartItem