export default interface User {
    id: number;
    email: string;
    
    name?: string;
    institution_name?: string;
    institution_branch?: string;

    cpf?: string;
    cnpj?: string;

    plan_id?: number;
}