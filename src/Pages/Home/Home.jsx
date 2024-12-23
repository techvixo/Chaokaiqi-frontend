import trusted from "../../assets/logos/Shield.svg";
import globalSupplier from "../../assets/logos/GlobalSupplier.svg";

import banner1 from "../../assets/banner/banner.webp";
import banner2 from "../../assets/banner/banner2.webp";
import banner3 from "../../assets/banner/banner3.webp";

import mobileBanner1 from "../../assets/banner/mobileBanner.webp"
import mobileBanner2 from "../../assets/banner/mobileBanner2.webp"
import mobileBanner3 from "../../assets/banner/mobileBanner3.webp"

import productImage1 from "../../assets/ProductImage/product1.webp"
import productImage2 from "../../assets/ProductImage/product2.webp"
import productImage3 from "../../assets/ProductImage/product3.webp"
import productImage4 from "../../assets/ProductImage/product4.webp";

import chineseHouse from "../../assets/decoration/chinese-house.png";

import companyImg1 from "../../assets/companyImage/companyImg2.jpg"
import companyImg2 from "../../assets/companyImage/companyImg6.jpg"
import companyImg3 from "../../assets/companyImage/companyImg3.jpg"
import companyImg4 from "../../assets/companyImage/companyImg4.jpg"
import companyImg5 from "../../assets/companyImage/companyImg7.jpg"

import apple from "../../assets/compnayLogo/apple.svg"
import asus from "../../assets/compnayLogo/asus.svg"
import blackberry from "../../assets/compnayLogo/blackberry.svg"
import htc from "../../assets/compnayLogo/htc.svg"
import huawei from "../../assets/compnayLogo/huawei.svg"
import lenovo from "../../assets/compnayLogo/lenovo.svg"
import lg from "../../assets/compnayLogo/lg.svg"
import motorola from "../../assets/compnayLogo/motorola.svg"
import nokia from "../../assets/compnayLogo/nokia.svg"
import samsung from "../../assets/compnayLogo/samsung.svg"
import sony from "../../assets/compnayLogo/sony.svg"


import "./Home.css"
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { toast } from "react-toastify";
import instance from "../../axiosInstance";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";


const Home = () => {
    const [products, setProducts] = useState([])
    const [mobileScreen, setMobileScreen] = useState(false)

    const { t, i18n } = useTranslation()

    const sliderSetting = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        pauseOnHover: false,
    }

    const branSliderSetting = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: !mobileScreen,
        verticalSwiping: !mobileScreen,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,

    }

    useEffect(() => {
        instance.get("/random-products/12").then(data => {
            setProducts(data.data)
        }).catch(error => {
            console.log(error)
        })

        // checking the device is phone or desktop 
        const mq = window.matchMedia("(max-width: 768px)");

        // preloading image and useEffect works after first render before the paint 
        const img1 = new Image()

        if (mq.matches) {
            setMobileScreen(true)
            img1.src = mobileBanner1
        }else{
            img1.src = banner1
        }

        return () => {
            if (img1) {
              img1.src = ''; // Clear the src to release memory
            }
          };


    }, [])

    const handleInfoSubmit = (e) => {
        e.preventDefault()

        const customerData = {
            name: e.target.name.value,
            country: e.target.country.name,
            organization: e.target.organization.value,
            email: e.target.email.value,
            phone: e.target.mobile.value,
            note: e.target.note.value,
        }

        instance.post("/mail-and-orders/mail", { customerData })
            .then()
            .catch(error => {
                console.log(error)
            })


        e.target.reset()

        const message = i18n.resolvedLanguage === "en"? "Thanks for your input. We will get back to you soon ! Hope you have a good day." : "谢谢。我们会尽快给您回复！希望您今天过得愉快。"

        toast(message)
    }

    const handleContactNow = () => {
        document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" })
    }

    return (
        <>
            <motion.button whileHover={{ scale: "1.05" }} whileTap={{ scale: .95 }} id="contact-now" onClick={handleContactNow}>
            {t("home.contactNow")}
            </motion.button>

            <section id="landing-screen">
                <div className="main-content">
                    <div className="title-container">
                        <h1>
                            <Trans i18nKey="home.h1FirstLine">
                                Global Wholesale <span className="chinese-red">supplier Of </span>
                            </Trans>
                            <br />

                            <Trans i18nKey="home.h1SecondLine">
                                Tablet / Phone <span className="chinese-red">Case-Cover</span>
                            </Trans>
                            <br />

                            <Trans i18nKey="home.h1ThirdLine">
                                From <span className="chinese-red">China</span>
                            </Trans>
                        </h1>

                        <div className="flex">
                            <div className="text-center">
                                <h2 className="font-20 mb-8">{t("home.since")} <br /> <span className="chinese-red">2013</span></h2>
                                <img className="logo" src={trusted} alt="truested supplier" />
                            </div>

                            <div className="text-center">
                                <h2 className="font-20 mb-8">{t("home.overseas")}<br /> <span className="chinese-red">4M {t("home.units")}</span></h2>
                                <img className="logo" src={globalSupplier} alt="Global supplier" />
                            </div>
                        </div>
                    </div>

                    <div style={{ height: mobileScreen ? "" : "275px", borderRadius: "32px", overflow: "hidden" }}>

                        <Slider className="slider-main" {...sliderSetting}>
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}

                                // src={mobileScreen ? mobileBanner1 : banner} 
                                srcSet={`${mobileBanner1} 480w, ${banner1} 800w`}
                                sizes="(max-width: 550px) 10vw, 800px"
                                src={banner1}

                                alt="ChaokaiQi company banner"
                            />
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                // src={mobileScreen ? mobileBanner2 : banner2} 
                                srcSet={`${mobileBanner2} 480w, ${banner2} 800w`}
                                sizes="(max-width: 550px) 10vw, 800px"
                                src={banner2}

                                alt="chaoKaiQi company banner"
                            />
                            <img
                                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                                // src={mobileScreen ? mobileBanner3 : banner3} 
                                srcSet={`${mobileBanner3} 480w, ${banner3} 800w`}
                                sizes="(max-width: 550px) 10vw, 800px"
                                src={banner3}

                                alt="ChaoKaiQi company banner"
                            />
                        </Slider>
                    </div>
                </div>

                <div className="brands">
                    <h2 className="font-20 text-center mb-32">{t("home.brands")} <br /> {t("home.weCover")}</h2>

                    <div className="brands-logo">
                        <Slider {...branSliderSetting}>
                            <img src={apple} alt="apple phone brands" />
                            <img src={asus} alt="supported phone brands" />
                            <img src={blackberry} alt="supported phone brands" />
                            <img src={htc} alt="supported phone brands" />
                            <img src={huawei} alt="supported phone brands" />
                            <img src={lenovo} alt="supported phone brands" />
                            <img src={lg} alt="supported phone brands" />
                            <img src={motorola} alt="supported phone brands" />
                            <img src={nokia} alt="supported phone brands" />
                            <img src={samsung} alt="supported phone brands" />
                            <img src={sony} alt="supported phone brands" />
                        </Slider>
                    </div>
                </div>
            </section>

            <section className="products-section">
                <div className="d-flex-between">
                    <h2>
                        <Trans i18nKey="home.outTopProducts">
                            Our <span className="chinese-red">Top</span> Products
                        </Trans>
                    </h2>
                    <h2>{t("home.atBestPrice")}</h2>
                </div>

                <div className="top-product-container">
                    {products.map((product) => <SingleProduct key={product._id} product={product}></SingleProduct>)}
                </div>
            </section>

            <Link id="show-all-products-btn" to="/all-wholesale-tablet-covers/all">
            {t("home.showAllProducts")}
            </Link>

            <section className="contact-section" id="contact-section">
                <div className="d-flex-between">
                    <h2>{t("home.getToKnow")}</h2>
                    <h2 className="chinese-red">{t("home.special")}</h2>
                </div>

                <div className="content">

                    <div className="photo-slider">
                        <Slider {...sliderSetting}>
                            <img src={productImage1} alt="cover Image by chaokaiqi" loading="lazy" />
                            <img src={productImage2} alt="cover Image by chaokaiqi" loading="lazy" />
                            <img src={productImage3} alt="cover Image by chaokaiqi" loading="lazy" />
                            <img src={productImage4} alt="cover Image by chaokaiqi" loading="lazy" />
                        </Slider>
                    </div>

                    <div className="form-and-info">
                        <div className="info">
                            <p className="font-20 info-blue">{t("home.weWill")}</p>

                            <div className="list">
                                <div className="info-point"></div>
                                <p>{t("home.pList")}</p>
                            </div>
                            <div className="list">
                                <div className="info-point"></div>
                                <p>{t("home.sPrice")}</p>
                            </div>
                            <div className="list">
                                <div className="info-point"></div>
                                <p>{t("home.trans")}</p>
                            </div>
                            <div className="list">
                                <div className="info-point"></div>
                                <p>{t("home.anyQ")}</p>
                            </div>
                            <div className="list">
                                <div className="info-point"></div>
                                <p>{t("home.terms")}</p>
                            </div>

                            <h2 className="company-font">{t("home.chaoKaiQi")}</h2>

                        </div>

                        <div className="form-container home-form">
                            <form onSubmit={handleInfoSubmit}>
                                <div>
                                    <label htmlFor="name">{t("home.name")} *</label>
                                    <input id="name" name="name" type="text" required />
                                </div>

                                <div>
                                    <label htmlFor="country">{t("home.country")} *</label>
                                    <input id="country" name="country" type="text" required />
                                </div>

                                <div>
                                    <label htmlFor="organization">{t("home.org")} *</label>
                                    <input id="organization" name="organization" type="text" required />
                                </div>

                                <div>
                                    <label htmlFor="email">{t("home.email")} *</label>
                                    <input id="email" name="email" type="email" required />
                                </div>

                                <div>
                                    <label htmlFor="mobile">{t("home.phone")} *</label>
                                    <input id="mobile" name="mobile" type="text" required />
                                </div>

                                <div>
                                    <label htmlFor="note">{t("home.specialN")}</label>
                                    <textarea name="note" id="note" cols="22" rows="4"></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="fw-button"
                                    whileTap={{ scale: 0.95 }}
                                >{t("home.submit")}</motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-us mb-gapping-tape">
                <h2 className="company-font text-center font-bold">
                {t("home.about")} <br />
                {t("home.chaoKaiQi")}
                </h2>

                <div className="content mb-32">
                    <div className="image-container">
                        <img src={chineseHouse} alt="chinese house decoration" loading="lazy" />
                    </div>

                    <div className="info">
                        <h3 className="font-24 mb-16">
                            <span className="chinese-red">
                            {t("home.ckq")}
                            </span> : {t("home.golbally")}
                        </h3>
                        <p className="mb-16"><span className="chinese-red">{t("home.name")} </span>
                            : {t("home.shenzen")}
                        </p>

                        <p className="mb-16">
                            <span className="chinese-red">{t("home.email")}</span>
                            : <a href="mailto:Chaokaiqi@outlook.com">Chaokaiqi@outlook.com</a>
                        </p>

                        <p className="mb-16">
                            <span className="chinese-red">
                            {t("home.pSm")}
                            </span>
                            : <a href="tel:+86 13798587275">+86 13798587275 (WhatsApp)</a>
                        </p>

                        <p className="mb-16">
                            <span className="chinese-red">
                            {t("home.address")}
                            </span>
                            : {t("home.addressDetail")}
                        </p>

                        <p>
                        {t("home.aboutP")}
                        </p>

                    </div>
                </div>

                <div className="company-images">
                    <img src={companyImg3} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg4} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg2} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg1} alt="Chaokaiqi compnay image" loading="lazy" />
                    <img src={companyImg5} alt="Chaokaiqi compnay image" loading="lazy" />
                </div>
            </section>
        </>
    );
};

export default Home;