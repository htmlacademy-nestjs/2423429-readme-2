import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({ description: 'Comment text', example: 'Great post!' })
  @IsString()
  @Length(10, 300)
  public message: string;

  @ApiProperty({ description: 'Post id', example: '13' })
  @IsString()
  public postId: string;

  @ApiProperty({ description: 'User id', example: '1' })
  @IsString()
  public userId: string;
}
