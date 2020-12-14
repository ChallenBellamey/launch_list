declare interface Context {
    appState: State
    dispatchApp?: func
    handleScroll?: func
    resetApp?: func
    setState?: func
}

declare interface Launch {
    date_unix: number
    flight_number: number
    id: number
    name: string
    rocket: string
}

declare interface Rocket {
    id: string
    name: string
}

declare interface RocketNames {
    [id: string]: string
}

declare interface State {
    batches?: number
    launches?: Array<Launch>
    page?: number
    rocketNames?: RocketNames
    sort?: ("asc" | "desc")
}