import User from "./User";
import {useEffect, useState} from "react";
import axios from "axios";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";

const Users = () => {
    const USER_BASE_URL = "http://localhost:8080/api/v1/users";
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);
    const getUsers = async () => {
        try {
            const res = await axios.get(USER_BASE_URL + `?page=${page}&size=10`);
            setUsers(res.data.content);
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }
    const deleteUser = async (e, id) => {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await axios.delete(USER_BASE_URL + `/delete/${id}`);
            if (res.status === 204) alert("The user has been successfully deleted!")
            await getUsers();
        } catch (e) {
            alert(e.response.data.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getUsers();
    }, [])
    if (loading) {
        return "Loading...!"
    }
    return (
        <div className={"container mx-auto my-10"}>
            <div className={"flex shadow border m-5"}>
                <table className={"min-w-full"}>
                    <thead className={"bg-gray-200"}>
                    <tr>
                        <th className={"text-left font-normal text-gray-600 py-3 px-6 uppercase tracking-wider"}>ID</th>
                        <th className={"text-left font-normal text-gray-600 py-3 px-6 uppercase tracking-wider"}>First
                            Name
                        </th>
                        <th className={"text-left font-normal text-gray-600 py-3 px-6 uppercase tracking-wider"}>Last
                            Name
                        </th>
                        <th className={"text-left font-normal text-gray-600 py-3 px-6 uppercase tracking-wider"}>Email</th>
                        <th className={"text-right font-normal text-gray-600 py-3 px-6 uppercase tracking-wider"}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(({id, firstName, lastName, email}) => {
                        return (
                            <User deleteUser={deleteUser} key={id} id={id} firstName={firstName} email={email} lastName={lastName}/>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;