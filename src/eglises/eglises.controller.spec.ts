import { Test, TestingModule } from '@nestjs/testing';
import { EglisesController } from './eglises.controller';
import { EglisesService } from './eglises.service';

describe('EglisesController', () => {
  let controller: EglisesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EglisesController],
      providers: [EglisesService],
    }).compile();

    controller = module.get<EglisesController>(EglisesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
