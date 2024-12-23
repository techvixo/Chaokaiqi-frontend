import companyImg1 from "../../assets/companyImage/companyImg1.jpg"
import companyImg2 from "../../assets/companyImage/companyImg2.jpg"
import companyImg4 from "../../assets/companyImage/companyImg4.jpg"
import companyImg5 from "../../assets/companyImage/companyImg5.jpg"
import companyImg6 from "../../assets/companyImage/companyImg6.jpg"
import companyImg7 from "../../assets/companyImage/companyImg7.jpg"
import companyImg8 from "../../assets/companyImage/companyImg8.jpg"
import companyImg9 from "../../assets/companyImage/companyImg9.jpg"
import companyImg11 from "../../assets/companyImage/companyImg11.jpg"
import companyImg12 from "../../assets/companyImage/companyImg12.jpg"
import companyImg13 from "../../assets/companyImage/companyImg13.jpg"
import companyImg14 from "../../assets/companyImage/companyImg14.jpg"


import Facebook from "../../assets/logos/Facebook.svg"
import LinkedIn from "../../assets/logos/LinkedIn.svg"
import Email from "../../assets/logos/Email.svg"
import Phone from "../../assets/logos/Phone.svg"
import wechatContact1 from "../../assets/logos/wechatContact1.webp"
import wechatContact2 from "../../assets/logos/wechatContact2.webp"

import "./AboutUs.css"
import Slider from "react-slick";
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const [mobileScreen, setMobileScreen] = useState(false)

    const { t } = useTranslation()

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: mobileScreen ? 2 : 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        pauseOnHover: false,
        rtl: true,
    }

    useEffect(() => {
        const mq = window.matchMedia("(max-width: 768px)");

        if (mq.matches) {
            setMobileScreen(true)
        }

    }, [])


    return (
        <>
            <h1 className="company-font text-center mb-gapping-tape">{t("aboutUs.about")} <br />{t("aboutUs.chaoKaiQi")}</h1>

            <section className="about-first mb-gapping-tape">
                <img src={companyImg4} alt="Chao Kai Qi company Image" />

                <div>
                    <h2 className="mb-16">
                        <span className="chinese-red">{t("aboutUs.ckq")} :</span> <br />
                        <span className="font-24">
                        {t("aboutUs.globallyT")} <br/>
                        {t("aboutUs.Wholesale")}
                        </span>
                    </h2>

                    <p>{t("aboutUs.chaoParFirst")} <a href="mailto:Chaokaiqi@outlook.com">Chaokaiqi@outlook.com</a> or <a href="tel:+86 13798587275">+86 13798587275</a> (WhatsApp). {t("aboutUs.chaoParSecond")}</p>
                </div>
            </section>

            <section className="contact-and-info mb-double-gapping-tape">

                <div className="contact-icons">
                    <div className="qr-code">
                        <img src={wechatContact1} alt="chaikaiqi wechat contact qr code" loading="lazy"/>
                        <img src={wechatContact2} alt="chaikaiqi wechat contact qr code" loading="lazy"/>
                    </div>

                    <div className="flex-column">
                        <a href="https://www.facebook.com/profile.php?id=61555580120146" rel="noreferrer" target="_blank">
                            <img src={Facebook} alt="ChaokaiQi Facebook link" loading="lazy" />
                        </a>

                        <a href="https://www.linkedin.com/company/99058679" rel="noreferrer" target="_blank">
                            <img src={LinkedIn} alt="ChaokaiQi LinkedIn link" loading="lazy" />
                        </a>
                    </div>

                    <div className="flex-column">
                        <a href="mailto:Chaokaiqi@outlook.com">
                            <img src={Email} alt="ChaokaiQi Email link" loading="lazy" />
                        </a>

                        <a href="tel:+8613028899446">
                            <img src={Phone} alt="ChaokaiQi Phone link" loading="lazy" />
                        </a>
                    </div>
                </div>

                <div>
                    <p className="mb-16"><span className="chinese-red">{t("aboutUs.name")} </span>
                        : {t("aboutUs.shenzen")}
                    </p>

                    <p className="mb-16">
                        <span className="chinese-red">{t("aboutUs.email")}</span>
                        : <a href="mailto:Chaokaiqi@outlook.com">Chaokaiqi@outlook.com</a>
                    </p>

                    <p className="mb-16">
                        <span className="chinese-red">
                        {t("aboutUs.phone")}
                        </span>
                        : <a href="tel:+86 13798587275">+86 13798587275 (WhatsApp)</a>
                    </p>

                    <p className="mb-16">
                        <span className="chinese-red">
                        {t("aboutUs.address")}
                        </span>
                        : {t("aboutUs.addressDetail")}
                    </p>

                </div>
            </section>

            <section className="our-story mb-double-gapping-tape">
                <h2 className="company-font text-center mb-gapping-tape">{t("aboutUs.ourStory")}</h2>

                <img className="mb-32" src={companyImg1} alt="Chao Kai Qi compnay story image" loading="lazy" />

                <p className="text-center">{t("aboutUs.storyP")}</p>
            </section>

            <section className="mb-double-gapping-tape">
                <h2 className="company-font text-center mb-gapping-tape">{t("aboutUs.whatS")}</h2>

                <p className="text-center mb-32">{t("aboutUs.at")} <span className="chinese-red">{t("aboutUs.ckq")} </span>, {t("aboutUs.weTake")}</p>

                <div className="mission-cards mb-32">
                    <div className="mission-card">
                        <img src={companyImg8} alt="chao kai qi compnay image" loading="lazy" />
                        <h2 className="font-20 chinese-red">{t("aboutUs.quality")}</h2>
                        <p>{t("aboutUs.qualityP")}</p>
                    </div>

                    <div className="mission-card">
                        <img src={companyImg1} alt="chao kai qi compnay image" loading="lazy" />
                        <h2 className="font-20 chinese-red">{t("aboutUs.wideS")}</h2>
                        <p>{t("aboutUs.widesP")}</p>
                    </div>

                    <div className="mission-card">
                        <img src={companyImg6} alt="chao kai qi compnay image" loading="lazy" />
                        <h2 className="font-20 chinese-red">{t("aboutUs.competitive")}</h2>
                        <p>{t("aboutUs.competitiveP")}</p>
                    </div>
                </div>

                <p className="text-center mobile-text-justify">{t("aboutUs.lastP")}</p>
            </section>

            <section className="image-sliders mb-double-gapping-tape">
                <Slider {...sliderSetting}>
                    <img src={companyImg12} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg2} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg13} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg4} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg5} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg6} alt="Chao kai qi compnay image" loading="lazy" />
                </Slider>

                <Slider {...{ ...sliderSetting, rtl: false }}>
                    <img src={companyImg7} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg14} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg9} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg6} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg11} alt="Chao kai qi compnay image" loading="lazy" />
                    <img src={companyImg12} alt="Chao kai qi compnay image" loading="lazy" />
                </Slider>
            </section>

            <p className="text-center company-font font-24 font-bold">
                {t("aboutUs.thank")} <span className="chinese-red"> {t("aboutUs.chaoKaiQi")}</span> {t("aboutUs.where")}
            </p>
        </>
    );
};

export default AboutUs;  