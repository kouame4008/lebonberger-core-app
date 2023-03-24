import { EglisesService } from './../eglises/eglises.service';
import { UserRepository } from './user.repository';
import { UserEntity } from './entities/user.entity';
import { ForbiddenException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export type User = any;
export declare class UsersService {
    private userRepository;
    private egliseService;
    constructor(userRepository: UserRepository, egliseService: EglisesService);
    create(createUserDto: CreateUserDto): Promise<UserEntity | ForbiddenException>;
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<Partial<UserEntity>>;
    findOneTelephone(telephone: string): Promise<Partial<UserEntity>>;
    findByCredentials(telephone: string): Promise<UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity>;
    remove(id: number): Promise<UserEntity | ForbiddenException>;
    findUserByPhoneAndUrl(telephone: string, egliseId: string): Promise<UserEntity | ForbiddenException>;
}
