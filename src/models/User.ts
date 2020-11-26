export default interface User {
    id: number;
    email: string;
    name?: string;
    role?: string;
    cpf?: string;
    cnpj?: string;
}