import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillDto } from '@project/shared/helpers';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { LikeRdo } from './rdo/like.rdo';

@ApiTags('likes')
@Controller('likes')
export class LikeController {
  constructor(
    private readonly likeService: LikeService
  ) {}

  @ApiResponse({ status: HttpStatus.CREATED, description: 'Like created.' })
  @Post()
  public async create(@Body() dto: CreateLikeDto) {
    const newLike = await this.likeService.create(dto);
    return fillDto(LikeRdo, newLike.toPOJO());
  }

  @ApiResponse({ type: LikeRdo, status: HttpStatus.OK, description: 'Likes found.' })
  @Get()
  public async index() {
    const likes = await this.likeService.findAll();
    return likes.map((like) => fillDto(LikeRdo, like.toPOJO()));
  }

  @ApiResponse({ type: LikeRdo, status: HttpStatus.OK, description: 'Like found.' })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const like = await this.likeService.findById(id);
    return fillDto(LikeRdo, like.toPOJO());
  }

  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Like removed.' })
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    await this.likeService.delete(id);
  }
}
