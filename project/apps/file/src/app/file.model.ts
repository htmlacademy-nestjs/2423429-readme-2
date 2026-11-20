import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { File } from '@project/shared/app/types';

@Schema({
  collection: 'files',
  timestamps: true,
})
export class FileModel extends Document implements File {
  @Prop({ required: true })
  public originalName: string;

  @Prop({ required: true })
  public size: number;

  @Prop({ required: true })
  public mimetype: string;

  @Prop({ required: true })
  public path: string;
}

export const FileSchema = SchemaFactory.createForClass(FileModel);
