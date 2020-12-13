import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsModule } from './modules/breeds/breeds.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/dogbreed.db',
      entities: ["dist/**/**.entity{.ts,.js}"],
      synchronize: false
    }),
    BreedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
