import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillDto } from '@project/shared/helpers';
import { BlogPostService } from './blog-post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostRdo } from './rdo/post.rdo';

@ApiTags('posts')
@Controller('posts')
export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService
  ) {}

  @ApiResponse({ status: HttpStatus.CREATED, description: 'Post created.' })
  @Post()
  public async create(@Body() dto: CreatePostDto) {
    const newPost = await this.blogPostService.create(dto);
    return fillDto(PostRdo, newPost.toPOJO());
  }

  @ApiResponse({ type: PostRdo, status: HttpStatus.OK, description: 'Posts found.' })
  @Get()
  public async index() {
    const posts = await this.blogPostService.findAll();
    return posts.map((post) => fillDto(PostRdo, post.toPOJO()));
  }

  @ApiResponse({ type: PostRdo, status: HttpStatus.OK, description: 'Post found.' })
  @Get(':id')
  public async show(@Param('id') id: string) {
    const post = await this.blogPostService.findById(id);
    return fillDto(PostRdo, post.toPOJO());
  }

  @ApiResponse({ type: PostRdo, status: HttpStatus.OK, description: 'Post updated.' })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    const updatedPost = await this.blogPostService.update(id, dto);
    return fillDto(PostRdo, updatedPost.toPOJO());
  }

  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Post deleted.' })
  @Delete(':id')
  public async delete(@Param('id') id: string) {
    await this.blogPostService.delete(id);
  }
}
