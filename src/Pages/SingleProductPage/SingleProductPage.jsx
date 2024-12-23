import { useContext, useEffect, useState } from "react";
import "./SingleProductPage.css"
import Slider from "react-slick";
import { motion } from "framer-motion"

import star from "../../assets/logos/Star.svg"

import Alipay from "../../assets/logos/Alipay.svg"
import WeChat from "../../assets/logos/WeChat.svg"
import Visa from "../../assets/logos/Visa.svg"
import MasterCard from "../../assets/logos/MasterCard.svg"
import AmericanExpress from "../../assets/logos/AmericanExpress.svg"

import truck from "../../assets/logos/truck.svg"
import plane from "../../assets/logos/plane.svg"
import ship from "../../assets/logos/ship.svg"
import globeBlack from "../../assets/logos/globeBlack.svg"
import box from "../../assets/logos/Box.svg"

import chaoKaiQi from "../../assets/compnayLogo/chaoKaiQi.png"

import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { toast } from "react-toastify";
import instance from "../../axiosInstance";
import { useParams } from "react-router-dom";
import { Ccontext } from "../../CartContext";
import { useTranslation } from "react-i18next"; 


const SingleProductPage = () => {
    const [product, setProduct] = useState({})
    const [mainImage, setMainImage] = useState("")

    const [randomProducts, setRandomProducts] = useState([])

    const {t, i18n} = useTranslation()

    // this section for order when add to cart 

    const {setCartData} = useContext(Ccontext)

    const [selectedColor, setSelectedColor] = useState({
        name: "all",
        colorValue: "",
        imgLink: ""
    })

    const { id } = useParams()

    // collect 4 random products to show 
    useEffect(() => {
        instance.get(`/product/${id}`).then(data => {
            const p = data.data

            setProduct(p)
            setMainImage(p.mainImage)
        }).catch(error => {
            console.log(error)
        })

        instance.get("/random-products/4").then(data => {
            setRandomProducts(data.data)
        }).catch(error => {
            console.log(error)
        })

    }, [id])


    const slickSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    }

    const handleSelectedColor = (val) => {
        if (val.name === selectedColor.name) {
            setSelectedColor({
                name: "all",
                colorValue: "",
                imgLink: ""
            })
            setMainImage(product?.mainImage)
        } else {
            setSelectedColor(val)
            setMainImage(val?.imgLink)
        }
    }

    const handleAddToCard = (e) => {
        e.preventDefault()
        let orderQuantity = e.target.orderQuantity.value ? e.target.orderQuantity.value : product.minimOrderQuantity

        

        // saving order items to local storage 
        const cartItems = JSON.parse(localStorage.getItem("chaoKaiQi-cart")) ?? []

        const orderedProduct = {
            productName : product.productName,
            coverName: product.coverName,
            brand: product.brand,
            priceperUnit: product.pricePerUnit,
            totalPrice: (product.pricePerUnit * orderQuantity).toFixed(2),
            mainImage : mainImage,
            orderAmount : orderQuantity,
            color: selectedColor,
            productGrossWeight: product.productGrossWeight,
            productSize: product.productSize,
            productId: product._id,
            minimOrderQuantity : product?.minimOrderQuantity,
        }

        cartItems.push(orderedProduct)
        
        localStorage.setItem("chaoKaiQi-cart", JSON.stringify(cartItems))

        setCartData(cartItems)

        e.target.reset()

        const message = i18n.resolvedLanguage === "en"? `Added to cart: ${product?.productName} cover | ${orderQuantity} units | color: ${selectedColor?.name}` : "产品已添加到购物车"

        toast(message,
            {
                position: "top-center",
                autoClose: 4000,
            })
    }

    return (
        <>
            <section id="singleProductPage" className="mb-double-gapping-tape">

                <div className="image-section">
                    <div className="image-div">

                        <img id="cover-main-image" src={mainImage + ".jpg"} alt={product?.productName} />

                        <div className="slick-slider-div">
                            <Slider {...slickSettings}>

                                {product?.imageArray?.map((img, ind) =>
                                    <img key={ind} src={img + ".jpg"} alt={product?.productName} onClick={() => setMainImage(img)} />
                                )}
                            </Slider>
                        </div>

                    </div>

                </div>

                <div className="content-section">
                    <h1 className="mb-4"><span className="chinese-red">{product?.productName}</span> {t("singleProductPage.cover")}</h1>
                    <h2 className="font-16 mb-4"> <span className="title">{t("singleProductPage.coverName")}</span> : {t(`coverName.${product?.coverName}`)}</h2>
                    <h2 className="font-24 mb-4">$ {product?.pricePerUnit} USD <span className="title">{t("singleProductPage.perUnit")}</span></h2>

                    <p className="review-stars mb-8">
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                        <img src={star} alt="client review star" />
                    </p>

                   <p className="mb-16">{t("singleProductPage.description")}</p>

                    <h2 className="font-14 mb-4"> <span className="title">{t("singleProductPage.size")}</span> : {product?.productSize} cm</h2>

                    <h2 className="font-14 mb-4"> <span className="title">{t("singleProductPage.weight")}</span> : {product?.productGrossWeight} g</h2>

                    <h2 className="font-14 mb-16"> <span className="title">{t("singleProductPage.minimum")}</span> : {product?.minimOrderQuantity} {t("singleProductPage.units")}</h2>

                    <h2 className="company-font font-bold font-32 mb-8 colors-label">{t("singleProductPage.colors")}</h2>

                    <div className="color-buttons mb-32 colors-label">
                        {
                            product?.colors ?

                                Object.values(product?.colors).map((val, ind) =>
                                    <motion.button
                                        key={ind}
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        style={
                                            {
                                                background: val?.colorValue,
                                                border: (val.name === selectedColor.name) ? "5px solid white" : "1px solid",
                                            }
                                        }

                                        onClick={() => handleSelectedColor(val)}
                                    ></motion.button>
                                )
                                :
                                ""
                        }
                    </div>

                    <form onSubmit={handleAddToCard} className="order-amount-form mb-gapping-tape">
                        <label className="font-24" htmlFor="orderQuantity">
                            <span className="title">
                            {t("singleProductPage.orderAmount")}
                            </span>
                        </label>

                        <input type="number" name="orderQuantity" id="orderQuantity" min={product?.minimOrderQuantity} placeholder={"min amount : " + product?.minimOrderQuantity} />

                        <motion.button
                            className="fw-button"
                            type="submit"
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("singleProductPage.addToCart")}
                        </motion.button>
                    </form>

                    <div className="card-img mb-16">
                        <img src={Visa} alt="Visa pay" loading="lazy" />
                        <img src={MasterCard} alt="MasterCard pay" loading="lazy" />
                        <img src={AmericanExpress} alt="AmericanExpress pay" loading="lazy" />
                        <img src={Alipay} alt="Alipay pay" loading="lazy" />
                        <img src={WeChat} alt="wechat pay" loading="lazy" />
                    </div>

                    <motion.p
                        className="font-14 mb-gapping-tape"
                    >
                        {t("singleProductPage.weAccept")}
                    </motion.p>


                    <div className="card-img mb-16">
                        <img src={globeBlack} alt="Global shipment" loading="lazy" />
                        <img src={box} alt="shipping box" loading="lazy" />
                        <img src={truck} alt="shipment by truck" loading="lazy" />
                        <img src={ship} alt="shipment by ship" loading="lazy" />
                        <img src={plane} alt="shipment by plane" loading="lazy" />
                    </div>

                    <motion.p
                        className="font-14 mb-gapping-tape"
                    >
                        {t("singleProductPage.weShip")}
                    </motion.p>


                    <div className="company-info">
                        <img src={chaoKaiQi} alt="chaokaiQi | ChaoKaiQi company logo" loading="lazy"/>

                        <h2 className="font-24"> <span className="company-font">{t("singleProductPage.chaoKaiQi")}</span> <br />
                            {t("singleProductPage.globally")}
                        </h2>
                    </div>


                </div>
            </section>

            <h2 className="mb-gapping-tape mobile-text-center">{t("singleProductPage.ourTop")}</h2>

            <section className="suggested-products">
                {randomProducts.map((prod, ind) => <SingleProduct key={ind} product={prod} />

                )}
            </section>
        </>
    );
};

export default SingleProductPage;