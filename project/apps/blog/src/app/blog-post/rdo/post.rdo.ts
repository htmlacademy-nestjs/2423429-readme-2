import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PostStatus, PostType } from '@project/shared/app/types';

export class PostRdo {
  @ApiProperty({ description: 'The unique post ID', example: '13' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'Post type', enum: PostType, example: PostType.Text })
  @Expose()
  public type: PostType;

  @ApiProperty({ description: 'Post author id', example: '13' })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: 'Post status', enum: PostStatus, example: PostStatus.Published })
  @Expose()
  public status: PostStatus;

  @ApiProperty({ description: 'Post tags', example: ['travel', 'food'] })
  @Expose()
  public tags?: string[];

  @ApiProperty({ description: 'Post title', example: 'My first post' })
  @Expose()
  public title?: string;

  @ApiProperty({ description: 'Post created date' })
  @Expose()
  public createdAt?: Date;

  @ApiProperty({ description: 'Post published date' })
  @Expose()
  public publishedAt?: Date;
}
