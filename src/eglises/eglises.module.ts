import { Module } from '@nestjs/common';
import { EglisesService } from './eglises.service';
import { EglisesController } from './eglises.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EgliseEntity } from './entities/eglise.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EgliseEntity])
  ],
  controllers: [EglisesController],
  providers: [EglisesService],
  exports: [EglisesService]
})
export class EglisesModule {}
