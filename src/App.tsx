import React from "react";
import { Brand, LaunchList, ReloadButton } from "./components";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.container}>
            <Brand className={styles.brand} />
            <ReloadButton className={styles.reloadButton} />
            <LaunchList className={styles.launchList} />
        </div>
    );
};

export default App;
