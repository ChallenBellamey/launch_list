import React from "react";
import classNames from "classnames";

import styles from "./DefaultButton.module.scss";

interface Props {
    className?: string;
    icon?: JSX.Element;
    text?: string;
    [key: string]: any;
}

const DefaultButton = ({ className, icon, text, ...props }: Props) => {
    const buttonClasses = classNames(styles.button, className);

    return (
        <button
            aria-label="button"
            className={buttonClasses}
            data-testid="button"
            type="button"
            {...props}
        >
            {text}
            {icon}
        </button>
    );
};

export default DefaultButton;
