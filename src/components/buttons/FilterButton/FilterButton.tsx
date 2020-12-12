import React from "react";
import classNames from "classnames";
import { DefaultButton } from "components/";
import selectIcon from "assets/icon/select@3x.png";

import styles from "./FilterButton.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const FilterButton = ({ className, ...props }: Props) => {
    const buttonClasses = classNames(styles.button, className);

    return (
        <DefaultButton
            aria-label="Filter by Year"
            className={buttonClasses}
            icon={(
                <img
                    alt="refresh"
                    className={styles.icon}
                    data-testid="icon"
                    src={selectIcon}
                />
            )}
            text="Filter by Year"
            {...props}
        />
    );
};

export default FilterButton;
