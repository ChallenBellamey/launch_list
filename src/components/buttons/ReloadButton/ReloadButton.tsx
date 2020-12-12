import React from "react";
import classNames from "classnames";
import { DefaultButton } from "components/";
import refreshIcon from "assets/icon/refresh@3x.png";

import styles from "./ReloadButton.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const ReloadButton = ({ className, ...props }: Props) => {
    const buttonClasses = classNames(styles.button, className);

    return (
        <DefaultButton
            aria-label="Reload data"
            className={buttonClasses}
            icon={(
                <img
                    alt="refresh"
                    className={styles.icon}
                    data-testid="icon"
                    src={refreshIcon}
                />
            )}
            text="Reload Data"
            {...props}
        />
    );
};

export default ReloadButton;
