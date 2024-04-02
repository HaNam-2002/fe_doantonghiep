import {Link} from "react-router-dom";
import {FaFacebookSquare, FaGithub, FaInstagram, FaTrello} from "react-icons/fa";

const NotFound = () => {


    return (
        <div className="grid grid-cols-12 w-full h-screen">
            <div className="col-span-5 flex items-center justify-center ">
                <div className="w-[80%] h-[70%] bg-white flex items-center justify-center transform translate-x-1/3">
                    <h1 className="mr-10 text-[90px] sm:text-[100px] md:text-[150px] lg:text-[250px] font-bold text-gray-300">404</h1>
                </div>
            </div>
            <div className="col-span-7 bg-red-100/40 flex items-center justify-center">
                <div className="w-[70%] ml-0.5">
                    <p className=" text-2xl md:text-4xl lg:text-6xl font-semibold ">Page Not Found:</p>
                    <p className=" text-2xl md:text-4xl lg:text-6xl font-semibold mb-5">our new 404 page, plus 404 designs from the
                        community!</p>
                    <Link to={"/"} relative={"route"} className="underline text-red-400">Go back Home</Link>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                        <div
                            className="w-28 px-4 py-2 rounded-full bg-white border-[0.2px] border-gray-200 flex items-center hover:cursor-pointer">
                            <FaFacebookSquare className="text-blue-600 text-xl"/>
                            <p className="ml-2 text-[16px] font-medium">Visit</p>
                        </div>
                        <div
                            className="w-28 px-4 py-2 rounded-full bg-white border-[0.2px] border-gray-200 flex items-center hover:cursor-pointer">
                            <FaGithub className="text-black text-xl"/>
                            <p className="ml-2 text-[16px] font-medium">Visit</p>
                        </div>
                        <div
                            className="w-28 px-4 py-2 rounded-full bg-white border-[0.2px] border-gray-200 flex items-center hover:cursor-pointer">
                            <FaTrello className="text-blue-700 text-xl"/>
                            <p className="ml-2 text-[16px] font-medium">Visit</p>
                        </div>
                        <div
                            className="w-28 px-4 py-2 rounded-full bg-white border-[0.2px] border-gray-200 flex items-center hover:cursor-pointer">
                            <FaInstagram className="text-blue-600 text-xl"/>
                            <p className="ml-2 text-[16px] font-medium">Visit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}
export default NotFound