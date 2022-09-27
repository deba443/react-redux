import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { MdEmail, MdTitle } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import './Employee.css'
import { add, edit } from '../action/index'
// import { bindActionCreators } from "redux";

const AddUser = (props) => {
    const dispatch = useDispatch()
    // const data=useSelector((state)=>state.employee)

    const [input, setInput] = useState({
        name: '',
        email: '',
        title: '',
        role: '',
        id: Date.now()
    })
    // const [items,setItems]=useState([])
    const [error, setError] = useState({
        nameError: '',
        emailError: '',
        titleError: '',
        roleError: ''

    })

    const dataAdd = (e) => {
        e.preventDefault()
        props.cancel()
        // props.flag(false)
        dispatch(add(input))
    }
    return (

        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="flex justify-center">
                                <div className="container-input">
                                    <div className="content">
                                        <div className="userName">
                                            <HiUser />
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="input"
                                                onChange={(e) => {
                                                    setInput({
                                                        ...input,
                                                        name: e.target.value,
                                                    });
                                                    setError({ ...error, nameError: "" });
                                                }}
                                                value={input.name}

                                            />
                                        </div>
                                        {error.nameError && (
                                            <div className="text-sm text-red-600 error">
                                                {error.nameError}
                                            </div>
                                        )}
                                    </div>
                                    <div className="content">
                                        <div className="userName">
                                            <MdTitle />
                                            <input
                                                type="text"
                                                placeholder="title"
                                                className="input"
                                                onChange={(e) => {
                                                    setInput({
                                                        ...input,
                                                        title: e.target.value,
                                                    });
                                                    setError({ ...error, emailError: "" });
                                                }}
                                                value={input.title}
                                            />
                                        </div>
                                        {error.emailError && (
                                            <div className="text-sm text-red-600 error">
                                                {error.emailError}
                                            </div>
                                        )}
                                    </div>
                                    <div className="content">
                                        <div className="userName">
                                            <MdEmail />
                                            <input
                                                type="email"
                                                placeholder="email"
                                                className="input"
                                                onChange={(e) => {
                                                    setInput({
                                                        ...input,
                                                        email: e.target.value,
                                                    });
                                                    setError({ ...error, emailError: "" });
                                                }}
                                                value={input.email}
                                            />
                                        </div>
                                        {error.emailError && (
                                            <div className="text-sm text-red-600 error">
                                                {error.emailError}
                                            </div>
                                        )}
                                    </div>
                                    <div className="content">
                                        <div className="userName">
                                            <HiUser />
                                            <input
                                                type="role"
                                                placeholder="role"
                                                className="input"
                                                onChange={(e) => {
                                                    setInput({
                                                        ...input,
                                                        role: e.target.value,
                                                    });
                                                    setError({ ...error, emailError: "" });
                                                }}
                                                value={input.role}
                                            />
                                        </div>
                                        {error.emailError && (
                                            <div className="text-sm text-red-600 error">
                                                {error.emailError}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={dataAdd}>Add User</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={props.cancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AddUser;