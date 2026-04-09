export type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

export type UserRole = 'user' | 'guest';

export type UserProfile = User & {
    role:UserRole;
    email: string;
}


