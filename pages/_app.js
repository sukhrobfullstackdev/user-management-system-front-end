import "../styles/globals.css"
import Navbar from "../components/main/Navbar";

function MyApp({Component, pageProps}) {
    if (Component.getLayout) Component.getLayout(<Component {...pageProps} />);
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
