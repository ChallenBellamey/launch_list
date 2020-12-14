export interface Launch {
    date_unix: number
    flight_number: number
    id: number
    name: string
    rocket: string
}

export interface Rocket {
    id: string
    name: string
}

export interface RocketNames {
    [id: string]: string
}

export interface State {
    launches?: Array<Launch>
    page?: number
    rocketNames?: RocketNames
    sort?: ("asc" | "desc")
}

export const initialAppState: State = {
    launches: [],
    page: 1,
    sort: "asc"
};

interface ActionWithoutType extends State {
    type?: void,
    payload: State,
}

type Action =
    |   { type: "reset" }
    |   ActionWithoutType

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
