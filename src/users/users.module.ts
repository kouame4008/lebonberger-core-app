import { UserEntity } from './entities/user.entity';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EglisesModule } from 'src/eglises/eglises.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    EglisesModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
