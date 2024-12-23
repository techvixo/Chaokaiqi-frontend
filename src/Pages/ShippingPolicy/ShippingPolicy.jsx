import exImg from "../../assets/companyImage/companyImg15.jpg"
import usaIcon from "../../assets/logos/Usa.svg"
import globeIcon from "../../assets/logos/Globe.svg"

import { useTranslation } from "react-i18next"

import "./ShippingPolicy.css"

const ShippingPolicy = () => {
    const {t} = useTranslation()

    return (
        <section className="shipping-policy">
            <h1>{t("shipping.title")}</h1>
            <img className="main-img" src={exImg} alt="Shipping policy image of ChaoKaiQi" />

            <div className="shipping-info">
                <div>
                    <img src={usaIcon} alt="shipping to USA" />
                    <h2>{t("shipping.forU")} <br />{t("shipping.bDays")} </h2>
                </div>
                <div>
                    <img src={globeIcon} alt="global shipping" />
                    <h2>{t("shipping.forG")} <br />{t("shipping.bDG")}</h2>
                </div>
            </div>

            <small> <span>{t("shipping.note")}</span> {t("shipping.noteP")}</small>

            <p>{t("shipping.lastP")}</p>

        </section>
    );
};

export default ShippingPolicy;