import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlogPostController } from './blog-post.controller';
import { BlogPostRepository } from './blog-post.repository';
import { BlogPostService } from './blog-post.service';
import { BlogPostModel, BlogPostSchema } from './blog-post.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogPostModel.name, schema: BlogPostSchema },
    ]),
  ],
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogPostRepository],
  exports: [BlogPostRepository],
})
export class BlogPostModule {}
