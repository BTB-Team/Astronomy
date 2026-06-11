// components/PageTitle.js
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
  const PageTitle = ({ title }) => {
     const { t } = useTranslation();
     const fullTitle = ` ${t("titles.name")} | ${t(title)}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
        </Helmet>
    );
};

export default PageTitle;
