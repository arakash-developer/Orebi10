import React, { useEffect, useState } from 'react'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'
import Sunglass from '../../../public/products/sunglass.png';
import Down from '../../../public/down.png';
import Close from '../../../public/close.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Cart = () => {
    let  nevigate = useNavigate();
    let { id } = useParams();
    let [current, setCurrent] = useState([]);

    useEffect(() => {
        let getdata = async () => {
            let response = await fetch("https://dummyjson.com/products");
            let data = await response.json();
            let newdata = data.products;
            let datacurrnt = newdata.filter((b) => (b.id == id));
            setCurrent(datacurrnt);
        }
        getdata();
    }, [])


    return (
        <>
            <Container>
                <Breadcumb status='hidden' className='my-[124px]' three='hidden'/>
                <div className="mb-5">
                    <div className="bg-[#f5f5f3] py-8 grid grid-cols-12 content-center">
                        <h3 className='col-span-3 pl-5 font-bold text-base leading-[144%] text-[#262626] font-dm'>Product</h3>
                        <h3 className='col-span-3 font-bold text-base leading-[144%] text-[#262626] font-dm'>Price</h3>
                        <h3 className='col-span-3 font-bold text-base leading-[144%] text-[#262626] font-dm'>Quantity</h3>
                        <h3 className='col-span-3 font-bold text-base leading-[144%] text-[#262626] font-dm'>Total</h3>
                    </div>


                    <div className="cart_inner">
                        <div className="py-8 border-[1px] border-[#F0F0F0] grid grid-cols-12 content-center items-center">
                            <div className="flex items-center col-span-3">
                                <img className='inline-block pl-5 pr-10' src={Close} alt="" />
                                <div className="w-24 h-24">
                                    {
                                        current.map((data) => (
                                            <img className='w-full h-full object-cover' src={data.thumbnail} alt="" />
                                        ))
                                    }
                                </div>
                                {
                                    current.map((data) => (
                                        <h3 className='pl-5 font-bold text-base leading-[144%] text-[#262626] font-dm'>{data.title.slice(0, 15)}..</h3>
                                    ))
                                }
                            </div>
                            {
                                current.map((data) => (
                                    <h2 className='col-span-3 font-bold text-xl text-[#262626] font-dm'>{data.price} $</h2>
                                ))
                            }
                            <div className='col-span-3 w-36 h-9 border-[1px] px-5 border-[#f0f0f0] flex gap-x-[35px] justify-center items-center'>
                                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>-</h3>
                                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>1</h3>
                                <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>+</h3>
                            </div>
                            {
                                current.map((data) => (
                                    <h2 className='col-span-3 font-bold text-xl text-[#262626] font-dm'>{data.price} $</h2>
                                ))
                            }
                        </div>
                        <div className="flex justify-between items-center py-6 border-b border-r border-l border-[#F0F0F0] px-5">
                            <div className="flex items-center">
                                <div className="w-64 h-12 border-[1px] border-[#EAEAEA] flex justify-center items-center gap-x-[171px]">
                                    <h3>SIZE</h3>
                                    <img src={Down} alt="" />
                                </div>
                                <h3 className='font-bold text-sm text-[#262626] font-dm pl-6'>Apply coupon</h3>
                            </div>
                            <h3 className='font-bold text-sm text-right text-[#262626] font-dm capitalize'>Update cart</h3>
                        </div>
                    </div>

                    <div className="flex items-end flex-col">
                        <h3 className='font-bold text-xl text-[#262626] font-dm pt-[54px] pb-[24px] capitalize'>Cart totals</h3>
                        <div className="grid grid-cols-2 grid-rows-2 border-[2px] border-[#F0F0F0]">
                            <h3 className='pr-[234px] border-b-[2px] border-r-[2px] border-[#F0F0F0] pl-5 py-4 font-bold text-base leading-[144%] text-[#262626] font-dm'>Subtotal</h3>
                            {
                                current.map((data) => (
                                    <h3 className='pr-[234px] pl-5 py-4 border-b-[2px] border-[#F0F0F0] font-normal text-base leading-[187%] text-[#767676] font-dm'>{data.price} $</h3>
                                ))
                            }
                            <h3 className='pr-[234px] pl-5 py-4 border-r-[2px] border-[#F0F0F0] font-bold text-base leading-[144%] text-[#262626] font-dm'>Total</h3>
                            {
                                current.map((data) => (
                                    <h3 className='pr-[234px] pl-5 py-4 font-normal text-base text-[#262626] font-dm'>{data.price} $</h3>
                                ))
                            }
                        </div>
                        <div className="flex gap-x-5 items-center">
                            <button onClick={()=>{ nevigate("/shop")}} className='py-4 px-10 border-[1px] border-[#262626] text-[#262626] font-bold text-sm text-center hover:bg-[#262626] hover:text-[#fff] font-dm mt-8'>Back to Shop</button>
                            <button className='py-4 px-7 bg-[#262626] font-bold text-sm text-center text-[#fff] font-dm mt-8'>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart