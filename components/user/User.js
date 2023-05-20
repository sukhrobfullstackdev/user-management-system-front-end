import Link from "next/link";

const User = ({id,email, firstName, lastName, deleteUser}) => {
    return (
        <tr className={"bg-white transition hover:bg-gray-100"}>
            <td className={"text-left font-thin whitespace-nowrap text-sm text-gray-500 py-4 px-6 hover:text-black transition"}>{id}</td>
            <td className={"text-left font-thin whitespace-nowrap text-sm text-gray-500 py-4 px-6 hover:text-black transition"}>{firstName}</td>
            <td className={"text-left font-thin whitespace-nowrap text-sm text-gray-500 py-4 px-6 hover:text-black transition"}>{lastName}</td>
            <td className={"text-left font-thin whitespace-nowrap text-sm text-gray-500 py-4 px-6 hover:text-black transition"}>{email}</td>
            <td className={"text-right font-thin whitespace-nowrap text-sm text-gray-500 py-4 px-6 hover:text-black transition"}>
                <button
                    onClick={(e)=> deleteUser(e, id)}
                    className={"text-red-400 transition border-red-400 border rounded py-1 px-5 mr-2 cursor-pointer hover:bg-red-400 hover:text-white"}
                >Delete
                </button>
                <button
                    className={"text-yellow-400 transition border-yellow-400 border rounded py-1 px-5 cursor-pointer hover:bg-yellow-400 hover:text-white"}>
                    <Link href={`users/edit/${id}`}><a>Edit</a></Link>
                </button>
            </td>
        </tr>
    );
};

export default User;