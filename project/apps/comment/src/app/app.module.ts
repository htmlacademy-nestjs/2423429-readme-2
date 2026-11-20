import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { dbConfig, getMongooseOptions } from '@project/shared/config/user';
import { CommentModule } from './comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
      envFilePath: 'apps/comment/.env',
    }),
    MongooseModule.forRootAsync(getMongooseOptions()),
    CommentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
