import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import {
    Input,
    Ripple,
    initTE,
} from "tw-elements";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    initTE({ Input, Ripple });
    // const history = useHistory();
 `   // const navigate = useNavigate();`
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    })

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })
        })
        const data = await res.json();
        if (!data || data.status === 422) {
            window.alert("Something went wrong");
        }
        else {
            window.alert("register successfully");
            console.log("register successfully");
            // history.push("/login")
            // navigate('/');
        }



    }

    return (
        <>
            <section className="h-screen">
                <div className="container h-full px-6 py-24">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <h1 className='lg:text-7xl text-4xl lg:ml-36 ml-10'>Welcome!</h1>
                            <p className='w-3/4 grid justify-center ml-28 mt-10'>You will be able to track of your exoenses all the time! Take a quick look at your expenses by day, week and month </p>
                        </div>
                        <form action="" method='POST'>
                            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                                <h1 className='text-5xl flex justify-center mb-10'>Please Register Yourself</h1>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleHtmlformControlInput3"
                                        name='name'
                                        value={user.name}
                                        onChange={handleInputs}
                                        placeholder="your name" />
                                    <label
                                        htmlFor="exampleHtmlformControlInput3"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                    >Your Name
                                    </label>
                                </div>


                                <div className="relative mb-6 mt-8" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleHtmlformControlInput3"
                                        name='email'
                                        value={user.email}
                                        onChange={handleInputs}
                                        placeholder="Email address" />
                                    <label
                                        htmlFor="exampleHtmlformControlInput3"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                    >Email address
                                    </label>
                                </div>


                                <div className="relative mb-6 mt-8" data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full pl-20 rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleHtmlformControlInput33"
                                        name='password'
                                        value={user.password}
                                        onChange={handleInputs}
                                        placeholder="Password" />
                                    <label
                                        htmlFor="exampleHtmlformControlInput33"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>
                                <div className="relative mb-6 mt-8" data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        className="border-2 border-rounded-xl border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-1 transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:black dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleHtmlformControlInput33"
                                        name='cpassword'
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        placeholder="Password" />
                                    <label
                                        htmlFor="exampleHtmlformControlInput33"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[40px] peer-focus:scale-[1] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                                    >Confirm password
                                    </label>
                                </div>
                                <p className='flex justify-center'>Already have an account?<a href="/Login">Login</a></p>
                                <button
                                    type="submit"
                                    onClick={postData}
                                    className="inline-block lg:ml-52 ml-28 w-1/3  rounded bg-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Register
                                </button>
                            </div>
                        </form>



                    </div>
                </div>
            </section>
        </>
    )
}

export default Register