import { Test, TestingModule } from '@nestjs/testing';
import { BreedsService } from './breeds.service';

describe('BreedsService', () => {
  let service: BreedsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BreedsService],
    }).compile();

    service = module.get<BreedsService>(BreedsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
