import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";

const AddUserForm = () => {
    const USER_BASE_URL = "http://localhost:8080/api/v1/users";
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);
    const changeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const changeLastName = (e) => {
        setLastName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    const reset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
    }
    const save = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(USER_BASE_URL + "/add", {firstName, lastName, email});
            alert(response.data.message);
            reset();
            await router.push(`/users`);
        } catch (e) {
            if (Array.isArray(e.response.data)) {
                const errors = e.response.data;
                for (let error in errors) {
                    if (!errors[error].success) {
                        alert(errors[error].message);
                    }
                }
            } else {
                alert(e.response.data.message);
            }
            // for ()
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return "Loading...!";
    }
    return (
        <div className={"flex max-w-2xl mx-auto shadow border-b mt-20 justify-center"}>
            <div className={"px-8 py-8"}>
                <div className={"font-thin text-2xl tracking-wider"}>
                    <h1>Add a new employee</h1>
                </div>
                <div className={"items-center justify-center h-14 w-full my-4"}>
                    <label htmlFor={"firstName"} className={"block text-gray-600 text-sm font-normal"}>First
                        Name: </label>
                    <input placeholder={"Please enter your first name!"}
                           className={"h-10 w-96 border-b-2 border-r-2 mt-2 px-2 py-2 outline-0"} type={"text"}
                           name={"firstName"} id={"firstName"} value={firstName} onChange={(e) => changeFirstName(e)}/>
                </div>
                <div className={"items-center justify-center h-14 w-full my-4"}>
                    <label htmlFor={"lastName"} className={"block text-gray-600 text-sm font-normal"}>Last
                        Name: </label>
                    <input placeholder={"Please enter your last name!"}
                           className={"h-10 w-96 border-b-2 border-r-2 mt-2 px-2 py-2 outline-0"} type={"text"}
                           name={"lastName"} id={"lastName"} value={lastName} onChange={(e) => changeLastName(e)}/>
                </div>
                <div className={"items-center justify-center h-14 w-full my-4"}>
                    <label htmlFor={"email"} className={"block text-gray-600 text-sm font-normal"}>Email: </label>
                    <input placeholder={"Please enter your email!"}
                           className={"h-10 w-96 border-b-2 border-r-2 mt-2 px-2 py-2 outline-0"} type={"email"}
                           name={"email"} id={"email"} value={email} onChange={(e) => changeEmail(e)}/>
                </div>
                <div className={"items-center flex justify-around h-14 w-full my-4"}>
                    <button
                        className={"text-green-400 transition border-green-400 border rounded py-1 px-5 mr-2 cursor-pointer hover:bg-green-400 hover:text-white"}
                        onClick={save}
                    >Save
                    </button>
                    <button
                        className={"text-red-400 transition border-red-400 border rounded py-1 px-5 mr-2 cursor-pointer hover:bg-red-400 hover:text-white"}
                        onClick={reset}>Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddUserForm;