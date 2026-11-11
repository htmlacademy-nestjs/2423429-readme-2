import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLikeDto {
  @ApiProperty({ description: 'Post id', example: '13' })
  @IsString()
  public postId: string;

  @ApiProperty({ description: 'User id', example: '1' })
  @IsString()
  public userId: string;
}
