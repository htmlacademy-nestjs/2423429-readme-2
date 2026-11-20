import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/shared/core';
import { LikeEntity } from './like.entity';
import { LikeModel } from './like.model';

@Injectable()
export class LikeRepository extends BaseMongoRepository<LikeEntity, LikeModel> {
  constructor(
    @InjectModel(LikeModel.name) likeModel: Model<LikeModel>
  ) {
    super(likeModel, LikeEntity.fromObject);
  }

  public async findAll(): Promise<LikeEntity[]> {
    const documents = await this.model.find().exec();
    return documents.map(
      (document) => this.createEntityFromDocument(document as LikeModel) as LikeEntity
    );
  }
}
