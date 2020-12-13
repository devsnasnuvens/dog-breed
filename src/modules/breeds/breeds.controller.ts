import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { BreedsService } from './breeds.service';
import { CreateBreedDto } from './dtos/create-breed.dto';

@Controller('breeds')
export class BreedsController {
    constructor(
        private readonly breedsService: BreedsService
    ) {}

    @Get()
    findAll(): Promise<DogBreed[]> {
        return this.breedsService.findAll();
    }

    @Post()
    create(@Body() dto: CreateBreedDto) {
        this.breedsService.create(dto);
    }
}
