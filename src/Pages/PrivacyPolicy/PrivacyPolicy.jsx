import "./PrivacyPolicy.css"
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const {t} = useTranslation()

  return (
    <section id="privacy-policy">
      <h1>{t("privacy.title")} <span className="chinese-red">{t("privacy.ckq")}</span> </h1>
      <div>
        <p className="font-bold">{t("privacy.effectiveD")}</p>
        <br />

        {t("privacy.effectiveP")}
      </div>

      <div>
        <div>
          <h2>{t("privacy.info")}</h2>
          <ul>{t("privacy.weCollect")}
            <li>{t("privacy.name")}</li>
            <li>{t("privacy.company")}</li>
            <li>{t("privacy.emailA")}</li>
            <li>{t("privacy.phoneN")}</li>
            <li>{t("privacy.address")}</li>
            <li>{t("privacy.productP")}</li>
            <li>{t("privacy.message")}</li>
          </ul>
        </div>
      </div>

      <div>

        <div>
          <h2>{t("privacy.howW")}</h2>
          <ul>{t("privacy.weUse")}
            <li>{t("privacy.toProcess")}</li>
            <li>{t("privacy.toComm")}</li>
            <li>{t("privacy.toImp")}</li>
          </ul>
        </div>
      </div>

      <div>

        <div>
          <h2>{t("privacy.infoS")}</h2>

          <p>{t("privacy.infoP")}</p>
        </div>
      </div>

      <div>

        <div>
          <h2>{t("privacy.dataS")}</h2>

          <p>{t("privacy.dataP")}</p>
        </div>
      </div>

      <div>

        <div>
          <h2>{t("privacy.retention")}</h2>

          <p>{t("privacy.retentionP")}</p>
        </div>
      </div>

      <div>

        <div>
          <h2>{t("privacy.third")}</h2>

          <p>{t("privacy.thirdP")}</p>
        </div>
      </div>

      <div>

        <div>
          <h2>{t("privacy.changeOfP")}</h2>

          <p>{t("privacy.changeOfP1")}</p>
        </div>
      </div>

      <div>

        <div>
          <h2>{t("privacy.contactI")}</h2>

          <p>{t("privacy.contactP")} <a className="chinese-red" href="mailto:Chaokaiqi@outlook.com.">Chaokaiqi@outlook.com.</a></p>
        </div>
      </div>

    </section>
  );
};

export default PrivacyPolicy;