import exImg from "../../assets/companyImage/companyImg15.jpg"

import "./ReturnPolicy.css"
import { useTranslation } from "react-i18next";

const ReturnPolicy = () => {
    const {t} = useTranslation()
    return (
        <section className="return-policy">
            <h1>{t("return.title")}</h1>
            <img className="main-img" src={exImg} alt="happy customer returning product to ChaoKaiQi" />

            <h2>{t("return.returnN")}</h2>
            <p>{t("return.returnP")}
            </p>

            <h2>{t("return.returnC")}</h2>
            <p>{t("return.returnCP")}
            </p>

            <h2>{t("return.refund")}</h2>
            <p>{t("return.refundP")}
            </p>




        </section>
    );
};

export default ReturnPolicy;