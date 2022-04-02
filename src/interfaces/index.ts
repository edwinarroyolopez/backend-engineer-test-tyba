export interface AuthPayload {
    id: number,
    name: string,
    phone?: string,
    email?: string
}

export interface User {
    id?: number,
    name: string,
    phone?: string,
    email?: string,
    address?: string,
    city?: string
}
