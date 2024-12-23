import { useEffect, useRef, useState } from "react";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { motion } from "framer-motion"

import "./AllTabsCover.css"

import filter from "../../assets/logos/Filter.svg"
import cancel from "../../assets/logos/Cancel.svg"
import instance from "../../axiosInstance";
import { useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import chaoKaiQiLogo from "../../assets/compnayLogo/chaoKaiQi.png"

const AllTabsCover = () => {
    const [products, setProducts] = useState([])
    const [brands, setBrands] = useState([])
    const [mobileFilterVisible, setMobileFilterVisible] = useState(false)
    const [selectedModels, setSelectedModels] = useState([]);

    const [disableLoadMore, setDisableLoadMore] = useState(false)

    const [loading, setLoading] = useState(false)

    const { productName } = useParams()
    const [searchParams] = useSearchParams()

    const searchQuery = useRef("")

    const starts = useRef(0)
    const ends = useRef(36)

    const { t } = useTranslation()

    useEffect(() => {
        setLoading(true)
        setSelectedModels([])

        if (productName === "all") {
            instance.get(`/all-products/${starts.current}/${ends.current}`)
                .then(data => {
                    setProducts(data.data)
                    setLoading(false)
                }).catch(error => {
                    console.log(error)
                    setLoading(false)
                })

        } else if (productName === "search") {
            const query = searchParams.get("q")
            searchQuery.current = query

            instance.get(`/search?q=${query}`)
                .then(data => {

                    setProducts(data.data)
                    setLoading(false)

                }).catch(error => {
                    console.log(error)
                    setLoading(false)
                })


            setDisableLoadMore(true)
        } else {
            instance.post("/selected-products", { updatedSelection: [productName] })
                .then(data => {
                    setProducts(data.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                })

            setDisableLoadMore(true)
        }

        instance.get("brands")
            .then(data => {
                setBrands(data.data)
            })
            .catch(error => { console.log(error) })
    }, [productName, searchParams])


    const handleLoadMore = () => {
        starts.current += ends.current

        instance.get(`/all-products/${starts.current}/${ends.current}`)
            .then(data => {
                const p = data.data

                if (p.length) {
                    setProducts(prev => [...prev, ...p])
                } else {
                    setDisableLoadMore(true)
                }
            }).catch(error => {
                console.log(error)
            })
    }

    const handleCheckboxChange = (model) => {
        setLoading(true)

        document.documentElement.scrollTop = 0; // For modern browsers
        document.body.scrollTop = 0; // For older browsers

        const updatedSelection = [...selectedModels]
        const index = updatedSelection.indexOf(model)

        if (index === -1) {
            updatedSelection.push(model)
        } else {
            updatedSelection.splice(index, 1)
        }

        setSelectedModels(updatedSelection)

        if (updatedSelection.length) {
            instance.post("/selected-products", { updatedSelection })
                .then(data => {
                    setProducts(data.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                })

            setDisableLoadMore(true)
            starts.current = 0

        } else {
            instance.get(`/all-products/${starts.current}/${ends.current}`).then(data => {
                setProducts(data.data)
                setLoading(false)
            }).catch(error => {
                console.log(error)
                setLoading(false)
            })

            setDisableLoadMore(false)
        }

    }


    return (
        <section className="all-products-page">
            <h1 className="align-center">{t("allProducts.title")} <span className="chinese-red">{t("allProducts.ckq")}</span></h1>

            <motion.button
                className="filter-button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileFilterVisible(true)}
            >
                {selectedModels.length ? <div id="filter-selected"></div> : ""}
                <img src={filter} alt="filter button" />
            </motion.button>

            <section className="all-products-section">

                <div className={`filter-catagories  ${mobileFilterVisible ? "visible" : ""} `} id="filter-catagories">

                    <motion.button
                        className="mobile-visible"
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setMobileFilterVisible(false)}
                    >
                        <img src={cancel} alt="cancle button" />
                    </motion.button>

                    {brands.map(brand => (
                        <div key={brand._id} className="single-filter">
                            <h2>{t(`brands.${brand._id}`)}</h2>

                            {brand?.products.map(model => (
                                <p key={model}>
                                    <input 
                                    type="checkbox" 
                                    name={model} id={model} 
                                    onChange={() => handleCheckboxChange(model)} 
                                    checked={selectedModels.includes(model)}
                                    />
                                    <label htmlFor={model}>{model}</label>
                                </p>
                            ))}
                        </div>
                    ))}

                    
                    <div className="mobile-hide ">
                        <h2 className="company-font text-center">{t("allProducts.chaoKaiQi")}</h2>
                        <img src={chaoKaiQiLogo} alt="chaoKaiQi company logo" />

                        <ul>
                            <li>{t("allProducts.golbally")}</li>
                            <li>{t("allProducts.allM")}</li>
                            <li>{t("allProducts.fast")}</li>
                            <li>{t("allProducts.secure")}</li>
                            <li>{t("allProducts.major")}</li>

                        </ul>


                    </div>

                    <div id="mobile-filter-apply">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileFilterVisible(false)}
                        >
                            {t("allProducts.apply")}
                        </motion.button>
                    </div>

                </div>

                {loading ?
                    <div>
                        <p className="text-center">{t("allProducts.loading")}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 20 400 300"><circle fill="#25CBE1" stroke="%23FFC820" strokeWidth="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#ECC35C" stroke="%23FFC820" strokeWidth="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#C90A1E" stroke="%23FFC820" strokeWidth="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
                    </div>

                    :
                    <div className="result-products">
                        {
                            products?.length ?
                                <>
                                    {products.map((product, ind) => <SingleProduct key={ind} product={product}></SingleProduct>)}
                                </>
                                :
                                <p className="text-center font-24">
                                    {t("allProducts.noP")} <br />
                                    <span className="chinese-red font-32"> {searchQuery.current}</span>                                    
                                </p>
                        }
                    </div>
                }

            </section>

            <motion.button
                whileTap={{ scale: disableLoadMore ? 1 : 0.9 }}
                className="load-more-btn"
                whileHover={{ scale: disableLoadMore ? 1 : 1.02 }}
                onClick={handleLoadMore}
                disabled={disableLoadMore}
            >
                {t("allProducts.loadM")}
            </motion.button>

        </section>
    );
};

export default AllTabsCover;