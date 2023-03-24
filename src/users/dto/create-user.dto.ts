import { EgliseEntity } from 'src/eglises/entities/eglise.entity';
import { IsString, IsNotEmpty, IsEmail, IsEnum } from "class-validator";
import { userRoleEnum } from "src/generic/user-role";

export class CreateUserDto {
    @IsNotEmpty ()
    @IsString ()
    username: string;

    @IsEmail ()
    @IsNotEmpty ()
    email: string;

    @IsNotEmpty ()
    @IsString ()
    telephone: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(userRoleEnum)
    role: string;

    @IsNotEmpty()
    eglise: EgliseEntity;

}
