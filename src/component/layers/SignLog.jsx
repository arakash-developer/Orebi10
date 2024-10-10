import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SignLog = () => {
    let navigate = useNavigate();
    let [token, setToken] = useState(false);
    let tok = localStorage.getItem('token');
    useEffect(() => {
        if (tok) {
            setToken(true)
        }else{
            setToken(null);
        }
    },[tok])

    let logout =()=>{
        localStorage.removeItem('token');
        navigate('/home');
    }

    let [userdata,setUserData] = useState([]);

    let getdata = () =>{
        axios.get("https://66f38f7c71c84d805879181b.mockapi.io/orebi_auth")
        .then((res)=>{
            setUserData(res.data)
        })
    }
    useEffect(()=>{
        getdata();
    },[])
        
    return (
        <>
            {
                token ?
                    <>
                        <div className='w-full'>
                            <div className="bg-[#fff] border-b hover:bg-black group w-full flex justify-center">
                                <h3 className='py-4 font-dm font-normal text-sm text-center group-hover:text-[#fff] text-[#262626] group-hover:font-bold'>My Account</h3>
                            </div>
                            <div onClick={logout} className="hover:bg-black bg-[#fff] group w-full flex justify-center">
                                <h3 className='py-4 group-hover:text-[#fff] text-[#262626] group-hover:font-bold text-sm text-center font-dm'>LogOut</h3>
                            </div>
                        </div>
                    </> : <>
                    <div className='w-full'>
                            <div onClick={() => { navigate('/signup') }} className="bg-[#fff] border-b hover:bg-black group w-full flex justify-center">
                                <h3 className='py-4 font-dm font-normal text-sm text-center group-hover:text-[#fff] text-[#262626] group-hover:font-bold'>SignUp</h3>
                            </div>
                            <div onClick={() => { navigate('/login') }} className="hover:bg-black bg-[#fff] group w-full flex justify-center">
                                <h3 className='py-4 group-hover:text-[#fff] text-[#262626] group-hover:font-bold text-sm text-center font-dm'>LogIn</h3>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default SignLog