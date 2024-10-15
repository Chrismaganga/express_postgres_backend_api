// src/models/userModel.ts
export interface User {
    id: number;
    username: string;
    password: string; // Ensure this is hashed
}
