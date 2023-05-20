import Head from "next/head";
import AddUserForm from "../../components/user/AddUserForm";

const AddingNewUser = () => {
    return (
        <>
            <Head>
                <title>Adding New User</title>
                <meta name="description" content="Adding New User"/>
                <link rel="icon" href="/addUser.svg"/>
            </Head>
            <AddUserForm/>
        </>
    );
};

export default AddingNewUser;