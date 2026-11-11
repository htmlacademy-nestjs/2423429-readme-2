import { Like } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class LikeEntity implements Like, Entity<string> {
  public id?: string;
  public postId!: string;
  public userId!: string;
  public createdAt?: Date;

  constructor(like: Like) {
    this.populate(like);
  }

  public toPOJO(): Record<string, unknown> {
    return { ...this } as Record<string, unknown>;
  }

  public populate(data: Like): void {
    Object.assign(this, data);
  }

  static fromObject(data: Like): LikeEntity {
    return new LikeEntity(data);
  }
}
