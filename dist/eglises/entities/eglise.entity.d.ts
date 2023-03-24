import { UserEntity } from 'src/users/entities/user.entity';
export declare class EgliseEntity {
    id: number;
    code_eglise: number;
    nom_eglise: string;
    nom_ab_eglise: string;
    type_eglise: string;
    telephone_eglise: string;
    email_eglise: string;
    adresse_eglise: string;
    api_url: string;
    isActive: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    user: UserEntity[];
}
