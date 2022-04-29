import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="logo">
                <img src="assets/logo_full_color.svg" alt="wolox-navbar" />
            </div>

            <div className="item-list">
                <Link to={`/`}>
                    Inicio
                </Link>

                <Link to={"/"}>
                    Beneficios
                </Link>

                <Link to={"/login"}>
                    <button className="button-secondary">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    );
}