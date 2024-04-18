import { Test, TestingModule } from '@nestjs/testing';
import { WriteupsController } from './writeups.controller';

describe('WriteupsController', () => {
  let controller: WriteupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WriteupsController],
    }).compile();

    controller = module.get<WriteupsController>(WriteupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
