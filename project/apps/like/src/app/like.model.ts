import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Like } from '@project/shared/app/types';

@Schema({
  collection: 'likes',
  timestamps: true,
})
export class LikeModel extends Document implements Like {
  @Prop({ required: true })
  public postId: string;

  @Prop({ required: true })
  public userId: string;
}

export const LikeSchema = SchemaFactory.createForClass(LikeModel);
