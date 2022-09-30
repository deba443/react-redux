import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImUserTie } from "react-icons/im";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router";
const FullScreen = () => {
    const navigate = useNavigate()
    return (
        <div class="w-full h-screen bg-zinc-900">
            <div class="relative text-gray-300 top-3 cursor-pointer" style={{ left: "98vw" }} onClick={(e) => {
                e.preventDefault()
                console.log('deba')
                navigate('/welcome')
            }}><ImCross /></div>
            <div class='flex bg-zinc-900 text-gray-300 gap-8 relative top-1/3' style={{ left: "44%" }}>
                <div class="flex items-center justify-center flex-col gap-2 cursor-pointer" onClick={(e) => {
                    e.preventDefault();
                    navigate('/welcome')

                }}>
                    <AiFillHome />
                    <p>Home</p>
                </div>
                <div class="flex items-center justify-center flex-col gap-2 cursor-pointer" onClick={(e) => {
                    e.preventDefault()
                    navigate('/employee')
                }}>
                    <ImUserTie />
                    <p>Employee</p>
                </div>
            </div>

        </div>
    )
}
export default FullScreen;