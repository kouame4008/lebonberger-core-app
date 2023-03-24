import { ApiProperty } from '@nestjs/swagger';
// import { EgliseEntity } from './../../eglise/entities/eglise.entity';
import { TimeTampsEntitie } from './../../generic/timestamp';
import { userRoleEnum } from './../../generic/user-role';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { EgliseEntity } from 'src/eglises/entities/eglise.entity';

@Entity("users")
export class UserEntity extends TimeTampsEntitie {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ApiProperty({ type: String })
    username: string;

    @Column({
        unique: true
    })
    @ApiProperty({ type: String })
    email: string;

    @Column({
        unique: true
    })
    @ApiProperty({ type: String })
    telephone: string;

    @Column()
    @ApiProperty({ type: String })
    password: string;

    @Column()
    @ApiProperty({ type: String })
    salt: string;

    @Column({
        type: 'boolean'
    })
    @ApiProperty({ type: Boolean })
    isDelete: boolean

    @Column({
        type: 'enum',
        enum: userRoleEnum,
        default: userRoleEnum.ADMIN
    })
    @ApiProperty({ enum: ['super_admin', 'admin', 'membre'] })
    role: string;

    @ManyToOne(
        type => EgliseEntity,
        (eglise) => eglise.user,
        {
            cascade: true,
            eager: true,
            nullable: true
        }
    )
    eglise: EgliseEntity;
}