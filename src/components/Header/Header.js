import React from "react";
import Select from "../Select/Select";
import { language, users } from "../../constants/constants";
import css from "./header.module.scss";
import selectLanguageCss from "../Select/selectLanguage.module.scss";
import selectUserCss from "../Select/selectUser.module.scss";

const ExpertMenuHeader = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <span></span>
        <span>Beta</span>
      </div>
      <div className={css.userSet}>
        <p className={`${css.bell}`}>Message</p>
        <Select options={users} classModule={selectUserCss} />
        <p className={`${css.search}`}>Search</p>
        <Select options={language} classModule={selectLanguageCss} />
      </div>
    </div>
  );
};

export default ExpertMenuHeader;
