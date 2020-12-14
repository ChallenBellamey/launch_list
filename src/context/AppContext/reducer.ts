interface ActionWithoutType extends State {
    type?: void,
    payload: State,
}

type Action =
    |   { type: "reset" }
    |   ActionWithoutType

export const initialAppState: State = {
    batches: 0,
    launches: [],
    page: 1,
    sort: "asc"
};

const reducer = (prevState: State, action: Action): State => {
    switch (action.type) {
    case "reset":
        return initialAppState;
    default:
        return {
            ...prevState,
            ...action.payload
        };
    }
};

export default reducer;
