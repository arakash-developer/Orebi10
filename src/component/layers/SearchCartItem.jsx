import React, { useEffect, useState } from 'react'
import close from '../../../public/close.png'
const SearchCartItem = ({ image }) => {

    return (
        <div className=" bg-[#F5F5F3] h-[120px] flex justify-center items-center">
            <div className="h-[80px] flex gap-x-5">
                <img src={image} alt="" />
                <div className="flex items-center gap-x-[80px]">
                    <div className="">
                        <h3 className='font-bold text-sm text-[#262626] font-dm'>Black Smart Watch</h3>
                        <h3 className='font-bold text-sm text-[#262626] font-dm'>$44.00</h3>
                    </div>
                    <img src={close} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SearchCartItem