import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CommentRdo {
  @ApiProperty({ description: 'The unique comment ID', example: '13' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'Comment text', example: 'Great post!' })
  @Expose()
  public message: string;

  @ApiProperty({ description: 'Post id', example: '13' })
  @Expose()
  public postId: string;

  @ApiProperty({ description: 'User id', example: '1' })
  @Expose()
  public userId: string;

  @ApiProperty({ description: 'Comment created date' })
  @Expose()
  public createdAt?: Date;
}
