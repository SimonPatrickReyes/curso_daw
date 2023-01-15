import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LayoutPublic = () => {
    return (
        <div>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default LayoutPublic;
