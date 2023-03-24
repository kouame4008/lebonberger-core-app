import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EglisesService } from './eglises.service';
import { CreateEgliseDto } from './dto/create-eglise.dto';
import { UpdateEgliseDto } from './dto/update-eglise.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Eglises')
@Controller('eglises')
export class EglisesController {
  constructor(private readonly eglisesService: EglisesService) {}

  @Post()
  create(@Body() createEgliseDto: CreateEgliseDto) {
    return this.eglisesService.create(createEgliseDto);
  }

  @Get()
  async findAll() {
    return await this.eglisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eglisesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEgliseDto: UpdateEgliseDto) {
    return this.eglisesService.update(+id, updateEgliseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eglisesService.remove(+id);
  }
}
