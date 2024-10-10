import React, { useEffect, useState } from 'react'
import Container from '../layers/Container'
import Breadcumb from '../layers/Breadcumb'
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import axios from 'axios';


const Login = () => {


    const navigate = useNavigate();



    let [email, setemail] = useState();
    let [emaileer, setEmailerr] = useState("");


    let [password, setPassword] = useState();
    let [passworderr, setPassworderr] = useState("");



    let [check, setCheck] = useState(true);
    let [eye, setEye] = useState(false);


    let manegfname = (element) => {
        setFname(element.target.value);
        setFnameeer("");
    }

    let maneglname = (element) => {
        setlname(element.target.value);
        setLnameeer("");
    }

    let manegemail = (element) => {
        setemail(element.target.value);
        setEmailerr("");
    }

    let manegnumber = (element) => {
        setNumber(element.target.value);
        setNumbererr("");
    }

    let manegaddress1 = (element) => {
        setAddress1(element.target.value);
        setAddress1err1("");
    }

    let manegaddress2 = (element) => {
        setAddress2(element.target.value);
        setAddress1err2("");
    }

    let manegcity = (element) => {
        setCity(element.target.value);
        setCityerr("");
    }

    let manegpost = (element) => {
        setPost(element.target.value);
        setPosterr("");
    }

    let manegpassword = (element) => {
        setPassword(element.target.value);
        setPassworderr("");
    }

    let manegrepassword = (element) => {
        setrePassword(element.target.value);
        setrePassworderr("");
    }

    let manegdivision = (element) => {
        setDivision(element.target.value);
        setDivisionerr("");
    }

    let manegdistrict = (element) => {
        setDistrict(element.target.value);
        setDistricterr("");
    }

    let manegEye = () => {
        setEye(!eye)
    }

    let loginsavedata = (e) => {
        e.preventDefault();

        if (!fname) {
            setFnameeer("Enter a first name");
        }
        if (!lname) {
            setLnameeer("Enter a last name");
        }
        if (!email) {
            setEmailerr("Enter a valid email");
        }
        if (!number) {
            setNumbererr("Enter a valid phone number");
        }
        if (!address1) {
            setAddress1err1("Enter a address1");
        }
        if (!address2) {
            setAddress1err2("Enter a address2");
        }
        if (!city) {
            setCityerr("Enter a city");
        }
        if (!post) {
            setPosterr("Enter a Post Code");
        }
        if (!district) {
            setDistricterr("Sellect a district");
        }
        if (!division) {
            setDivisionerr("Sellect a division");
        }
        if (!password) {
            setPassworderr("Enter a valid password");
        }
        if (!repassword) {
            setrePassworderr("Enter a valid repassword");
        }
        else if (!/^(?=.*[0-9])/.test(password)) {
            setPassworderr("Password must contain one digit from 1 to 9");
        } else if (!/^(?=.*[a-z])/.test(password)) {
            setPassworderr("Password must contain one lowercase letter");
        }
        else if (!/^(?=.*[A-Z])/.test(password)) {
            setPassworderr("Password must contain one Uppercase letter");
        }
        else if (!/^(?=.*\W)/.test(password)) {
            setPassworderr("Password must contain one special character");
        }
        else if (!/^(?!.* ).{8,16}$/.test(password)) {
            setPassworderr("Password must be no-space and 8-16 characters long");
        }
        else if (!repassword) {
            setrePassworderr("Enter a re password");
        }
        else if (password != repassword) {
            setrePassworderr(`Match the password and repassword : ${eye ? password : ""}`);
        }
        else {
            signupsuccess();
            navigate("/home/account");
        }

    }

    let handlercheck = () => {
        setCheck(!check)
    }
    let header = { "Access-Control-Allow-Origin": "*" };
    let signupsuccess = () => {
        try {
            axios.post("https://66f38f7c71c84d805879181b.mockapi.io/orebi_auth", {
                fname: fname,
                lname: lname,
                email: email,
                number: number,
                address1: address1,
                address2: address2,
                city: city,
                post: post,
                division: division,
                district: district,
                password: password,
                token: uuidv4(),
                header
            }).then(() => {
                console.log("Success");
                localStorage.setItem('token', uuidv4());
            })
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <Container>
                <Breadcumb className='mt-[124px] mb-[127px]' three='hidden' />
                <div className="border-b border-[#f0f0f0] mb-[57px]">
                    <p className='mb-[62px] max-w-[644px] font-normal text-base leading-[187%] text-[#767676] font-roboto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <h1 className='mb-[42px] font-bold text-[2.44rem] leading-none text-[#262626] font-dm'>Your Personal Details</h1>
                <div className="items flex flex-wrap gap-x-10 gap-y-6">
                    <div className="item w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full capitalize font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Email address</label>
                        <input onChange={manegemail} value={email} className='w-full lowercase pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type="email" placeholder='company@domain.com' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{emaileer}</p>
                    </div>
                </div>
                <div className="items flex flex-wrap gap-x-10 gap-y-6">
                    <div className="item capitalize w-[508px] flex flex-wrap mb-[24px] relative">
                        <label className='w-full font-bold text-base leading-[144%] text-[#262626] font-dm mb-3' htmlFor="">Password</label>
                        <input onChange={manegpassword} value={password} className='w-full pb-[17px] outline-none border-b font-normal text-sm text-[#767676]' type={eye ? "text" : "password"} placeholder='Password' />
                        <p className='absolute left-0 top-full text-red-600 font-medium text-sm font-dm'>{passworderr}</p>
                        <div onClick={manegEye}>
                            {
                                eye ? <FaEye className='absolute right-2 top-1/2 cursor-pointer' /> : <FaEyeSlash className='absolute right-2 top-1/2 cursor-pointer' />
                            }
                        </div>
                    </div>
                </div>

                <a href='' onClick={loginsavedata} className='mt-[27px] mb-[140px] py-4 px-[83px] cursor-pointer focus:text-white inline-block bg-[#262626] font-bold text-sm text-center hover:text-white text-[#fff]'>LogIn</a>
            </Container>
        </>
    )
}

export default Login