import React from "react";
import classNames from "classnames";
import moment from "moment";

import styles from "./LaunchListItem.module.scss";

interface Props {
    className?: string;
    launch: Launch;
    [key: string]: any;
}

const LaunchListItem = ({ className, launch, ...props }: Props) => {
    const containerClasses = classNames(styles.container, className);
    const launchDate = moment.unix(launch.date_unix).format("Do MMM YYYY");

    return (
        <div
            className={containerClasses}
            data-testid="container"
            {...props}
        >
            <div
                className={styles.flightNumber}
                data-testid="flightNumber"
            >
                #{launch.flight_number}
            </div>
            <div
                className={styles.name}
                data-testid="name"
            >
                {launch.name}
            </div>
            <div
                className={styles.date}
                data-testid="date"
            >
                {launchDate}
            </div>
            <div
                className={styles.rocket}
                data-testid="rocket"
            >
                {launch.rocket}
            </div>
        </div>
    );
};

export default LaunchListItem;
