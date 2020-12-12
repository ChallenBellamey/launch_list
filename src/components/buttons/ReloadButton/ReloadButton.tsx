import React from "react";
import { DefaultButton } from "components/";
import refreshIcon from "assets/icon/refresh@3x.png";

import styles from "./ReloadButton.module.scss";

const ReloadButton = () => (
    <DefaultButton
        className={styles.button}
        icon={(
            <img
                alt="refresh"
                className={styles.icon}
                data-testid="icon"
                src={refreshIcon}
            />
        )}
        text="Reload Data"
    />
);

export default ReloadButton;
