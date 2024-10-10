import React from 'react'
import { useNavigate } from 'react-router-dom'


const SignLog = () => {
    let navigate = useNavigate();
    return (
        <>
            <div onClick={()=>{navigate('/signup')}} className="bg-[#fff] border-b hover:bg-black group w-full flex justify-center">
                <h3 className='py-4 font-dm font-normal text-sm text-center group-hover:text-[#fff] text-[#262626] group-hover:font-bold'>SignUp</h3>
            </div>
            <div onClick={()=>{navigate('/login')}} className="hover:bg-black bg-[#fff] group w-full flex justify-center">
                <h3 className='py-4 group-hover:text-[#fff] text-[#262626] group-hover:font-bold text-sm text-center font-dm'>LogIn</h3>
            </div>

        </>
    )
}

export default SignLog