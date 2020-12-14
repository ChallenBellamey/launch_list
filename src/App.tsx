import React from "react";
import { AppProvider } from "context/AppContext/AppContext";
import { Brand, LaunchList, ReloadButton } from "./components";

import styles from "./App.module.scss";

const App = () => {
    return (
        <AppProvider>
            <div className={styles.container}>
                <Brand className={styles.brand} />
                <ReloadButton className={styles.reloadButton} />
                <LaunchList className={styles.launchList} />
            </div>
        </AppProvider>
    );
};

export default App;
