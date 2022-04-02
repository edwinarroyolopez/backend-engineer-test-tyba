export interface AuthPayload {
    id: number,
    name: string,
    phone?: string,
    email?: string
}

export interface UserInput {
    id?: number,
    name: string,
    phone?: string,
    email?: string,
    address?: string,
    city?: string
}

export interface User {
    id?: number,
    name: string,
    phone?: string,
    email?: string,
    address?: string,
    city?: string
}

export interface AuthInput {
    phone?: string,
    email?: string,
    password?: string,
    otp?: string
}

export interface QueryRestaurants {
    latitude?: string,
    longitude?: string,
    city?: string
}

