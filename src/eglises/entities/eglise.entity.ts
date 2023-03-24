import { OneToMany } from 'typeorm';
import { DeleteDateColumn } from 'typeorm';
import { UpdateDateColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { TypeEgliseEnum } from './../../generic/type-eglise';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from 'src/users/entities/user.entity';

@Entity({
    name: 'eglises'
})
export class EgliseEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({nullable : false})
    code_eglise : number;

    @Column({nullable : false})
    nom_eglise : string;

    @Column({
        length: 3,
        nullable: false
    })
    nom_ab_eglise : string;

    @Column({
        type: 'enum',
        enum: TypeEgliseEnum,
        default: TypeEgliseEnum.PRINCIPALE,
        nullable: false
    })
    type_eglise: string;

    @Column({
        length: 10,
        nullable: false
    })
    telephone_eglise: string;

    @Column({
        nullable: false
    })
    email_eglise : string;

    @Column({
        type: 'text',
        nullable: false
    })
    adresse_eglise: string;

    @Column({
        nullable: false
    })
    api_url : string;

    @Column({
        type: 'boolean',
        nullable: false
    })
    isActive : boolean;

    @Column({
        type: 'boolean',
        nullable: false,
        default: false
    })
    isDeleted : boolean;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @DeleteDateColumn()
    deletedAt: string;

    @OneToMany(
        type => UserEntity,
        (user) => user.eglise
    )
    user: UserEntity[];

}