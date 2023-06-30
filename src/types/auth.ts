export interface Login {
    email: string,
    password: string
}

export interface Register {
    username: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    avatar?: string
}

export interface User {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    avatar?: string
}
