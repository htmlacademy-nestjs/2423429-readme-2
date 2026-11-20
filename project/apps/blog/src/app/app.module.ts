import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { dbConfig, getMongooseOptions } from '@project/shared/config/user';
import { BlogPostModule } from './blog-post/blog-post.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
      envFilePath: 'apps/blog/.env',
    }),
    MongooseModule.forRootAsync(getMongooseOptions()),
    BlogPostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
