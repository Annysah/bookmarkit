import Link from "next/link"
import Header from "../components/Layout/Header"

const Signup = () => {
  return (
    <>
        <Header />
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
            <div className="flex shadow-md">
                <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white" style={{width: "35rem", height: "32rem"}}>
                    <div className="w-96">
                        <h1 className="text-2xl font-semibold">Create an Account</h1>
                        <small className="text-gray-400">Please enter your details to sign up</small>

                        <form className="mt-3">
                            <div className="mb-4">
                                <label className="mb-3 block text-xs font-semibold">Email</label>
                                <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                            </div>

                            <div className="mb-4">
                                <label className="mb-3 block text-xs font-semibold">Password</label>
                                <input type="password" placeholder="*****" className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
                            </div>


                            <div className="mb-4">
                                <button className="mb-4 block w-full text-center text-white-500 bg-blue-500 hover:bg-blue-500 px-2 py-1.5 rounded-md">Sign up</button>
                                <button className="flex flex-wrap justify-center w-full border border-blue-500 hover:border-gray-500 px-2 py-1.5 rounded-md">
                                    <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                                    Sign up with Google
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <span className="text-xs text-gray-400 font-semibold">Already have an account?</span>
                            <Link href="/signin">
                                <a className="text-xs font-semibold text-purple-700">Sign In</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup