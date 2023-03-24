import { ForbiddenException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEgliseDto } from './dto/create-eglise.dto';
import { UpdateEgliseDto } from './dto/update-eglise.dto';
import { EgliseEntity } from './entities/eglise.entity';
export declare class EglisesService {
    private egliseRepository;
    private table;
    constructor(egliseRepository: Repository<EgliseEntity>);
    create(createEgliseDto: CreateEgliseDto): Promise<EgliseEntity>;
    findAll(): Promise<EgliseEntity[]>;
    findOne(id: number): Promise<EgliseEntity>;
    update(id: number, updateEgliseDto: UpdateEgliseDto): Promise<EgliseEntity>;
    remove(id: number): Promise<EgliseEntity | ForbiddenException>;
}
