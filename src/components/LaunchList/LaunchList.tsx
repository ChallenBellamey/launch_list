import React from "react";
import classNames from "classnames";
import { useAppContext } from "context/";
import LaunchListHeader from "./LaunchListHeader/LaunchListHeader";
import LaunchListItem from "./LaunchListItem/LaunchListItem";

import styles from "./LaunchList.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const LaunchList = ({ className, ...props }: Props) => {
    const { launches } = useAppContext().appState;
    const containerClasses = classNames(styles.container, className);

    return (
        <div className={containerClasses} {...props}>
            <LaunchListHeader className={styles.header} />
            {launches?.map((launch: Launch) => {
                return <LaunchListItem launch={launch} />;
            })}
        </div>
    );
};

export default LaunchList;
