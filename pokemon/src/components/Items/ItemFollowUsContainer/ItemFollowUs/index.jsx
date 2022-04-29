import { Fragment } from "react";
import "./index.css";

export default function ItemFollowUs() {
    return (
        <Fragment>
            <div className="follow-us">
                <div className="background-image">
                    <h1><span className="green-highlight">350 +</span> <span className="blue-highlight">Woloxers</span></h1>

                    <div>
                        <img src="assets/twitter.png" alt="twitter" />
                        <p>@Wolox</p>
                    </div>

                    <button className="button-secondary">
                        Siguenos
                    </button>
                </div>

                <div className="background-gray">
                    <h2>Trabajamos para <span className="blue-highlight">convertir</span> <span className="green-highlight">ideas</span> en productos.</h2>
                </div>
            </div>
        </Fragment>
    );
}
