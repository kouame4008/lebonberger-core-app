import { TimeTampsEntitie } from './../../generic/timestamp';
import { EgliseEntity } from 'src/eglises/entities/eglise.entity';
export declare class UserEntity extends TimeTampsEntitie {
    id: number;
    username: string;
    email: string;
    telephone: string;
    password: string;
    salt: string;
    isDelete: boolean;
    role: string;
    eglise: EgliseEntity;
}
