import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import logo from '../../images/hd-logo.png';
import { userRegisterApi } from '../../features/actions/authactions';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Register = ({ setToggle }) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    // ========================
    // Register page onsbmit
    // ========================
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await dispatch(userRegisterApi(data));
            if (response) {
                toast.success("Register Successfully", { theme: "dark" })
                console.log("user is resgister");
            }
        } catch (error) {
            console.log("This is error for sign up", error);
            toast.error(error.response?.message || "Register Failed", {
                style: {
                    background: "#000000",
                    color: "#FFFFFF",
                }
            });
        } finally {
            setLoading(false);
            reset();
        }
    }

    return (
        <div className='h-screen w-full bg-black flex items-center justify-center' >

            <div className='h-[90px] w-[260px] absolute top-2' >
                <img className='hover:scale-[1.1] transition' src={logo} alt="company logo" />
            </div>
            <div className='w-full max-w-3xl flex border-2 border-[#102A43] rounded shadow-xl shadow-[#102A43] relative z-[99]' >

                {/* Register Form  */}
                <motion.div initial={{ x: -100 }} animate={{ x: 0 }}
                    className='w-full z-[99] bg-black border-r-2 border-[#102A43] ' >
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5 space-y-4' >
                        <h1 className='text-sky-500 text-center font-semibold text-lg' >Create an Account</h1>

                        {/* Full Name */}
                        <div className='flex flex-col px-5 py-1 space-y-1' >
                            <label className='text-white text-sm hover:scale-[1.1] transition' for="fullName" >Full Name</label>
                            <input
                                {...register("fullName", {
                                    required: "Full name is required",
                                    minLength: { value: 3, message: "Atleat 3 charater is required" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.fullName ? "border-red-500" : "border-white"}`}
                                id='fullName'
                                type="text" />
                            {errors.fullName && (
                                <p className='text-red-500 text-[10px]' >{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* mobile */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm hover:scale-[1.1] transition' for="mobile" >Mobile</label>
                            <input
                                {...register("mobile", {
                                    required: "Mobile number is required",
                                    pattern: { value: /^[0-9]{10}$/, message: "10 digit are required" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.mobile ? "border-red-500 " : "border-white"}`}
                                id='mobile'
                                type="tel" />
                            {errors.mobile && (
                                <span className='text-red-500 text-[10px]' >{errors.mobile.message}</span>
                            )}
                        </div>

                        {/* email */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm hover:scale-[1.1] transition' for="email" >Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.email ? "border-red-500" : "border-white"}`}
                                id='email'
                                type="email" />
                            {errors.email && (
                                <span className='text-red-500 text-[10px]' >{errors.email.message}</span>
                            )}
                        </div>

                        {/* password */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm hover:scale-[1.1] transition' for="password" >Password</label>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Atleat 8 correct is required" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.password ? "border-red-500" : "border-white"}`}
                                id='password'
                                type="password" />
                            {errors.password && (
                                <span className='text-red-500 text-[10px]' >{errors.password.message}</span>
                            )}
                        </div>

                        <button disabled={loading} type='submit'
                            className='text-black bg-[#102A43] text-sm font-bold px-4 py-2 rounded hover:bg-sky-500 hover:scale-[1.1] transition '
                        >{loading ? "...creating account" : "sign up"}</button>
                    </form>

                    {/* mobile login page switch button */}
                    <div className='text-white md:hidden '>
                        <p>Already an account?{" "}
                            <button onClick={() => setToggle((perv) => perv)} type='button' className='text-emerald-500' >
                                Login
                            </button>
                        </p>
                    </div>
                </motion.div>

                {/* Information div */}
                <div className='w-full hidden md:flex flex-col items-center justify-center p-10 bg-black z-[99] relative' >

                    {/* box rotater */}
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity }}
                        className='h-full w-full hidden md:block absolute top-0 right-0 bg-[#102A43] rounded z-[9]' ></motion.div>
                    <div className='text-white z-[99] '>
                        <motion.h1 initial={{ y: -100 }} animate={{ y: -10 }}
                            className='text-black font-bold text-2xl text-center hover:scale-[1.1] transition ' >Welcome!</motion.h1>

                        {/* Switch to Login page button */}
                        <motion.p initial={{ x: 100 }} animate={{ x: 0 }}
                        >Already an account?{" "}
                            <button
                                onClick={() => setToggle((perv) => !perv)}
                                type='button' className='text-sky-400 font-bold underline hover:scale-[1.1] transition' >
                                Login
                            </button>
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;