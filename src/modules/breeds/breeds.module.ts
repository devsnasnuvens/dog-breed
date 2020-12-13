import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogBreed } from 'src/database/entities/DogBreed.entity';
import { BreedsController } from './breeds.controller';
import { BreedsService } from './breeds.service';

@Module({
    imports: [TypeOrmModule.forFeature([DogBreed])],
    controllers: [BreedsController],
    providers: [BreedsService]
})
export class BreedsModule {}
