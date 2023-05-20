import Users from "../../components/user/Users";
import Head from "next/head";

const UsersPage = () => {
    return (
        <>
            <Head>
                <title>The List Of Users</title>
                <meta name="description" content="The List Of Users"/>
                <link rel="icon" href="/users.svg"/>
            </Head>
            <Users/>
        </>
    );
};

export default UsersPage;