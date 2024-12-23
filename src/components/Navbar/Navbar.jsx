import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"
import languageButton from "../../assets/logos/language-options.svg";
import cart from "../../assets/logos/cart.svg"
import menu from "../../assets/logos/Menu.svg"
import cancel from "../../assets/logos/Cancel.svg"
import "./Navbar.css"

import { Ccontext } from "../../CartContext";
import { useContext, useState } from "react";

import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setCatagoryOpen }) => {
    const { cartData } = useContext(Ccontext)
    const [searchBarOpen, setSerchBarOpen] = useState(false)

    const { t, i18n } = useTranslation()

    const navigate = useNavigate()

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    }

    const handleNavMenues = () => {
        document.getElementById("nav-menues").classList.toggle("visible")
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const searchQuery = e.target.searchQuery.value
        e.target.reset()
        setSerchBarOpen(false)

        navigate(`all-wholesale-tablet-covers/search?q=${searchQuery}`)
    }

    const handleTranslate = () => {
        const ln = i18n.resolvedLanguage
        if (ln === "en") {
            i18n.changeLanguage("zh")
        } else {
            i18n.changeLanguage("en")
        }
    }

    return (
        <header>
            <nav>
                <Link to="/" className="company-font"> {t("header.chaoKaiQi")}</Link>

                <div>

                    <button id="menu" aria-label="menu" onClick={handleNavMenues}>
                        <img src={menu} alt="nav bar menu icon" />
                    </button>

                    <motion.button
                        className={`searchIcon mobile ${searchBarOpen && "open"}`}
                        variants={item}
                        whileTap={{ scale: .7 }}
                        onClick={() => setSerchBarOpen(prev => !prev)}
                        aria-label="search icon"
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </motion.button>

                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"

                    id="nav-menues"
                    onClick={handleNavMenues}
                >
                    <motion.button aria-label="cencel menu" whileTap={{ scale: .7 }} id="cancel">
                        <img src={cancel} alt="hide nav bar" />
                    </motion.button>

                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/">
                        {t("header.home")}
                    </Link></motion.span>

                    <motion.span
                        variants={item}
                        whileTap={{ scale: .7 }}
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => setCatagoryOpen(true)}
                        onMouseLeave={() => setCatagoryOpen(false)}
                        whileHover={{ color: "#C90A1E" }}
                    >
                        {t("header.catagory")}
                    </motion.span>

                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/all-wholesale-tablet-covers/all">{t("header.allP")}</Link></motion.span>
                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/about-us">{t("header.aboutUs")}</Link></motion.span>
                    <motion.span variants={item} whileTap={{ scale: .7 }}><Link to="/contact-us">{t("header.contactUs")}</Link></motion.span>

                    <motion.span variants={item} whileTap={{ scale: .7 }} onClick={handleTranslate}>
                        <img src={languageButton} alt="language changing button" className="logo" />
                    </motion.span>

                    <motion.span id="cart-btn" variants={item} whileTap={{ scale: .7 }}>
                        {cartData?.length ?
                            <div id="cart-amount">
                            </div>
                            :
                            ""
                        }

                        <Link to="/cart">
                            <img src={cart} alt="cart page of products" className="logo" />
                        </Link>
                    </motion.span>

                    <motion.button
                        className={`searchIcon ${searchBarOpen && "open"}`}
                        variants={item}
                        whileTap={{ scale: .7 }}
                        onClick={() => setSerchBarOpen(prev => !prev)}
                        aria-label="search"
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </motion.button>

                </motion.div>

            </nav>

            <AnimatePresence>
                {searchBarOpen ?
                    <motion.form
                        id="searchForm"
                        onSubmit={handleSearch}
                        initial={{ x: "200%" }}
                        animate={{ x: 0 }}

                        exit={{ x: "200%" }}
                    >
                        <input type="text" name="searchQuery" required />
                        <motion.button
                            initial={{}}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            {t("header.search")}

                        </motion.button>

                    </motion.form>
                    :
                    ""
                }
            </AnimatePresence>
        </header>

    );
};

export default Navbar;