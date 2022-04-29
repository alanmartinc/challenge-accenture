import { useTranslation } from "react-i18next";
import "./index.css";

export default function ItemWelcome() {
    const [t] = useTranslation("landing");

    return (
        <div className="welcome">
            <h2>{t("card-welcome.title")} <b className="black-highlight">{t("card-welcome.bold")}</b> <span className="green-highlight">Wolox</span></h2>
            <img src="assets/Img Hero/Ic_ilustra_Hero.png" alt="hero" />
        </div>
    );
}
