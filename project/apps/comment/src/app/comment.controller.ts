import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillDto } from '@project/shared/helpers';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRdo } from './rdo/comment.rdo';

@ApiTags('comments')
@Controller('comments')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) {}

  @ApiResponse({ status: HttpStatus.CREATED, description: 'Comment created.' })
  @Post()
  public async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.create(dto);
    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @ApiResponse({ type: CommentRdo, status: HttpStatus.OK, description: 'Comments found.' })
  @Get()
  public async index() {
    const comments = await this.commentService.findAll();
    return comments.map((comment) => fillDto(CommentRdo, comment.toPOJO()));
  }

  @ApiResponse({ type: CommentRdo, status: HttpStatus.OK, description: 'Comment found.' })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const comment = await this.commentService.findById(id);
    return fillDto(CommentRdo, comment.toPOJO());
  }

  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Comment deleted.' })
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    await this.commentService.delete(id);
  }
}
