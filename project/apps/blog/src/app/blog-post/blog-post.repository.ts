import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/shared/core';
import { BlogPostEntity } from './blog-post.entity';
import { BlogPostModel } from './blog-post.model';

@Injectable()
export class BlogPostRepository extends BaseMongoRepository<BlogPostEntity, BlogPostModel> {
  constructor(
    @InjectModel(BlogPostModel.name) blogPostModel: Model<BlogPostModel>
  ) {
    super(blogPostModel, BlogPostEntity.fromObject);
  }

  public async findAll(): Promise<BlogPostEntity[]> {
    const documents = await this.model.find().exec();
    return documents.map(
      (document) => this.createEntityFromDocument(document as BlogPostModel) as BlogPostEntity
    );
  }
}
