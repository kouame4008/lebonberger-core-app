import { EglisesService } from './eglises.service';
import { CreateEgliseDto } from './dto/create-eglise.dto';
import { UpdateEgliseDto } from './dto/update-eglise.dto';
export declare class EglisesController {
    private readonly eglisesService;
    constructor(eglisesService: EglisesService);
    create(createEgliseDto: CreateEgliseDto): Promise<import("./entities/eglise.entity").EgliseEntity>;
    findAll(): Promise<import("./entities/eglise.entity").EgliseEntity[]>;
    findOne(id: string): Promise<import("./entities/eglise.entity").EgliseEntity>;
    update(id: string, updateEgliseDto: UpdateEgliseDto): Promise<import("./entities/eglise.entity").EgliseEntity>;
    remove(id: string): Promise<import("./entities/eglise.entity").EgliseEntity | import("@nestjs/common").ForbiddenException>;
}
