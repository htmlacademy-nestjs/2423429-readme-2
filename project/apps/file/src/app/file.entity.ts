import { File } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class FileEntity implements File, Entity<string> {
  public id?: string;
  public originalName!: string;
  public size!: number;
  public mimetype!: string;
  public path!: string;
  public createdAt?: Date;

  constructor(file: File) {
    this.populate(file);
  }

  public toPOJO(): Record<string, unknown> {
    return { ...this } as Record<string, unknown>;
  }

  public populate(data: File): void {
    Object.assign(this, data);
  }

  static fromObject(data: File & { _id?: unknown }): FileEntity {
    const { _id, ...fileData } = data;
    const entity = new FileEntity(fileData);
    entity.id = _id !== undefined ? String(_id) : fileData.id;
    return entity;
  }
}
