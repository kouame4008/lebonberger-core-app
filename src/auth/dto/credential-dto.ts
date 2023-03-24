import { IsNotEmpty, IsString } from "class-validator";


export class CredentialsDto {
    @IsNotEmpty()
    @IsString()
    telephone: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}