import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Post, PostStatus, PostType } from '@project/shared/app/types';

@Schema({
  collection: 'posts',
  timestamps: true,
})
export class BlogPostModel extends Document implements Post {
  @Prop({ required: true, type: String, enum: PostType })
  public type: PostType;

  @Prop({ required: true })
  public authorId: string;

  @Prop({ required: true, type: String, enum: PostStatus, default: PostStatus.Published })
  public status: PostStatus;

  @Prop({ type: [String] })
  public tags?: string[];

  @Prop()
  public title?: string;

  @Prop()
  public videoUrl?: string;

  @Prop()
  public announceText?: string;

  @Prop()
  public text?: string;

  @Prop()
  public quoteText?: string;

  @Prop()
  public quoteAuthor?: string;

  @Prop()
  public photo?: string;

  @Prop()
  public linkUrl?: string;

  @Prop()
  public description?: string;

  @Prop()
  public publishedAt?: Date;

  @Prop()
  public isRepost?: boolean;

  @Prop()
  public originalPostId?: string;

  @Prop()
  public originalAuthorId?: string;
}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPostModel);
