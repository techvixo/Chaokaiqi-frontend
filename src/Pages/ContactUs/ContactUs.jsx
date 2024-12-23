import { toast } from "react-toastify";
import "./ContactUs.css"
import { motion } from "framer-motion"
import instance from "../../axiosInstance";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
    const { t, i18n } = useTranslation()

    const handleInfoSubmit = (e) => {
        e.preventDefault()

        const customerData ={
            name: e.target.name.value,
            country: e.target.country.name,
            organization: e.target.organization.value,
            email: e.target.email.value,
            phone: e.target.mobile.value,
            note: e.target.note.value,
        }

        instance.post("/mail-and-orders/mail", {customerData})
        .then()
        .catch(error =>{
            console.log(error)
        })

        const message = i18n.resolvedLanguage === "en"? "Thank you for contacting us. We will get back to you shortly" : "感谢您与我们联系。我们将尽快给您回复"

        toast(message)
        e.target.reset()
    }


    return (
        <section id="contact-us">
            <div className="info-container">
                <h2 className="company-font mb-16">{t("contactUs.query")}</h2>

                <p className="point">{t("contactUs.getToKnow")}</p>
                <p className="point">{t("contactUs.doQ")}</p>
                <p className="point">{t("contactUs.wantT")}</p>
                <p className="point">{t("contactUs.ourT")}</p>
                <p className="point">{t("contactUs.bookA")}</p>
                <p className="point">{t("contactUs.anyP")}</p>

                <div className="info">
                    <p className="font-24 info-blue mb-32 mt-gapping-tape">{t("contactUs.weWill")}</p>


                    <p className="point">{t("contactUs.pList")}</p>

                    <p className="point">{t("contactUs.sPrice")}</p>

                    <p className="point">{t("contactUs.trans")}</p>

                    <p className="point">{t("contactUs.anyQ")}</p>

                    <p className="point">{t("contactUs.terms")}</p>


                    <h2 className="company-font text-center mt-32">{t("contactUs.chaoKaiQi")}</h2>

                </div>
            </div>

            <div className="contact-form-container">
                <h1 className="company-font mb-16">{t("contactUs.contact")}</h1>
                <form onSubmit={handleInfoSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">{t("contactUs.name")} *</label>
                        <input id="name" name="name" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="country">{t("contactUs.country")} *</label>
                        <input id="country" name="country" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="organization">{t("contactUs.org")} *</label>
                        <input id="organization" name="organization" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="email">{t("contactUs.email")} *</label>
                        <input id="email" name="email" type="email" required />
                    </div>

                    <div>
                        <label htmlFor="mobile">{t("contactUs.phone")} *</label>
                        <input id="mobile" name="mobile" type="text" required />
                    </div>

                    <div>
                        <label htmlFor="note">{t("contactUs.specialN")}</label>
                        <textarea name="note" id="note" cols="22" rows="4"></textarea>
                    </div>

                    <motion.button
                        type="submit"
                        className="fw-button"
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ scale: 1.05 }}
                    >{t("contactUs.submit")}</motion.button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;