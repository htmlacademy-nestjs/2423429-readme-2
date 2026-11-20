import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { dbConfig, getMongooseOptions } from '@project/shared/config/user';
import { FileModule } from './file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
      envFilePath: 'apps/file/.env',
    }),
    MongooseModule.forRootAsync(getMongooseOptions()),
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
