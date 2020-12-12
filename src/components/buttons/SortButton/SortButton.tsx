import React from "react";
import classNames from "classnames";
import { DefaultButton } from "components/";
import sortIcon from "assets/icon/sort@3x.png";

import styles from "./SortButton.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const SortButton = ({ className, ...props }: Props) => {
    const buttonClasses = classNames(styles.button, className);

    return (
        <DefaultButton
            aria-label="Sort Descending"
            className={buttonClasses}
            icon={(
                <img
                    alt="refresh"
                    className={styles.icon}
                    data-testid="icon"
                    src={sortIcon}
                />
            )}
            text="Sort Descending"
            {...props}
        />
    );
};

export default SortButton;
