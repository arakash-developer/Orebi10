import React from 'react'
import Container from '../layers/Container'
import love from '../../../public/Icon_heart.png';
import compare from '../../../public/Icon_compare.png';
import cart from '../../../public/Icon_cart (1).png';
import { useNavigate } from 'react-router-dom';

const Item = ({ productTitle, productImg, productPrice, productTag, productColor, productid, className }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className={`item 2xl:w-[370px] 2xl:xl:w-[300px] lg:w-[232px] md:w-[240px] sm:w-[290px]  cursor-pointer relative group ${className}`} onClick={() => { navigate(`/products/details/${productid}`, { state: { pprices: productPrice, ptitle: productTitle, ptag: productTag, pimg: productImg, pcolor: productColor, pids: productid } }) }}>
                <div className="tag absolute left-[20px] top-[20px] py-[9px] xl:py-[5px] xl:px-[22px] px-[30px] bg-[#262626]">
                    <h4 className='font-bold text-sm  xl:text-[12px] text-[#fff] capitalize'>{productTag ? `${productTag}%` : "New"}</h4>
                </div>
                <div className="2xl:h-[370px] w-full xl:h-[300px] lg:h-[232px] bg-slate-200">
                    <img className='object-cover w-full h-full' src={productImg ? productImg : null} alt="productImg" />
                </div>
                <div className="main group-hover:bg-[#ebf0fa] relative z-20">
                    <div className="flex justify-between pt-[24px] xl:pt-[16px] xl:pb-[12px] pb-[15px] ">
                        <h2 className='font-dm  font-bold text-xl xl:text-md text-[#262626] capitalize'>{productTitle ? productTitle : null}</h2>
                        <h3 className='font-normal text-base leading-[187%] text-[#767676] font-dm'>${productPrice ? productPrice : null}</h3>
                    </div>
                    <h4 className='font-normal text-base leading-[187%] text-[#767676] font-dm capitalize'>{productColor ? productColor : <h1 className='text-transparent'>None</h1>}</h4>
                </div>
                <div className="overlay absolute left-0 bottom-0 group-hover:bottom-[85px] opacity-0 group-hover:opacity-100 transition-all duration-100 bg-[#fff] z-10 w-full 2xl:h-[156px] xl:h-[100px]">
                    <ul className='text-right pr-[30px] py-[26px] h-full flex flex-col justify-between'>
                        <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#">Add to Wish List <img className='inline-block pl-4 my' src={love} alt="" /></a></li>
                        <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#">Compare <img className='inline-block pl-4 my' src={compare} alt="" /></a></li>
                        <li><a className='font-normal text-base text-right text-[#767676] font-dm' href="#" onClick={() => { navigate(`/products/details/${productid}`, { state: { pprices: productPrice, ptitle: productTitle, ptag: productTag, pimg: productImg, pcolor: productColor, pids: productid } }) }}>Add to Cart <img className='inline-block pl-4 my' src={cart} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Item