import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { PostType } from '@project/shared/app/types';

export class CreatePostDto {
  @ApiProperty({ description: 'Post type', enum: PostType, example: PostType.Text })
  @IsEnum(PostType)
  public type: PostType;

  @ApiProperty({ description: 'Post author id', example: '13' })
  @IsString()
  public authorId: string;

  @ApiProperty({ description: 'Post title', example: 'My first post' })
  @IsOptional()
  @IsString()
  @Length(20, 50)
  public title?: string;

  @ApiProperty({ description: 'Post tags', example: ['travel', 'food'] })
  @IsOptional()
  @IsArray()
  public tags?: string[];

  @ApiProperty({ description: 'Video url', example: 'https://youtube.com/watch?v=...' })
  @IsOptional()
  @IsString()
  public videoUrl?: string;

  @ApiProperty({ description: 'Announce text' })
  @IsOptional()
  @IsString()
  public announceText?: string;

  @ApiProperty({ description: 'Post text' })
  @IsOptional()
  @IsString()
  public text?: string;

  @ApiProperty({ description: 'Quote text' })
  @IsOptional()
  @IsString()
  public quoteText?: string;

  @ApiProperty({ description: 'Quote author' })
  @IsOptional()
  @IsString()
  public quoteAuthor?: string;

  @ApiProperty({ description: 'Photo path' })
  @IsOptional()
  @IsString()
  public photo?: string;

  @ApiProperty({ description: 'Link url' })
  @IsOptional()
  @IsString()
  public linkUrl?: string;

  @ApiProperty({ description: 'Link description' })
  @IsOptional()
  @IsString()
  public description?: string;
}
