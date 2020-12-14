import React from "react";
import classNames from "classnames";
import { useAppContext } from "context/";
import loadingIcon from "assets/img/loading_icon.gif";

import styles from "./LaunchListFooter.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const LaunchListFooter = ({ className, ...props }: Props) => {
    const { batches, page } = useAppContext().appState;
    const containerClasses = classNames(styles.container, className);

    const isLoading = typeof batches === "number" && page
        ? batches < page
        : null;

    return (
        <div className={containerClasses} {...props}>
            {isLoading && (
                <>
                    <img
                        alt="loading"
                        className={styles.loadingIcon}
                        data-testid="loadingIcon"
                        src={loadingIcon}
                    />
                    <span>Loading...</span>
                </>
            )}
        </div>
    );
};

export default LaunchListFooter;
