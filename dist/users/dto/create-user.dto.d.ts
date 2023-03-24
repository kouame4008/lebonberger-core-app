import { EgliseEntity } from 'src/eglises/entities/eglise.entity';
export declare class CreateUserDto {
    username: string;
    email: string;
    telephone: string;
    role: string;
    eglise: EgliseEntity;
}
