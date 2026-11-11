import { Injectable, NotFoundException } from '@nestjs/common';
import { PostStatus } from '@project/shared/app/types';
import { BlogPostRepository } from './blog-post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BlogPostEntity } from './blog-post.entity';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostRepository
  ) {}

  public async create(dto: CreatePostDto): Promise<BlogPostEntity> {
    const post = new BlogPostEntity({
      ...dto,
      status: PostStatus.Published,
      createdAt: new Date(),
      publishedAt: new Date(),
    });
    return this.blogPostRepository.save(post);
  }

  public async findAll(): Promise<BlogPostEntity[]> {
    return this.blogPostRepository.findAll();
  }

  public async findById(id: string): Promise<BlogPostEntity> {
    const existPost = await this.blogPostRepository.findById(id);
    if (!existPost) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    return existPost;
  }

  public async update(id: string, dto: UpdatePostDto): Promise<BlogPostEntity> {
  const existPost = await this.findById(id);
  Object.assign(existPost, dto);
  return this.blogPostRepository.update(id, existPost);
}

  public async delete(id: string): Promise<void> {
    await this.findById(id);
    return this.blogPostRepository.deleteById(id);
  }
}
