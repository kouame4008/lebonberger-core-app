import { EglisesService } from './../eglises/eglises.service';
import { Repository } from 'typeorm';
import { UserRepository } from './user.repository';
import { UserEntity } from './entities/user.entity';
import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';


export type User = any;

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: UserRepository,

    private egliseService: EglisesService
  ) { }

  async create(createUserDto: CreateUserDto) {

    const user = this.userRepository.create(createUserDto);

    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.telephone, user.salt);
    user.isDelete = false;

    try {
      await this.userRepository.save(user);
    } catch (e) {
      return new ForbiddenException(e)
    }

    delete user.salt;
    delete user.password;

    return user;
  }


  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepository.find({
      select: ['id', 'username', 'email', 'role', 'telephone', 'createdAt', 'isDelete', 'eglise'],
      order: {
        createdAt: 'DESC'
      },
      where: [{
        isDelete: false
      }]
    })

    return users;
  }

  async findOne(id: number): Promise<Partial<UserEntity>> {
    return this.userRepository.preload({ id })
  }

  async findOneTelephone(telephone: string): Promise<Partial<UserEntity>> {
    return this.userRepository.findOneBy({ telephone: telephone })
  }

  async findByCredentials(telephone: string): Promise<UserEntity> {

    const user = await this.userRepository.findOne ({
      where : [{telephone : telephone}]
    });

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user: UserEntity = await this.userRepository.preload({
      id, ...updateUserDto
    });

    try {
      await this.userRepository.save(user);
    } catch (error) {
      throw new ForbiddenException(error);
    }

    delete user.password;
    delete user.salt;

    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.preload({ id });
    if (!user) return new ForbiddenException();

    user.isDelete = true;
    user.deletedAt = new Date();

    return await this.userRepository.save(user)
  }

  async findUserByPhoneAndUrl(telephone: string, egliseId: string) {

    if (egliseId) {
      const eglise = await this.egliseService.findOne(+egliseId);

     

      const user = await this.userRepository.createQueryBuilder ('users')
            .innerJoinAndSelect ('users.eglise', 'eglises')
            .where("eglises.id = :id", { id: eglise.id })
            .andWhere ('users.telephone = :telephone', {telephone : telephone})
            .getOne ()
      
      return user;
    }
    else {
      return new ForbiddenException ();
    }

  }
}
