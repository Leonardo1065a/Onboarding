import { Conta } from './conta.model';

export interface CooperativeMemberDetail {
    cpf: string;
    id: number;
    nome: string;
    situacao: string;
    constasAplicacao: Conta[];
    constasCorrente: Conta[];
}
