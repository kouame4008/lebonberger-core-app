import { Test, TestingModule } from '@nestjs/testing';
import { EglisesService } from './eglises.service';

describe('EglisesService', () => {
  let service: EglisesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EglisesService],
    }).compile();

    service = module.get<EglisesService>(EglisesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
