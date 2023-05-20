import Link from "next/link";

const Navbar = () => {
    return (
        <div className={"bg-gray-800 h-16 px-5 container flex justify-between"}>
            <div className={"flex items-center"}>
                <p className={"text-white font-normal flex-auto"}>User Management System</p>
            </div>
            <div className={"flex items-center"}>
                <ul className={"flex "}>
                    <li className={"mr-5"}>
                        <Link href="/">
                            <a className={"font-thin text-white"}>Home</a>
                        </Link>
                    </li>
                    <li className={"mr-5"}>
                        <Link href={"/users"}>
                            <a className={"font-thin text-white"}>Users</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/users/add"}>
                            <a className={"font-thin text-white"}>Add New User</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;