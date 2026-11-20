import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Comment } from '@project/shared/app/types';

@Schema({
  collection: 'comments',
  timestamps: true,
})
export class CommentModel extends Document implements Comment {
  @Prop({ required: true })
  public message: string;

  @Prop({ required: true })
  public postId: string;

  @Prop({ required: true })
  public userId: string;
}

export const CommentSchema = SchemaFactory.createForClass(CommentModel);
