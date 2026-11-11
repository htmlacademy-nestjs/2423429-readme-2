import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateFileDto {
  @ApiProperty({ description: 'Original file name', example: 'photo.jpg' })
  @IsString()
  public originalName: string;

  @ApiProperty({ description: 'File size in bytes', example: 1024 })
  @IsNumber()
  public size: number;

  @ApiProperty({ description: 'File mimetype', example: 'image/jpeg' })
  @IsString()
  public mimetype: string;

  @ApiProperty({ description: 'File path', example: '/uploads/photo.jpg' })
  @IsString()
  public path: string;
}
