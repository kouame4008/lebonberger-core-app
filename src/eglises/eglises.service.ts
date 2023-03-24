import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEgliseDto } from './dto/create-eglise.dto';
import { UpdateEgliseDto } from './dto/update-eglise.dto';
import { EgliseEntity } from './entities/eglise.entity';

@Injectable()
export class EglisesService {
  private table = "eglises";

  constructor(
    @InjectRepository(EgliseEntity)
    private egliseRepository: Repository<EgliseEntity>
  ) { }


  async create(createEgliseDto: CreateEgliseDto) {
    const eglise = this.egliseRepository.create(createEgliseDto);
    return await this.egliseRepository.save(eglise);
  }

  async findAll(): Promise<EgliseEntity[]> {
    return await this.egliseRepository.find({ order: { createdAt: 'DESC' }, where : [{ isDeleted : false }] });
  }

  async findOne(id: number) {
    return await this.egliseRepository.findOneBy({ id })
  }

  async update(id: number, updateEgliseDto: UpdateEgliseDto) {
    const eglise = await this.egliseRepository.preload({
      id, ...updateEgliseDto
    });

    try {
      await this.egliseRepository.save(eglise);
    } catch (error) {
      throw new ForbiddenException(error);
    }

    return eglise;
  }

  async remove(id: number) {
    const eglise = await this.egliseRepository.preload ({ id });

    if (!eglise) return new ForbiddenException ();
    
    eglise.isDeleted = true;
    eglise.deletedAt = (new Date ()).toDateString ();

    return await this.egliseRepository.save (eglise);
  }
}
