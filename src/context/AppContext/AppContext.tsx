import React, { useEffect, useReducer } from "react";
import { getLaunches, getRockets } from "lib/";
import reducer, { initialAppState } from "./reducer";

export const AppContext = React.createContext<Context>({
    appState: initialAppState
});

interface Props {
    children: JSX.Element
}

export const AppProvider = ({ children }: Props): JSX.Element => {
    const [appState, dispatchApp] = useReducer(reducer, initialAppState);
    const { launches, page, rocketNames } = appState;
    const setState = (state: State) => dispatchApp({ payload: state });

    const addLaunches = async () => {
        if (!launches || !page || !rocketNames) {
            return;
        }

        const newLaunches = await getLaunches(page);

        newLaunches.forEach((launch: Launch) => {
            launch.rocket = rocketNames[launch.rocket];
        });

        setState({
            launches: [
                ...launches,
                ...newLaunches
            ]
        });
    };

    const handleScroll = () => {
        if (page) {
            setState({ page: page + 1 });
        }
    };

    const resetApp = () => dispatchApp({ type: "reset" });

    const setRocketNames = async () => {
        const rockets = await getRockets();

        const rocketNames = rockets.reduce((
            acc: RocketNames,
            rocket: Rocket
        ) => {
            acc[rocket.id] = rocket.name;

            return acc;
        }, {});

        setState({ rocketNames });
    };

    useEffect(() => {
        const hasReset = !rocketNames;

        const hasScrolled = launches && page
            ? launches.length / 10 < page
            : null;

        if (hasReset) {
            setRocketNames();
        } else if (hasScrolled) {
            addLaunches();
        }
    }, [launches, page, rocketNames]);

    return (
        <AppContext.Provider
            value={{ appState, dispatchApp, handleScroll, resetApp, setState }}
        >
            {children}
        </AppContext.Provider>
    );
};
