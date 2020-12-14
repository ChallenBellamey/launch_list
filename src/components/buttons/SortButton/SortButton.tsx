import React from "react";
import classNames from "classnames";
import _ from "lodash";
import { useAppContext } from "context/";
import { DefaultButton } from "components/";
import sortIcon from "assets/icon/sort@3x.png";

import styles from "./SortButton.module.scss";

interface Props {
    className?: string;
    [key: string]: any;
}

const SortButton = ({ className, ...props }: Props) => {
    const { appState, setState } = useAppContext();
    const { sort } = appState;
    const buttonClasses = classNames(styles.button, className);

    const onClickSort = sort === "ascending"
        ? "descending"
        : "ascending";

    const onClick = () => setState({ sort: onClickSort });

    return (
        <DefaultButton
            aria-label={`Sort ${onClickSort}`}
            className={buttonClasses}
            icon={(
                <img
                    alt="refresh"
                    className={styles.icon}
                    data-testid="icon"
                    src={sortIcon}
                />
            )}
            onClick={onClick}
            text={`Sort ${_.startCase(sort)}`}
            {...props}
        />
    );
};

export default SortButton;
