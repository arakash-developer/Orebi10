import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Contex } from '../../context/Quantity';


const SignLog = () => {
    let tok = localStorage.getItem('token')
    let [userdata, setUserData] = useState([])
    let getdata = () => {
        axios.get("https://66f38f7c71c84d805879181b.mockapi.io/orebi_auth")
            .then((res) => {
                setUserData(res.data)
            })
    }
    let navigate = useNavigate()
    let [logtoken, setLogToken] = useState(false)
    useEffect(() => {
        getdata();
        userdata.map((data) => {
            if (data.token == tok) {
                setLogToken(true)
            } else {
                navigate('/home')
                setLogToken(false)
            }

        })
    }, [tok, userdata])

    let logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('uuid')
        navigate('/home')
    }




    return (
        <>
            {/* {
                userdata.map((data) => (
                   
                ))
            } */}

            {
                logtoken ?
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