import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>User management system</title>
                <meta name="description" content="User management system"/>
                <link rel="icon" href="/userManagement.svg"/>
            </Head>
            <div className={"flex items-center justify-center text-3xl text-gray-800"}>Welcome to Users
                Management System!
            </div>
        </>
    )
}
