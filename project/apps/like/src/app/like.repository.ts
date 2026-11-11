import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/shared/core';
import { LikeEntity } from './like.entity';

@Injectable()
export class LikeRepository extends BaseMemoryRepository<LikeEntity> {
  public async findAll(): Promise<LikeEntity[]> {
    return Array.from(this.entities.values());
  }
}
