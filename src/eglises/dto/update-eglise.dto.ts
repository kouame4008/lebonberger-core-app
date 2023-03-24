import { PartialType } from '@nestjs/mapped-types';
import { CreateEgliseDto } from './create-eglise.dto';

export class UpdateEgliseDto extends PartialType(CreateEgliseDto) {}
