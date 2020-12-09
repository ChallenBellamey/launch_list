import React from "react";
import spaceXLogo from "assets/spacex-logo.png";

import styles from "./Brand.module.scss";

const Brand = () => (
    <div className={styles.container}>
        <img
            alt="spaceX logo"
            className={styles.spaceXLogo}
            data-testid="spaceXLogo"
            src={spaceXLogo}
        />
        <span
            className={styles.title}
            data-testid="title"
        >
            Launches
        </span>
    </div>
);

export default Brand;
