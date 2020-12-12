import React from "react";
import classNames from "classnames";
import LaunchListHeader from "./LaunchListHeader/LaunchListHeader";

import styles from "./LaunchList.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const LaunchList = ({ className, ...props }: Props) => {
    const containerClasses = classNames(styles.container, className);

    return (
        <div className={containerClasses} {...props}>
            <LaunchListHeader className={styles.header} />
        </div>
    );
};

export default LaunchList;
