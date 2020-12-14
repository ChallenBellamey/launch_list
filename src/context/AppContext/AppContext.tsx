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
    const { batches, launches, page, rocketNames, sort } = appState;
    const setState = (state: State) => dispatchApp({ payload: state });

    const addLaunches = async () => {
        if (!launches || !page || !rocketNames) {
            return;
        }

        const newLaunches = await getLaunches(page, sort);

        newLaunches.forEach((launch: Launch) => {
            launch.rocket = rocketNames[launch.rocket];
        });

        setState({
            batches: page,
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
        resetApp();
    }, [sort]);

    useEffect(() => {
        const hasReset = !rocketNames;

        const hasScrolled = typeof batches === "number" && launches && page
            ? batches < page
            : null;

        if (hasReset) {
            setRocketNames();
        } else if (hasScrolled) {
            addLaunches();
        }
    }, [batches, launches, page, rocketNames]);

    return (
        <AppContext.Provider
            value={{ appState, dispatchApp, handleScroll, resetApp, setState }}
        >
            {children}
        </AppContext.Provider>
    );
};
