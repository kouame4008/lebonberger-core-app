import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, IsEnum, IsEmail, IsBoolean } from "class-validator";
import { TypeEgliseEnum } from "src/generic/type-eglise";

export class CreateEgliseDto {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type : Number})
    code_eglise : number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type : String})
    nom_eglise : string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(3)
    @ApiProperty({type : String})
    nom_ab_eglise : string;

    @IsNotEmpty()
    @IsString()
    @IsEnum(TypeEgliseEnum)
    @ApiProperty({type : String})
    type_eglise: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    @ApiProperty({type : String})
    telephone_eglise: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({type : String})
    email_eglise : string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type : String})
    adresse_eglise: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type : String})
    api_url : string;

    @IsNotEmpty()
    @IsBoolean()
    @ApiProperty({type : Boolean})
    isActive : boolean;
}
