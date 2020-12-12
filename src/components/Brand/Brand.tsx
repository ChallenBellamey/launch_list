import React from "react";
import classNames from "classnames";
import spaceXLogo from "assets/spacex-logo.png";

import styles from "./Brand.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const Brand = ({ className, ...props }: Props) => {
    const containerClasses = classNames(styles.container, className);

    return (
        <div className={containerClasses} {...props}>
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
};

export default Brand;
