import { UserEntity } from './entities/user.entity';
import { EntityRepository, Repository } from "typeorm";

export class UserRepository extends Repository<UserEntity> {}