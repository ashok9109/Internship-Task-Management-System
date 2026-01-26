import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import logo from '../../images/hd-logo.png'
import { userLoginApi } from '../../features/actions/authactions';
import { toast } from 'react-toastify';
import { useState } from 'react';


const Login = ({ setToggle }) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    // ========================
    // Login page onsbmit
    // ========================
    const onSubmit = async (data) => {
        setLoading(true)
        try {
            const response = await dispatch(userLoginApi(data));
            if (response) {
                toast.success("Login successfully", {
                    style: {
                        color: "#FFFFFF",
                        background: "#0F172B"
                    }
                })
                console.log('user is login');
            }
        } catch (error) {
            console.log("this is error for login", error)
            toast.error(error.message || "Login failed", {
                style: {
                    background: "#000000",
                    color: "#FFFFFF",
                }
            })
        } finally {
            setLoading(false);
            reset();
        };
    };

    return (
        <div className='min-h-screen w-full bg-black flex flex-col items-center justify-center' >

            <div className='h-[90px] w-[260px] absolute top-2' >
                <img className='hover:scale-[1.1] transition' src={logo} alt="company logo" />
            </div>

            <div className='w-full max-w-3xl flex border-2 border-[#102A43] rounded shadow-xl shadow-[#102A43] relative z-[99]' >

                {/* Login Form  */}
                <motion.div initial={{ x: -100 }} animate={{ x: 0 }}
                    className='w-full z-[99] bg-black ' >
                    <form onSubmit={handleSubmit(onSubmit)} className='px-14 py-15 space-y-4 border-r-2 border-[#102A43]' >
                        <h1 className='text-sky-500 text-center font-semibold text-lg' >Login </h1>

                        {/* email */}
                        <div className='flex flex-col px-5 py-1 space-y-3' >
                            <label className='text-white text-sm hover:scale-[1.1] transition' >Email</label>
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
                        <div className='flex flex-col px-5 py-1 space-y-4' >
                            <label className='text-white text-sm hover:scale-[1.1] tansition' >Password</label>
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
                            className='text-black bg-[#102A43] scale[1.1] text-sm font-bold px-4 py-2 rounded hover:bg-sky-500  hover:scale-[1.1] transition  '
                        >{loading ? "...Loading" : "Login"}</button>
                    </form>

                    {/* mobile login page switch button */}
                    <div className='text-white md:hidden '>
                        <p>Already an account?{" "}
                            <button onClick={() => setToggle((perv) => !perv)} type='button' className='text-emerald-500' >
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
                            className='text-black hover:scale-[1.1] transition font-bold text-2xl text-center' >Welcome! </motion.h1>

                        {/* Switch to Login page button */}
                        <motion.p initial={{ x: 100 }} animate={{ x: 0 }}
                        >Already an account?{" "}
                            <button onClick={() => setToggle((perv) => !perv)}
                                type='button' className='text-sky-500 font-bold underline hover:scale-[1.1] transition ' >
                                Sign up
                            </button>
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;