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
    launches?: Array<Launch>
    page?: number
    rocketNames?: RocketNames
    sort?: ("asc" | "desc")
}