import exImg from "../../assets/companyImage/companyImg15.jpg"

import "../ReturnPolicy/ReturnPolicy.css"
import { useTranslation } from "react-i18next";

const PaymentMethods = () => {
    const {t} = useTranslation()
    return (
        <section className="return-policy">
            <h1>{t("paymentM.title")}</h1>
            <img className="main-img" src={exImg} alt="happy customer buying tablet cover from ChaoKaiQi" />

            <h2>{t("paymentM.major")}</h2>
            <p>{t("paymentM.majorP")}
            </p>

            <h2>{t("paymentM.alipay")}</h2>
            <p>{t("paymentM.alipayP")}
            </p>

            <h2>{t("paymentM.wechat")}</h2>
            <p>{t("paymentM.wechatP")}
            </p>

            <small>{t("paymentM.weUnders")}</small>


            <h2 className="mt-16">{t("paymentM.hereAre")}</h2>
            <ul style={{marginLeft:"1rem"}} className="mb-32">
                <li>{t("paymentM.security")}</li>
                <li>{t("paymentM.conve")}</li>
                <li>{t("paymentM.speed")}</li>
            
            </ul>

            <p>{t("paymentM.forF")} <a style={{textDecoration:"underline"}} href="mailto:Chaokaiqi@outlook.com">Chaokaiqi@outlook.com</a></p>






        </section>
    );
};

export default PaymentMethods;