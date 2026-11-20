import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/shared/core';
import { FileEntity } from './file.entity';
import { FileModel } from './file.model';

@Injectable()
export class FileRepository extends BaseMongoRepository<FileEntity, FileModel> {
  constructor(
    @InjectModel(FileModel.name) fileModel: Model<FileModel>
  ) {
    super(fileModel, FileEntity.fromObject);
  }

  public async findAll(): Promise<FileEntity[]> {
    const documents = await this.model.find().exec();
    return documents.map(
      (document) => this.createEntityFromDocument(document as FileModel) as FileEntity
    );
  }
}
