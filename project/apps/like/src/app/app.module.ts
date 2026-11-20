import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { dbConfig, getMongooseOptions } from '@project/shared/config/user';
import { LikeModule } from './like.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
      envFilePath: 'apps/like/.env',
    }),
    MongooseModule.forRootAsync(getMongooseOptions()),
    LikeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
