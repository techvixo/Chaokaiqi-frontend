import "./SingleProduct.css"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


// eslint-disable-next-line react/prop-types
const SingleProduct = ({ product }) => {
    const { t } = useTranslation()

    // eslint-disable-next-line react/prop-types
    const { _id, productName, coverName, minimOrderQuantity, pricePerUnit, mainImage, colors } = product

    // eslint-disable-next-line react/prop-types
    const link = `/wholesale-tablet-cover/${productName?.replace(/ /g, "-")}/${_id}`

    return (
        <Link to={link}>
            <div className="singleProduct">
                <div className="image-container">
                    <img src={mainImage + ".jpg"} alt="phone case and cover of wholesale supplier" loading="lazy" />
                </div>
                <h3 className="font-16">{productName} {t("singleProduct.cover")}</h3>
                <p className="font-14 mb-8">{t(`coverName.${coverName}`)}</p>

                <div className="color-options mb-8">
                    {Object.values(colors)?.map(color => (
                        <div key={color.colorValue} style={{ backgroundColor: color.colorValue }}></div>))}
                </div>

                <p className="font-14">{t("singleProduct.minimum")} : {minimOrderQuantity} {t("singleProduct.units")}</p>
                <p className="font-14 mb-16">{t("singleProduct.price")} : {pricePerUnit} USD</p>

                <button className="fw-button">{t("singleProduct.see")}</button>

            </div>
        </Link>
    );
};

export default SingleProduct;