import { Comment } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class CommentEntity implements Comment, Entity<string> {
  public id?: string;
  public message!: string;
  public postId!: string;
  public userId!: string;
  public createdAt?: Date;

  constructor(comment: Comment) {
    this.populate(comment);
  }

  public toPOJO(): Record<string, unknown> {
    return { ...this } as Record<string, unknown>;
  }

  public populate(data: Comment): void {
    Object.assign(this, data);
  }

  static fromObject(data: Comment): CommentEntity {
    return new CommentEntity(data);
  }
}
