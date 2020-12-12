import React from "react";
import classNames from "classnames";
import { FilterButton, SortButton } from "components/";

import styles from "./LaunchListHeader.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const LaunchListHeader = ({ className, ...props }: Props) => {
    const containerClasses = classNames(styles.container, className);

    return (
        <div className={containerClasses} {...props}>
            <FilterButton className={styles.button} />
            <SortButton className={styles.button} />
        </div>
    );
};

export default LaunchListHeader;
