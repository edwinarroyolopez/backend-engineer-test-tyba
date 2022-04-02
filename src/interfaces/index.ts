export interface AuthPayload {
    id?: number,
    name?: string,
    phone?: string,
    email?: string
}

export interface UserInput {
    name: string,
    phone?: string,
    email?: string,
    password?: string,
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

export interface QueryMaps {
    lat?: string,
    lng?: string,
    city?: string,
    keyWord?: string
}

export interface AddressComponentMaps {
    long_name?: string,
    short_name?: string,
    types: [string]
}