import { Fragment } from "react";
import "./index.css";

export default function ItemMoreInfo() {
    return (
        <Fragment>
            <h2>Gracias por <span className="blue-highlight">completar el ejercicio</span></h2>
            <h3>Te invitamos a ver mas información</h3>
            <button className="button-primary">
                Conocer más
            </button>
        </Fragment>
    );
}
