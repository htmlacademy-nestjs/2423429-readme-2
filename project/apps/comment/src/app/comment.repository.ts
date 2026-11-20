import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/shared/core';
import { CommentEntity } from './comment.entity';
import { CommentModel } from './comment.model';

@Injectable()
export class CommentRepository extends BaseMongoRepository<CommentEntity, CommentModel> {
  constructor(
    @InjectModel(CommentModel.name) commentModel: Model<CommentModel>
  ) {
    super(commentModel, CommentEntity.fromObject);
  }

  public async findAll(): Promise<CommentEntity[]> {
    const documents = await this.model.find().exec();
    return documents.map(
      (document) => this.createEntityFromDocument(document as CommentModel) as CommentEntity
    );
  }
}
