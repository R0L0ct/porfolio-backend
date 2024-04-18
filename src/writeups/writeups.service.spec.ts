import { Test, TestingModule } from '@nestjs/testing';
import { WriteupsService } from './writeups.service';

describe('WriteupsService', () => {
  let service: WriteupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WriteupsService],
    }).compile();

    service = module.get<WriteupsService>(WriteupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
