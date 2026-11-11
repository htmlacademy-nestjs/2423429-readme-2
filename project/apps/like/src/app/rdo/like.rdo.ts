import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LikeRdo {
  @ApiProperty({ description: 'The unique like ID', example: '13' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'Post id', example: '13' })
  @Expose()
  public postId: string;

  @ApiProperty({ description: 'User id', example: '1' })
  @Expose()
  public userId: string;

  @ApiProperty({ description: 'Like created date' })
  @Expose()
  public createdAt?: Date;
}
