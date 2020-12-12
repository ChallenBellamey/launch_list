import React from "react";
import { Brand, ReloadButton } from "./components";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.container}>
            <Brand className={styles.brand} />
            <ReloadButton className={styles.reloadButton} />
        </div>
    );
};

export default App;
