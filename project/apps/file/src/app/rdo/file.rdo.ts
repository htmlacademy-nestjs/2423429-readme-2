import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class FileRdo {
  @ApiProperty({ description: 'The unique file ID', example: '13' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'Original file name', example: 'photo.jpg' })
  @Expose()
  public originalName: string;

  @ApiProperty({ description: 'File size in bytes', example: 1024 })
  @Expose()
  public size: number;

  @ApiProperty({ description: 'File mimetype', example: 'image/jpeg' })
  @Expose()
  public mimetype: string;

  @ApiProperty({ description: 'File path', example: '/uploads/photo.jpg' })
  @Expose()
  public path: string;

  @ApiProperty({ description: 'File created date' })
  @Expose()
  public createdAt?: Date;
}
