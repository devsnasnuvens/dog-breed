import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { Repository } from 'typeorm';
import { CreateBreedDto } from './dtos/create-breed.dto';

@Injectable()
export class BreedsService {
    constructor(
        @InjectRepository(DogBreed)
        private breedRepository: Repository<DogBreed>
    ) {}

    findAll(): Promise<DogBreed[]> {
        return this.breedRepository.find();
    }

    create(dto: CreateBreedDto) {
        this.breedRepository.insert({ Name: dto.name, PictureUrl: dto.pictureUrl });
    }
}
