import axios from "axios";

const api = axios.create({
    baseURL: "https://api.spacexdata.com/v4/"
});

const options = {
    launches: {
        select: [
            "date_unix",
            "flight_number",
            "id",
            "name",
            "rocket"
        ],
        limit: 10
    },
    rockets: {
        select: [
            "id",
            "name"
        ]
    }
};

export const getRockets = async () => {
    return api.post(
        "rockets/query",
        {
            options: options.rockets
        }
    ).then(({ data }) => data.docs);
};

export const getLaunches = async (
    page: number,
    sort: ("ascending" | "descending") = "ascending"
) => {
    return api.post(
        "launches/query",
        {
            options: {
                ...options.launches,
                page,
                sort: {
                    "date_unix": sort
                }
            }
        }
    ).then(({ data }) => data.docs);
};