import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useTranslation, Trans } from "react-i18next";



import "./Cart.css"

import cancel from "../../assets/logos/Cancel.svg"
import { Ccontext } from "../../CartContext";
import instance from "../../axiosInstance";

const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("chaoKaiQi-cart")) ?? [])
    const {setCartData} = useContext(Ccontext)
    const navigate = useNavigate()

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

        e.target.reset()

        instance.post("/mail-and-orders/order", {customerData, cart})
        .then()
        .catch(error =>{
            console.log(error)
        })

        
        const message = i18n.resolvedLanguage === "en"? "Thank you for placing the quota. Our team will contact you very fast to talk about processing the order " : "感谢您下达配额。我们的团队将尽快与您联系，商讨订单处理事宜。"
        toast(message)
    }

    const handleCancel = (e, item) => {
        e.stopPropagation();
        setCart(prev => {
            const newCart = prev.filter(p => p !== item)
            localStorage.setItem("chaoKaiQi-cart", JSON.stringify(newCart))
            setCartData(newCart)

            return newCart
        })
    }

    return (
        <section id="cart-section">
            <motion.div>
                {cart.length ? 
                <AnimatePresence>
                    {cart.map((item, ind) => {
                        return (
                            <motion.div
                                key={ind}
                                exit={{height: 0, opacity: 0}}
                                
                                className="cart-item"
                                onClick={() => navigate(`/wholesale-tablet-cover/${item?.productName}/${item.productId}`)}
                            >

                                <motion.button
                                    whileTap={{ scale: 0.9, boxShadow: "0" }}
                                    whileHover={{ scale: 1.1, boxShadow: "0px 1px black" }}
                                    onClick={(e) => handleCancel(e, item)}
                                    className="cancel-btn"
                                >
                                    <img src={cancel} alt="cancel button" />
                                </motion.button>

                                <img src={item?.mainImage + ".jpg"} alt={item?.productName + " cover"} />

                                <div>
                                    <h2 className="chinese-red">{item?.productName} {t("cart.cover")}</h2>
                                    <p><span className="label">{t("cart.coverName")} </span>
                                    
                                    {t(`coverName.${item?.coverName}`)}
                                    
                                    </p>

                                    <div className="inline-p">
                                        <p><span className="label">{t("cart.color")}: </span>{item?.color?.name}</p>
                                        <p><span className="label">{t("cart.brand")}: </span>
                                        
                                        {t(`brands.${item?.brand}`)}
                                        
                                        </p>
                                    </div>

                                    <div className="inline-p small-font">
                                        <p><span className="label">{t("cart.price")} : </span>{item?.priceperUnit} USD</p>
                                        <p><span className="label">{t("cart.weight")} : </span>{item?.productGrossWeight} g</p>
                                        <p><span className="label">{t("cart.size")} </span>{item?.productSize} cm</p>
                                    </div>

                                    <div className="inline-p">
                                        <p className="font-bold"><span >{t("cart.totalOrder")}: </span>{item?.orderAmount} {t("cart.units")}</p>
                                        <p className="font-bold"><span >{t("cart.totalPrice")}: </span>$ {item?.totalPrice} USD</p>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
                :
                <h2 className="chinese-red font-24">
                    <Trans i18nKey="cart.noProduct">
                    No Product in Cart <br />
                    Please continue shopping <br />
                    or <br />
                    Send us an empty order to contact us. <br />
                    We will still contact you back !!
                    </Trans>
                </h2>
                }
            </motion.div>
                
            <div>
                <div className="form-container">
                    <form onSubmit={handleInfoSubmit}>
                        <div>
                            <label htmlFor="name">{t("cart.name")} *</label>
                            <input id="name" name="name" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="country">{t("cart.country")} *</label>
                            <input id="country" name="country" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="organization">{t("cart.org")} *</label>
                            <input id="organization" name="organization" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="email">{t("cart.email")} *</label>
                            <input id="email" name="email" type="email" required />
                        </div>

                        <div>
                            <label htmlFor="mobile">{t("cart.phone")} *</label>
                            <input id="mobile" name="mobile" type="text" required />
                        </div>

                        <div>
                            <label htmlFor="note">{t("cart.specialN")}</label>
                            <textarea name="note" id="note" cols="22" rows="4"></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="fw-button"
                            whileTap={{ scale: 0.95 }}
                        >{t("cart.placeOrder")}</motion.button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Cart;